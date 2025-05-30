import { NextRequest, NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(req: NextRequest) {
  const acknowledgement = NextResponse.json({ success: true }, { status: 200 });

  try {
    let rawBody = await req.text();
    let envelopeId: string | undefined;
    let status: string | undefined;

    // Try to parse as JSON first
    try {
      const json = JSON.parse(rawBody);
      console.log('json', json)
      // Docusign JSON webhook
      envelopeId = json.data?.envelopeId;
      status = json.event; // e.g., "envelope-completed"
    } catch {
      // Not JSON, try XML
      let xmlBody = rawBody;
      const firstTag = xmlBody.indexOf("<");
      if (firstTag > 0) xmlBody = xmlBody.slice(firstTag);
      xmlBody = xmlBody.trim();
      if (xmlBody.charCodeAt(0) === 0xfeff) xmlBody = xmlBody.slice(1);

      const result = await parseStringPromise(xmlBody, { explicitArray: false });
      if (
        result &&
        result.DocuSignEnvelopeInformation &&
        result.DocuSignEnvelopeInformation.EnvelopeStatus
      ) {
        const envelopeStatus = result.DocuSignEnvelopeInformation.EnvelopeStatus;
        envelopeId = envelopeStatus.EnvelopeID;
        status = envelopeStatus.Status;
      }
    }

    if (!envelopeId || !status) {
      console.error("Could not extract envelopeId or status from webhook.");
      return acknowledgement;
    }

    // Update Convex
    try {
      await convex.mutation(api.envelope.updateStatus, {
        docusignEnvelopeId: envelopeId,
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

export const config = {
  api: {
    bodyParser: false,
  },
};