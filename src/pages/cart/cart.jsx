import React from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "LCD Monitor",
    totalAmount: "$650",
  },
  {
    invoice: "H1 Gamepad",
    totalAmount: "$550",
  },
]
import logo1 from "../../img/pepicons-pop_arrow-spin.png"
import { DeleteOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
const Cart = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4">
      <h1 className="mb-6 text-xl font-semibold">Home / Cart</h1>
      <div className="hidden md:block">
        <Table>
          <TableCaption>Your cart items</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((item) => (
              <TableRow key={item.invoice}>
                <TableCell>{item.invoice}</TableCell>
                <TableCell>{item.totalAmount}</TableCell>
                <TableCell>
                  <select className="border p-1 rounded">
                    {[1, 2, 3, 4, 5].map((q) => (
                      <option key={q}>{q}</option>
                    ))}
                  </select>
                </TableCell>
                <TableCell className="text-right">
                  {item.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="space-y-4 md:hidden">
        {invoices.map((item) => (
          <div
            key={item.invoice}
            className="border rounded-lg p-4 shadow-sm"
          >
            <p className="font-semibold">{item.invoice}</p>
            <p className="text-sm text-gray-500">
              Price: {item.totalAmount}
            </p>

            <div className="mt-2 flex items-center justify-between">
              <select className="border p-1 rounded">
                {[1, 2, 3, 4, 5].map((q) => (
                  <option key={q}>{q}</option>
                ))}
              </select>

              <span className="font-medium">
                {item.totalAmount}
              </span>
            </div>
          </div>
        ))}
      </div>
      <section className="flex justify-between items-center mt-[50px]">
        <button className="p-[12px] pl-[35px] pr-[35px] border-2 rounded-[5px]">Return To Shop</button>
        <div className="flex gap-[20px] hidden md:block">
          <button className="p-[12px] pl-[35px] pr-[35px] border-2 rounded-[5px]">Update Cart</button>
          <button className="p-[12px] pl-[35px] pr-[35px] border-2 border-[#DB4444] text-[#DB4444] rounded-[5px]">Remove all</button>
        </div>
        <div className="flex gap-[10px] md:hidden">
          <DeleteOutlined />
          <img src={logo1} alt="" />
        </div>
      </section>
      <section className="flex justify-between flex-col md:flex-row items-start mt-[50px]">
        <div className="flex gap-[20px]">
          <button className="p-[12px] pl-[15px] pr-[80px] border-2 rounded-[5px]">Coupon Code</button>
          <button className="p-[12px] pl-[35px] pr-[35px] border-2 border-[#DB4444] text-[#DB4444] rounded-[5px]">Apply</button>
        </div>
        <div className="p-[17px] flex flex-col items-start gap-[10px] rounded-[5px] border-2">
          <h1>Cart Total</h1>
          <div className="flex gap-[100px]">
            <h1>Subtotal</h1>
            <h1>$1750</h1>
          </div>
          <div className="flex gap-[100px]">
          <h1>Shipping:</h1>
            <h1>Free</h1>
          </div>
          <div className="flex gap-[130px] pt-[10px] border-t-2">
          <h1>Total:</h1>
            <h1>$1750</h1>
          </div>
          <Link to={"/checkOut"}>
          <button className="p-[12px] pl-[40px] rounded-[5px] pr-[40px] bg-[#DB4444] text-white">Procees to checkout</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Cart
