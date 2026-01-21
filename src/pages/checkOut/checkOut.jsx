import React from 'react'

const CheckOut = () => {
  return (
    <div className='max-w-[1300px] m-auto'>
      <h1>Product / View Cart / CheckOut</h1>
    <div className="max-w-[1300px] mx-auto p-8 font-sans">
      <h1 className="text-3xl font-medium mb-8">Billing Details</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-6">
          <div className="space-y-4">
            {['First name', 'Last name', 'Street address', 'Apartment, floor, etc. (optional)', 'Town/City', 'Phone number', 'Email address'].map((label) => (
              <div key={label}>
                <label className="block text-gray-400 mb-2">{label}</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border border-transparent focus:border-gray-300 p-3 rounded outline-none transition-all"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-4">
            <input 
              type="checkbox" 
              id="save-info" 
              className="w-5 h-5 accent-red-500 cursor-pointer" 
              defaultChecked 
            />
            <label htmlFor="save-info" className="text-sm cursor-pointer">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>
        <div className="space-y-8 py-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded">🎮</div>
                <span>LCD Monitor</span>
              </div>
              <span className="font-medium">$650</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded">🖥️</div>
                <span>HI Gamepad</span>
              </div>
              <span className="font-medium">$1100</span>
            </div>
          </div>
          <div className="space-y-4 border-b pb-4">
            <div className="flex justify-between border-b pb-4">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-xl font-bold pt-2">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" className="w-5 h-5 accent-black" />
                <span>Bank</span>
              </label>
              <div className="flex gap-2">
                <div className="w-8 h-5 bg-gray-200 rounded"></div>
                <div className="w-8 h-5 bg-blue-200 rounded"></div>
                <div className="w-8 h-5 bg-red-200 rounded"></div>
              </div>
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" className="w-5 h-5 accent-black" defaultChecked />
              <span>Cash on delivery</span>
            </label>
          </div>
          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="Coupon Code" 
              className="flex-1 border p-3 rounded outline-none"
            />
            <button className="bg-red-500 text-white px-10 py-3 rounded hover:bg-red-600 transition-colors">
              Apply
            </button>
          </div>

          <button className="w-full bg-red-500 text-white py-4 rounded font-medium hover:bg-red-600 transition-colors">
            Place Order
          </button>
        </div>

      </div>
    </div>
    </div>
  )
}

export default CheckOut
