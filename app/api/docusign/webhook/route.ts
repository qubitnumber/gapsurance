import { NextRequest, NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";
import { ConvexHttpClient } from  "convex/browser";
import { api } from "@/convex/_generated/api";

// Initialize Convex HTTP client
const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(req: NextRequest) {
  // Docusign expects a 200 OK quickly
  const acknowledgement = NextResponse.json({ success: true }, { status: 200 });

  try {
    let xmlBody = await req.text();
    console.log("Received Docusign webhook (XML):\n", xmlBody);

    const a = {
      "event":"envelope-completed",
      "apiVersion":"v2.1",
      "uri":"/restapi/v2.1/accounts/24dfce13-9dce-4aa0-ba12-da5389bb9d8a/envelopes/a70a5ef2-12c4-4aaf-84c5-b84134dce420",
      "retryCount":3,
      "configurationId":21752918,
      "generatedDateTime":"2025-05-30T18:03:50.4233752Z",
      "data":{
        "accountId":"24dfce13-9dce-4aa0-ba12-da5389bb9d8a",
        "userId":"8c531060-928e-471d-9cac-b829f616b0bf",
        "envelopeId":"a70a5ef2-12c4-4aaf-84c5-b84134dce420"
      }
    }

    const firstTag = xmlBody.indexOf("<");
    if (firstTag > 0) {
      xmlBody = xmlBody.slice(firstTag);
    }
    xmlBody = xmlBody.trim();

    // Remove BOM if present
    if (xmlBody.charCodeAt(0) === 0xfeff) {
      xmlBody = xmlBody.slice(1);
    }

    // Parse the XML body
    const result = await parseStringPromise(xmlBody, { explicitArray: false });

    if (!result || !result.DocuSignEnvelopeInformation || !result.DocuSignEnvelopeInformation.EnvelopeStatus) {
      console.error("Unexpected Docusign webhook XML structure.");
      return acknowledgement;
    }

    const envelopeStatus = result.DocuSignEnvelopeInformation.EnvelopeStatus;
    const docusignEnvelopeId = envelopeStatus.EnvelopeID;
    const status = envelopeStatus.Status; // e.g., 'Completed', 'Signed', 'Declined', 'Voided'

    console.log(`Processing Docusign status update for Envelope ID: ${docusignEnvelopeId}, Status: ${status}`);

    // Call the Convex mutation to update the envelope status
    try {
      await convex.mutation(api.envelope.updateStatus, {
        docusignEnvelopeId,
        status,
      });
      console.log("Envelope status updated in Convex.");
    } catch (dbError) {
      console.error("Failed to update envelope status in Convex:", dbError);
    }

    return acknowledgement;
  } catch (error) {
    console.error("Error processing Docusign webhook:", error);
    return acknowledgement;
  }
}

// To allow reading the raw body for XML
export const config = {
  api: {
    bodyParser: false,
  },
};