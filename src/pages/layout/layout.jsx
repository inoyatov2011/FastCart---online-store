import React, { useState } from 'react'
import logo1 from "../../img/Group 1116606595.png"
import logo3 from "../../img/Wishlist.png"
import logo5 from "../../img/user.png"
import logo6 from "../../img/Cart1.png"
import { Link, Outlet } from "react-router-dom"
import { Button, Input } from 'antd'
import { MenuOutlined, CloseOutlined, SendOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, ShoppingCartOutlined, DownOutlined, RightOutlined } from '@ant-design/icons'
const { Search } = Input

const Layout = () => {
  const [modal, setModal] = useState(false)
  const [modalC, setModalC] = useState(false)

  return (
    <div>
      {modal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
          <div className="bg-white w-[80%] p-5 rounded-lg">
            <div className="flex justify-end mb-4">
              <CloseOutlined onClick={() => setModal(false)} />
            </div>
            <div className='flex items-start  flex-col gap-[20px]'>
              <ul className="flex flex-col gap-4 text-lg">
                <Link to="/" onClick={() => setModal(false)}><li>Home</li></Link>
                <Link to="/contact" onClick={() => setModal(false)}><li>Contact</li></Link>
                <Link to="/about" onClick={() => setModal(false)}><li>About</li></Link>
                <Link to="/signUp" onClick={() => setModal(false)}><li>Sign Up</li></Link>
              </ul>
              <div className=" gap-[20px]">
                <Link to={"/wishlist"} onClick={() => setModal(false)}>
                  <img src={logo3} alt=""  />
                </Link>
                <Link to={"/cart"}  onClick={() => setModal(false)}>
                  <img src={logo6} className='ml-[3px]' alt="" />
                </Link>
                <Link to={"/account"} onClick={() => setModal(false)}>
                  <img src={logo5} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {modalC && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
          <div className="bg-white w-[80%] p-5 rounded-lg">
            <div className="flex justify-end mb-4">
              <CloseOutlined onClick={() => setModalC(false)} />
            </div>
            <div className='flex items-center justify-between'>
              <ul className="flex flex-col gap-4 text-lg">
                <li onClick={() => setModalC(false)}>Woman’s Fashion <RightOutlined /></li>
                <li onClick={() => setModalC(false)}>Men’s Fashion <RightOutlined /></li>
                <li onClick={() => setModalC(false)}>Electronics</li>
                <li onClick={() => setModalC(false)}>Home & Lifestyle</li>
                <li onClick={() => setModalC(false)}>Medicine</li>
                <li onClick={() => setModalC(false)}>Sports & Outdoor</li>
                <li onClick={() => setModalC(false)}>Baby’s & Toys</li>
                <li onClick={() => setModalC(false)}>Groceries & Pets</li>
                <li onClick={() => setModalC(false)}>Health & Beauty</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <nav className="flex items-center justify-between flex-wrap max-w-[1300px] m-auto p-4">
        <Link to={"/"}>
        <img src={logo1} alt="" />
        </Link>
        <Button onClick={() => setModalC(true)}><DownOutlined  /></Button>
        <ul className="hidden md:flex gap-[30px]">
          <Link to={"/"}><li>Home</li></Link>
          <Link to={"/contact"}><li>Contact</li></Link>
          <Link to={"/about"}><li>About</li></Link>
          <Link to={"/signUp"}><li>Sign Up</li></Link>
        </ul>
        <div className="md:hidden">
          <MenuOutlined onClick={() => setModal(true)} />
        </div>

        <div className="ml-[60px] md:ml-[0] w-[250px]">
          <Search placeholder="What are you looking for?" />
        </div>
        <div className="hidden md:flex gap-[20px]">
          <Link to={"/wishlist"} onClick={() => setModal(false)}>
            <img src={logo3} alt="" />
          </Link>
          <Link to={"/cart"}  onClick={() => setModal(false)}>
            <img src={logo6} className='mt-[5px]' alt="" />
          </Link>
          <Link to={"/account"} onClick={() => setModal(false)}>
            <img src={logo5} alt="" />
          </Link>
        </div>

      </nav>
      <Outlet />
      <footer className="bg-black text-white mt-10">
        <div className="max-w-[1300px] m-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Exclusive</h1>
            <h2 className="text-lg">Subscribe</h2>
            <p className="text-gray-400">Get 10% off your first order</p>

            <div className="flex border border-white rounded-md overflow-hidden w-full md:w-[220px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black px-3 py-2 outline-none w-full"
              />
              <button className="px-3">
                <SendOutlined />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold">Support</h1>
            <p className="text-gray-400">
              111 Bijoy sarani, Dhaka, <br />
              DH 1515, Bangladesh.
            </p>
            <p className="text-gray-400">exclusive@gmail.com</p>
            <p className="text-gray-400">+88015-88888-9999</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold">Account</h1>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li>My Account</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold">Quick Link</h1>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div >
            <h1>Social </h1>
            <div className='mt-[20px] flex gap-5'>
              <FacebookOutlined />
              <TwitterOutlined />
              <InstagramOutlined />
              <LinkedinOutlined />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
          © Copyright Exclusive 2024. All rights reserved
        </div>
      </footer>
    </div>
  )
}

export default Layout
