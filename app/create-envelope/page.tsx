'use client'

import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function GenerateQuotePDF() {
  const [downloading, setDownloading] = useState(false);

  const createDocusignEnvelope = async () => {
    setDownloading(true);
    try {
      const res = await fetch('/api/docusign/create-envelope', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      const data = await res.json();
  
      if (!res.ok) {
        console.error('Error creating envelope:', data.error);
        alert('Failed to create envelope: ' + (data.details?.message || data.error));
      } else {
        console.log('Envelope created successfully:', data);
        alert('Envelope created! User needs to sign.');
      }
    } catch (err) {
      console.log((err as Error).message);
    } finally {
        setDownloading(false);
    }
  }

  return (
    <div className="m-32">
      <Dialog>
        <DialogTrigger asChild>
            <Button variant="default" disabled={downloading}>Submit Application</Button>
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
                  Submitting...
              </div>
          </div>
        )}
        <DialogContent>
            <DialogTitle>Confirm Save</DialogTitle>
            <DialogDescription>
                Do you want to submit this application?
            </DialogDescription>
            <DialogFooter>
            <DialogClose asChild>
                <Button variant="secondary">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
                <Button variant="default" onClick={() => createDocusignEnvelope()}>Yes, Submit</Button>
            </DialogClose>
            </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
);
}

