import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export function TableDemo() {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-bold text-black text-lg">Invoice</TableHead>
          <TableHead className="font-bold text-black text-lg">Status</TableHead>
          <TableHead className="font-bold text-black text-lg">Method</TableHead>
          <TableHead className="text-right font-bold text-black text-lg">Amount</TableHead>
          <TableHead className="text-center font-bold text-black text-lg">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            <TableCell className="text-center">
              <Button variant="outline"
                className="mr-2 px-4 py-1 bg-blue-500 text-white rounded"
                onClick={() => handleEdit(invoice.invoice)}
              >
                Edit
              </Button>
              <Button variant="outline"
                className="px-2 py-1 bg-red-400 text-white rounded"
                onClick={() => handleDelete(invoice.invoice)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          {/* <TableCell colSpan={4}>Total</TableCell> */}
          {/* <TableCell className="text-right">$2,500.00</TableCell> */}
        </TableRow>
      </TableFooter>
    </Table>
  )
}

// Example handlers for Edit and Delete actions
const handleEdit = (invoiceId: any) => {
  console.log(`Edit invoice ${invoiceId}`);
};

const handleDelete = (invoiceId: any) => {
  console.log(`Delete invoice ${invoiceId}`);
};
