import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PricingTable() {
  return (
    <section className="bg-gray-50 py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <Card className="mx-auto max-w-4xl overflow-hidden">
          <CardHeader className="bg-gray-100 p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3 py-4 text-base font-semibold">Brokerage</TableHead>
                  <TableHead className="w-1/3 py-4 text-base font-semibold">Price*</TableHead>
                  <TableHead className="w-1/3 py-4 text-base font-semibold">Coverage</TableHead>
                </TableRow>
              </TableHeader>
            </Table>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableBody>
                <TableRow className="bg-teal-50">
                  <TableCell className="border-b p-4">
                    <div className="flex items-center gap-2">
                      <Image src="/logo.png" alt="Gapsurance" width={32} height={32} className="h-8 w-8" />
                    </div>
                  </TableCell>
                  <TableCell className="border-b p-4 text-lg font-bold">$19.03/month</TableCell>
                  <TableCell className="border-b p-4">
                    <p className="font-medium">$2M general &</p>
                    <p>professional liability</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border-b p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
                      A
                    </div>
                  </TableCell>
                  <TableCell className="border-b p-4 text-lg font-bold">$25.90/month</TableCell>
                  <TableCell className="border-b p-4">
                    <p>$1M general liability</p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
