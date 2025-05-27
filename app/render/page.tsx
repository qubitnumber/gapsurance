'use client'

import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


export default function Home() {
    const [downloading, setDownloading] = useState(false);

    const handleDownload = async () => {
        setDownloading(true);
        try {
            // 1. Fetch the signed URL from your Next.js API
            const res = await fetch("/api/generate-and-store-pdf", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            
            const { pdfUrl } = await res.json();
            if (!pdfUrl) throw new Error("No PDF URL returned");

            // 2. Fetch the PDF and trigger download
            const pdfRes = await fetch(pdfUrl);
            if (!pdfRes.ok) throw new Error("Failed to download PDF");

            const blob = await pdfRes.blob();
        
            // Create a temporary link to trigger the download
            const a = document.createElement("a");
            a.href = window.URL.createObjectURL(blob);
            a.download = "quote.pdf"
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(a.href);
        } catch (err) {
            console.log((err as Error).message);
        } finally {
            setDownloading(false);
        }
    };

    return (
        <div className="m-32">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="default" disabled={downloading}>Save File</Button>
                </DialogTrigger>
                {downloading && (
                    <div style={{
                        position: "fixed",
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: "rgba(0,0,0,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000
                        }}>
                        <div style={{
                            background: "#fff",
                            padding: "32px 48px",
                            borderRadius: "12px",
                            boxShadow: "0 2px 12px #0002",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            color: "#7a9a8a"
                        }}>
                            Downloading...
                        </div>
                    </div>
                )}
                <DialogContent>
                    <DialogTitle>Confirm Save</DialogTitle>
                    <DialogDescription>
                        Do you want to save this file?
                    </DialogDescription>
                    <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button variant="default" onClick={() => handleDownload()}>Yes, Save</Button>
                    </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
