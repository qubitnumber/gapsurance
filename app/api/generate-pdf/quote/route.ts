import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import chromium from '@sparticuz/chromium';

import { api } from "@/convex/_generated/api";
import { ConvexHttpClient } from "convex/browser";
import { quoteTemplate } from '@/lib/hbs'

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(req: NextRequest) {
  const { quoteId } = await req.json();

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
      number: quoteId,
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

  const ENV_NODE = process.env.NEXT_ENV_NODE

  const browser = ENV_NODE === 'LOCAL'
    ?
      await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true
      })
    :
      await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(), // <-- Call the function!
        headless: chromium.headless,
      });

  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: "networkidle0" });
  const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });
  await browser.close();

  // 2. Get upload URL from Convex
  const url = await convex.mutation(api.pdf.getUploadUrl, {});

  // 3. Upload the PDF to Convex storage
  const uploadRes = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/pdf" },
    body: pdfBuffer,
  });
  const { storageId } = await uploadRes.json();
  if (!storageId) {
    return NextResponse.json({ error: "Missing storageId" }, { status: 400 });
  }

  // 4. Store metadata in Convex DB
  const res = await convex.mutation(api.pdf.savePdfMetadata, {
    quoteId,
    storageId,
    filename: "quote.pdf",
  })
  if (!res) {
    return NextResponse.json({ error: "Not storageId stored" }, { status: 404 });
  }
  
  // 5. Call Convex to get the signed URL
  const pdfUrl = await convex.query(api.pdf.getPdfUrl, { storageId });
  if (!pdfUrl) {
    return NextResponse.json({ error: "No URL found" }, { status: 404 });
  }

  // 5. Respond with the storageId or a success message
  return NextResponse.json({ pdfUrl });
}