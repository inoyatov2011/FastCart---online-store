import React, { useEffect, useState } from 'react'
import logo1 from "../../img/Group 1116606595.png"
import logo3 from "../../img/Wishlist.png"
import logo5 from "../../img/user.png"
import logo6 from "../../img/Cart1.png"
import { Link, Outlet } from "react-router-dom"
import { Button, Input } from 'antd'
import { MenuOutlined, CloseOutlined, SendOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, DownOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
const { Search } = Input
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { getCategory } from '../../api/categoryApi/categoryApi'
import { getProductsInCart } from '../../api/cartApi/cartApi'

const Layout = () => {
  const [modal, setModal] = useState(false)
  const [modalC, setModalC] = useState(false)
  const [modalL, setModalL] = useState(false)
  const { data2 } = useSelector((state) => state.category);
  const { data } = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  let [search, setSearch] = useState("")

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProductsInCart())
  }, [dispatch]);

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
                  <img src={logo3} alt="" />
                </Link>
                <Link to={"/cart"} onClick={() => setModal(false)}>
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
                <div>
                  {data2?.map((e) => {
                    return (

                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <Link to={"/commerceRroduct"}>
                              <NavigationMenuTrigger> <li onClick={() => setModalC(false)}>{e.categoryName}</li></NavigationMenuTrigger>
                            </Link>
                            <NavigationMenuContent>
                              <ul className="p-4 w-[200px] flex flex-col gap-2">
                                {e.subCategories.map(sub => (
                                  <li
                                    key={sub.id}
                                    className="cursor-pointer hover:text-red-500"
                                  >
                                    <Link to={"/commerceRroduct"}>
                                      <NavigationMenuLink onClick={() => setModalC(false)}>
                                        {sub.subCategoryName}
                                      </NavigationMenuLink>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    )
                  })}
                </div>


              </ul>
            </div>
          </div>
        </div>
      )}
      {modalL && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-[90%] max-w-[400px] rounded-2xl shadow-xl p-6 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-semibold text-gray-800">
                Log out
              </h1>
              <CloseOutlined
                onClick={() => setModalL(false)}
                className="cursor-pointer text-gray-500 hover:text-black"
              />
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setModalL(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  setModalL(false);
                  window.location.reload();
                }}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Log out
              </button>
            </div>

          </div>
        </div>
      )}

      <nav className="flex items-center justify-between flex-wrap max-w-[1300px] m-auto p-4">
        <Link to={"/"}>
          <img src={logo1} alt="" />
        </Link>
        <Button onClick={() => setModalC(true)}>Category <DownOutlined /></Button>
        <ul className="hidden md:flex gap-[30px]">
          <Link to={"/"}><li>Home</li></Link>
          <Link to={"/contact"}><li>Contact</li></Link>
          <Link to={"/about"}><li>About</li></Link>
          {!localStorage.getItem("token") && (
            <Link to={"/signUp"}><li>Sign Up</li></Link>
          )}
        </ul>
        <div className="md:hidden">
          <MenuOutlined onClick={() => setModal(true)} />
        </div>
        <div className="ml-[60px] md:ml-[0] w-[250px]">
          <Search placeholder="What are you looking for?" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="hidden md:flex gap-[20px]">
          <Link to={"/wishlist"} onClick={() => setModal(false)}>
            <img src={logo3} alt="" />
          </Link>
          <Link to={"/cart"} onClick={() => setModal(false)}>
            {data.map((e) => {
              return (
                <div className='absolute top-3.5 ml-[20px] w-[20px] text-white h-[20px] pl-[5px]  rounded-full bg-[red]'>
                  <h1>{e.totalProducts}</h1>
                </div>
              )
            })}
            <img src={logo6} className='mt-[5px]' alt="" />
          </Link>

          {localStorage.getItem("token") && (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Link to={"/account"}>
                      <img src={logo5} alt="User Account" />
                    </Link>
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <NavigationMenuLink className="p-2">
                      <Link to="/account">My Account</Link>
                    </NavigationMenuLink>
                    <Link to={"/signUp"}>
                    <button
                      onClick={() => setModalL(true)}
                      className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600 transition"
                      >
                      Log Out
                    </button>
                      </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}



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
