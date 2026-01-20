import React from 'react'
import logo1 from "../../img/Group 1116606595.png"
import logo2 from "../../img/Component 2.png"
import logo3 from "../../img/Wishlist.png"
import logo4 from "../../img/Cart1 with buy.png"
import logo5 from "../../img/user.png"
import { Link, Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <div >
      <nav className='flex items-center justify-between max-w-[1300px] m-auto'>
        <img src={logo1} alt="" />
        <ul className='flex gap-[30px]'>
          <Link><li>Home</li></Link>
          <Link><li>Contact</li></Link>
          <Link><li>About</li></Link>
          <Link><li>Sign Up</li></Link>
        </ul>
        <button className='p-[15px] bg-[#F5F5F5] flex gap-[20px]'>What are you looking for? <img src={logo2} alt="" /></button>
        <div className='flex gap-[20px]'>
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
        </div>
      </nav>
      <Outlet/>
      <div className='bg-[#000000]'>
      <footer className='max-w-[1300px] m-auto flex justify-between'>
        <div>
          <h1 className='text-2xl'>Exclusive</h1>
          <h1 className='text-2xl'>Subscribe</h1>
          <h1>Get 10% off your first order</h1>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default Layout
