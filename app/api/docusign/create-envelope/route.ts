import { NextRequest, NextResponse } from 'next/server'
import puppeteer from 'puppeteer'
import { Buffer } from 'buffer'

import { quoteTemplate } from '@/lib/hbs'
import { getDocusignAccessToken } from '@/lib/docusignTokenManager'


export async function POST(req: NextRequest) {
  try {
    const data = {
      title: "Gap Insurance Quote",
      name: "John Doe",
      date: new Date().toDateString(),
      company: {
        name: "Your Company Inc.",
        address: "1234 Company St.",
        cityStateZip: "Company Town, ST 12345",
        logoUrl: process.env.NEXT_PUBLIC_BASE_URL + "/deductibles.png"
      },
      quote: {
        number: "0000226",
        date: "11-04-2025",
        dueDate: "25-04-2025"
      },
      customer: {
        name: "Customer Name",
        address: "1234 Customer St.",
        cityStateZip: "Customer Town, ST 12345"
      },
      items: [
        { qty: 1, description: "Comprehensive coverage (6 months)", unitPrice: "500.00", amount: "$500.00" },
        { qty: 1, description: "Collision coverage (6 months)", unitPrice: "300.00", amount: "$300.00" },
        { qty: 1, description: "Liability insurance (6 months)", unitPrice: "400.00", amount: "$400.00" },
        { qty: 1, description: "Uninsured/underinsured motorist coverage", unitPrice: "150.00", amount: "$150.00" }
      ],
      totals: {
        subtotal: "$1350.00",
        taxRate: "5%",
        tax: "$67.50",
        total: "$1417.50",
        currency: "USD"
      },
      terms: "Payment is due in 14 days<br>Please make checks payable to: Your Company Inc.",
      signature: "customer signature",
    }
  
    const htmlContent: string = quoteTemplate(data);

    const accessToken = await getDocusignAccessToken();

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: true
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
    const pdfBase64 = Buffer.from(pdfBuffer).toString("base64");
    await browser.close();

    const DOCUSIGN_BASE_PATH = process.env.DOCUSIGN_BASE_PATH
    const DOCUSIGN_ACCOUNT_ID = process.env.DOCUSIGN_ACCOUNT_ID

    if (!DOCUSIGN_BASE_PATH || !DOCUSIGN_ACCOUNT_ID) {
      console.error('Docusign base path or account ID missing environment variables.');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const url = `${DOCUSIGN_BASE_PATH}/restapi/v2.1/accounts/${DOCUSIGN_ACCOUNT_ID}/envelopes`;

    const envelopeDefinition = {
      emailSubject: 'Please Sign Your Auto Insurance Quote',
      documents: [
        {
          documentBase64: pdfBase64,
          name: 'GapInsuranceQuote.pdf', // Document name
          fileExtension: 'pdf',
          documentId: '1',
        },
      ],
      recipients: {
        signers: [
          {
            email: 'leeduris@gmail.com',
            name: 'Duris Lee',
            recipientId: '1',
            routingOrder: '1',
            tabs: {
              signHereTabs: [
                {
                  documentId: '1',
                  pageNumber: '1',
                  anchorString: '[SIGN_HERE]',
                  anchorXOffset: '30',
                  anchorYOffset: '25',
                  anchorIgnoreIfNotPresent: 'false',
                  recipientId: '1',
                  tabLabel: 'Sign Here',
                },
              ],
              // Add other tabs if needed (e.g., Date Signed, Name, etc.)
            },
          },
        ],
      },
      status: 'sent', // Set to 'sent' to send the email immediately, 'created' to save as draft
    };

    // Make the POST request to Docusign
    const docusignResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(envelopeDefinition),
    });

    const docusignData = await docusignResponse.json();

    if (!docusignResponse.ok) {
      console.error('Docusign API Error:', docusignData);
      return NextResponse.json({ error: 'Failed to create Docusign envelope', details: docusignData }, { status: docusignResponse.status });
    }

    console.log('Docusign Envelope Created:', docusignData);

    // Return the Docusign response (e.g., envelopeId, uri) to the client
    return NextResponse.json(docusignData, { status: 201 });

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

