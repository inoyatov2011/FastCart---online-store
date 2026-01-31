import React, { useEffect } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import logo1 from "../../img/pepicons-pop_arrow-spin.png"
import { DeleteOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { clearCart, deleteProductInCart, getProductsInCart, increanseProduct, reduceProduct } from "../../api/cartApi/cartApi"
const Cart = () => {
  let { data } = useSelector((state) => state.cart)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsInCart())
  }, [dispatch])

  return (
    <div className="max-w-[1300px] mx-auto px-4">
      <h1 className="mb-6 text-xl font-semibold">Home / Cart</h1>
      <div className="hidden md:block">
      <div className="flex gap-[40px] items-start">
  <div className="w-[100%]">
   <Table className="border rounded-xl overflow-hidden shadow-sm">
  <TableHeader className="bg-gray-100">
    <TableRow>
      <TableHead>Product</TableHead>
      <TableHead>Price</TableHead>
      <TableHead className="text-center">Quantity</TableHead>
      <TableHead className="text-right">Subtotal</TableHead>
      <TableHead className="text-right">Action</TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
    {data.map(cart =>
      cart.productsInCart.map(item => (
        <TableRow
          key={item.id}
          className="hover:bg-gray-50 transition"
        >
          <TableCell className="flex items-center gap-4">
            <img
              className="w-[60px] h-[60px] rounded-lg object-cover border"
              src={`https://store-api.softclub.tj/images/${item.product.image}`}
              alt={item.product.productName}
            />

            <div>
              <p className="font-semibold text-gray-800">
                {item.product.productName}
              </p>
              <p className="text-sm text-gray-500">
                Color: {item.product.color}
              </p>
            </div>
          </TableCell>

          <TableCell className="font-medium text-gray-700">
            ${item.product.discountPrice}
          </TableCell>

          <TableCell className="text-center">
            <div className="flex items-center justify-center gap-2 border rounded-lg px-2 py-1 w-[90px] mx-auto bg-white shadow-sm">
              <button
                onClick={() => dispatch(increanseProduct(item.id))}
                className="px-2 text-lg font-bold text-green-600 hover:bg-green-100 rounded"
              >
                +
              </button>

              <span className="font-semibold">
                {item.quantity}
              </span>

              <button
                onClick={() => dispatch(reduceProduct(item.id))}
                className="px-2 text-lg font-bold text-red-500 hover:bg-red-100 rounded"
              >
                −
              </button>
            </div>
          </TableCell>

          <TableCell className="text-right font-semibold text-gray-800">
            ${item.product.discountPrice * item.quantity}
          </TableCell>

          <TableCell className="text-right">
            <button
              onClick={() => dispatch(deleteProductInCart(item.id))}
              className="p-2 rounded-full hover:bg-red-100 text-red-500 transition"
            >
              <DeleteOutlined />
            </button>
          </TableCell>
        </TableRow>
      ))
    )}
  </TableBody>
</Table>

  </div>
</div>


      </div>
      <div className="space-y-4 md:hidden">

      </div>
      <section className="flex justify-between items-center mt-[50px]">
        <button className="p-[12px] pl-[35px] pr-[35px] border-2 rounded-[5px]">Return To Shop</button>
        <div className="flex gap-[20px] hidden md:block">
          <button className="p-[12px] pl-[35px] pr-[35px] border-2 rounded-[5px]">Update Cart</button>
          <button className="p-[12px] pl-[35px] pr-[35px] border-2 border-[#DB4444] text-[#DB4444] rounded-[5px]" onClick={()=>dispatch(clearCart(data.id))}>Remove all</button>
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
        
          <div className="w-[300px] mt-[20px] md:w-[30%] border p-[20px] rounded">
    <h1 className="font-semibold mb-4">Cart Total</h1>

    {data.map(cart => (
      <div key={cart.id} className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${cart.totalPrice}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between font-semibold border-t pt-3">
          <span>Total:</span>
          <span>${cart.totalDiscountPrice}</span>
        </div>
      </div>
    ))}

      <button className="mt-4 w-full bg-[#DB4444] text-white py-3 rounded">
        Proceed to checkout
      </button>
  </div>

      </section>
    </div>
  )
}

export default Cart
