import React from 'react'
import logo1 from "../../img/hero_endframe__cvklg0xk3w6e_large 2.png"
import logo2 from "../../img/1200px-Apple_gray_logo 1.png"
import logo3 from "../../img/Frame 726.png"
import logo4 from "../../img/Category-CellPhone.png"
import logo5 from "../../img/Category-Computer.png"
import logo6 from "../../img/Category-SmartWatch.png"
import logo7 from "../../img/Category-Camera.png"
import logo8 from "../../img/Category-Headphone.png"
import logo9 from "../../img/Category-Gamepad.png"
import logo10 from "../../img/Frame 694.png"
import logo11 from "../../img/ps5-slim-goedkope-playstation_large 1.png"
import logo12 from "../../img/attractive-woman-wearing-hat-posing-black-background 1.png"
import logo13 from "../../img/Frame 707.png"
import logo14 from "../../img/652e82cd70aa6522dd785109a455904c.png"
import logo15 from "../../img/Services.png"
import logo16 from "../../img/Services (1).png"
import logo17 from "../../img/Services (2).png"
import { RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
const CommerceHomePage = () => {
  return (
    <div>
      <section className='max-w-[1100px] m-auto flex justify-between items-center flex-col md:flex-row bg-black text-white'>
        <aside className='flex flex-col pl-[30px] md:pl-[70px] gap-[20px]'>
          <div className='flex gap-[20px] items-center'>
            <img src={logo2} alt="" />
            <h1 className='text-2xl'>iPhone 14 Series</h1>
          </div>
          <h1 className='text-6xl'>Up to 10% <br /> off Voucher</h1>
          <h1 className='flex items-center'>Shop Now <RightOutlined /></h1>
        </aside>
        <aside>
          <img src={logo1} alt="" />
        </aside>
      </section>
      <section className='max-w-[1300px] m-auto mt-[100px]'>
        <div className='flex items-center gap-[20px]'>
          <div className='p-[10px] rounded-[5px] pt-[20px] pb-[12px] bg-[red]'></div>
          <h1 className='text-[red]'> Today’s</h1>
        </div>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-4xl'>Flash Sales</h1>

          </div>
          <img className='hidden md:block' src={logo3} alt="" />
        </div>
        <div className='flex justify-center '>
          <Link to={"/commerceRroduct"}>
            <button className='p-[15px] mt-[20px] text-white pl-[40px] pr-[40px] bg-[#DB4444] rounded-[5px] '>View All Products</button>
          </Link>
        </div>
      </section>
      <section className='max-w-[1300px] m-auto mt-[100px]'>
        <div className='flex items-center gap-[20px]'>
          <div className='p-[10px] rounded-[5px] pt-[20px] pb-[12px] bg-[red]'></div>
          <h1 className='text-[red]'>Categories</h1>
        </div>
        <div className='flex justify-between mb-[20px]'>
          <div>
            <h1 className='text-4xl'>Browse By Category</h1>

          </div>
          <img className=' hidden md:block' src={logo3} alt="" />
        </div>
        <div className='flex justify-between overflow-auto md:overflow-hidden gap-[50px]'>
        <div className='w-[170px] border-2 border-[#0000004D] rounded-[5px] h-[150px] flex flex-col items-center justify-center'>
          <img src={logo4} alt="" />
          <h1>Phones</h1>
        </div>
        <div className='w-[170px] border-2 border-[#0000004D] rounded-[5px] flex flex-col items-center justify-center'>
          <img src={logo5} alt="" />
          <h1>Computers</h1>
        </div>
        <div className='w-[170px] border-2 border-[#0000004D] rounded-[5px] flex flex-col items-center justify-center'>
          <img src={logo6} alt="" />
          <h1>SmartWatch</h1>
        </div>
        <div className='w-[170px]  bg-[red] flex flex-col items-center justify-center rounded-[5px]'>
          <img src={logo7} alt="" />
          <h1>Camera</h1>
        </div>
        <div className='w-[170px] border-2 border-[#0000004D] rounded-[5px] flex flex-col items-center justify-center'>
          <img src={logo8} alt="" />
          <h1>HeadPhones</h1>
        </div>
        <div className='w-[170px]  border-2 border-[#0000004D] rounded-[5px] flex flex-col items-center justify-center'>
          <img src={logo9} alt="" />
          <h1>Gaming</h1>
        </div>
        </div>
      </section>
      <section className='max-w-[1300px] m-auto mt-[100px]'>
        <div className='flex items-center gap-[20px]'>
          <div className='p-[10px] rounded-[5px] pt-[20px] pb-[12px] bg-[red]'></div>
          <h1 className='text-[red]'>This Month</h1>
        </div>
        <div className='flex justify-between mb-[20px] flex-col md:flex-row items-start gap-[20px]'>
          <div>
            <h1 className='text-4xl'>Best Selling Products</h1>

          </div>
          <button className='p-[10px] rounded-[5px] pt-[12px] text-white pb-[12px]  bg-[red]'>View All</button>
        </div>
        </section>
        <section className='max-w-[1100px] m-auto flex justify-between items-center flex-col md:flex-row bg-black text-white'>
        <aside className='flex flex-col pl-[30px] md:pl-[70px] gap-[20px] items-start'>
            <h1 className='text-2xl'>Categories</h1>
          <h1 className='text-5xl'>Enhance Your  <br /> Music Experience</h1>
          <button className='pl-[30px] pr-[30px] rounded-[5px] pt-[12px]  pb-[12px]  bg-[#00FF66]'>View All</button>
        </aside>
        <aside>
          <img src={logo10} alt="" />
        </aside>
      </section>  
      <section className='max-w-[1300px] m-auto mt-[100px]'>
        <div className='flex items-center gap-[20px]'>
          <div className='p-[10px] rounded-[5px] pt-[20px] pb-[12px] bg-[red]'></div>
          <h1 className='text-[red]'>Our Products</h1>
        </div>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-4xl'>Explore Our Products</h1>

          </div>
        </div>
        <div className='flex justify-center '>
          <Link to={"/commerceRroduct"}>
            <button className='p-[15px] text-white pl-[40px] pr-[40px] bg-[#DB4444] rounded-[5px] '>View All Products</button>
          </Link>
        </div>
      </section>
      <section className='max-w-[1300px] m-auto mt-[100px]'>
        <div className='flex items-center gap-[20px]'>
          <div className='p-[10px] rounded-[5px] pt-[20px] pb-[12px] bg-[red]'></div>
          <h1 className='text-[red]'>Featured</h1>
        </div>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-4xl'>New Arrival</h1>

          </div>
        </div>
      </section>
      <section className="max-w-[1300px] m-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 md:row-span-2 relative rounded-lg overflow-hidden bg-black">
          <img src={logo11} className="w-full h-full object-cover" /> 

          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-semibold">PlayStation 5</h2>
            <p className="text-gray-300 text-sm mt-1">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="mt-3 underline">Shop Now</button>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden bg-black">
          <img src={logo12} alt="" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 text-white">
            <h2 className="text-xl font-semibold">Women’s Collections</h2>
            <p className="text-gray-300 text-sm mt-1">
              Featured woman collections that give you another vibe.
            </p>
            <button className="mt-3 underline w-fit">Shop Now</button>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden bg-black">
          <img src={logo13} alt="" />
          <div className="absolute bottom-5 left-5 text-white">
            <h2 className="text-xl font-semibold">Speakers</h2>
            <p className="text-gray-300 text-sm">Amazon wireless speakers</p>
            <button className="mt-2 underline">Shop Now</button>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden bg-black">
          <img src={logo14} alt="" />
          <div className="absolute bottom-5 left-5 text-white">
            <h2 className="text-xl font-semibold">Perfume</h2>
            <p className="text-gray-300 text-sm">GUCCI INTENSE OUD EDP</p>
            <button className="mt-2 underline">Shop Now</button>
          </div>
        </div>

      </div>
    </section>
    <section className='max-w-[1300px] m-auto flex justify-center flex-col md:flex-row gap-[100px] mt-[50px] mb-[150px]'>
      <div className='flex items-center flex-col gap-[5px]'>
        <img src={logo15} alt="" />
        <h1>FREE AND FAST DELIVERY</h1>
        <h1>Free delivery for all orders over $140</h1>
      </div>
      <div className='flex items-center flex-col gap-[5px]'>
        <img src={logo16} alt="" />
        <h1>24/7 CUSTOMER SERVICE</h1>
        <h1>Friendly 24/7 customer support</h1>
      </div>
      <div className='flex items-center flex-col gap-[5px]'>
        <img src={logo17} alt="" />
        <h1>MONEY BACK GUARANTEE</h1>
        <h1>We reurn money within 30 days</h1>
      </div>
      
    </section>
    </div>
  )
}

export default CommerceHomePage
