import React, { useState } from 'react'
import { Heart, Truck, RefreshCw, Minus, Plus } from 'lucide-react';
import { StarOutlined } from '@ant-design/icons';
const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(2);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('blue');

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  return (
    <div className='max-w-[1300px] m-auto'>
      <h1>Account / Gaming / Havic HV G-92 Gamepad</h1>
      <div className="max-w-6xl mx-auto p-4 font-sans text-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded cursor-pointer">
                <img src="/api/placeholder/80/80" alt="thumbnail" className="object-contain" />
              </div>
            ))}
          </div>
          <div className="flex-1 bg-gray-100 flex items-center justify-center rounded-lg p-8">
            <img src="/api/placeholder/400/300" alt="Main Product" className="object-contain w-full" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold tracking-tight">Havic HV G-92 Gamepad</h1>
          
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400 text-sm">
              <StarOutlined/>
              <StarOutlined/>
              <StarOutlined/>
              <StarOutlined/>
              <StarOutlined/>
            </div>
            <span className="text-gray-400 text-sm">(150 Reviews)</span>
            <span className="text-gray-300 mx-2">|</span>
            <span className="text-green-500 text-sm font-medium">In Stock</span>
          </div>

          <div className="text-2xl font-semibold">$192.00</div>

          <p className="text-sm text-gray-600 border-b pb-4">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-lg">Colours:</span>
            <div className="flex gap-2">
              <button 
                onClick={() => setSelectedColor('blue')}
                className={`w-5 h-5 rounded-full bg-blue-200 border-2 ${selectedColor === 'blue' ? 'border-black' : 'border-transparent'}`}
              />
              <button 
                onClick={() => setSelectedColor('red')}
                className={`w-5 h-5 rounded-full bg-red-400 border-2 ${selectedColor === 'red' ? 'border-black' : 'border-transparent'}`}
              />
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-lg">Size:</span>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 border rounded flex items-center justify-center font-medium transition-colors
                    ${selectedSize === size ? 'bg-red-500 text-white border-red-500' : 'hover:border-black'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex border rounded overflow-hidden h-11">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 hover:bg-gray-100 border-r"
              >
                <Minus size={16} />
              </button>
              <div className="w-16 flex items-center justify-center font-bold text-lg">
                {quantity}
              </div>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 bg-red-500 text-white hover:bg-red-600"
              >
                <Plus size={16} />
              </button>
            </div>
            
            <button className="flex-1 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition-colors">
              Buy Now
            </button>
            
            <button className="p-2 border rounded hover:bg-gray-50">
              <Heart size={24} />
            </button>
          </div>
          <div className="mt-6 border rounded divide-y">
            <div className="p-4 flex gap-4">
              <Truck className="mt-1" />
              <div>
                <div className="font-bold">Free Delivery</div>
                <div className="text-xs underline cursor-pointer">Enter your postal code for Delivery Availability</div>
              </div>
            </div>
            <div className="p-4 flex gap-4">
              <RefreshCw className="mt-1" />
              <div>
                <div className="font-bold">Return Delivery</div>
                <div className="text-xs">Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
       <section className='max-w-[1300px] m-auto mt-[100px]'>
        <div className='flex items-center gap-[20px]'>
          <div className='p-[10px] rounded-[5px] pt-[20px] pb-[12px] bg-[red]'></div>
          <h1 className='text-[red]'>Related Item</h1>
        </div>
      </section>
    </div>
  )
}

export default ProductDetailsPage
