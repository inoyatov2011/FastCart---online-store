import React, { useEffect, useState } from 'react'
import logo1 from "../../img/hero_endframe__cvklg0xk3w6e_large 2.png"
import logo2 from "../../img/1200px-Apple_gray_logo 1.png"
import logo3 from "../../img/Frame 726.png"
import logo10 from "../../img/Frame 694.png"
import logo11 from "../../img/ps5-slim-goedkope-playstation_large 1.png"
import logo12 from "../../img/attractive-woman-wearing-hat-posing-black-background 1.png"
import logo13 from "../../img/Frame 707.png"
import logo14 from "../../img/652e82cd70aa6522dd785109a455904c.png"
import logo15 from "../../img/Services.png"
import logo16 from "../../img/Services (1).png"
import logo17 from "../../img/Services (2).png"
import { addToWishlist, isInWishlist, removeFromWishlist } from "../../utils/wishlist";

import { EyeOutlined, HeartOutlined, RightOutlined, StarOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getProducts } from '../../api/productsApi/productsSliceApi'
import "./style.css"
import { getCategory } from '../../api/categoryApi/categoryApi'
const CommerceHomePage = () => {
  const { data } = useSelector((state) => state.product)
  const { data2 } = useSelector((state) => state.category);
  const [wishlistIds, setWishlistIds] = useState([]);
 
  const dispatch = useDispatch()

  const targetDate = new Date("2026-02-03T00:00:00")

  const getTimeLeft = () => {
    const diff = targetDate - new Date()
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
    return {
      d: Math.floor(diff / (1000 * 60 * 60 * 24)),
      h: Math.floor((diff / (1000 * 60 * 60)) % 24),
      m: Math.floor((diff / (1000 * 60)) % 60),
      s: Math.floor((diff / 1000) % 60),
    }
  }
  const [time, setTime] = useState(getTimeLeft())
  const TimeBox = ({ label, value }) => (
    <div className="text-center">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-2xl font-extrabold">{String(value).padStart(2, "0")}</p>
    </div>
  )

  const Dots = () => (
    <div className="flex flex-col justify-center gap-1">
      <span className="w-1 h-1 bg-[#DB4444] rounded-full" />
      <span className="w-1 h-1 bg-[#DB4444] rounded-full" />
    </div>
  )


  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCategory())
    const i = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(i)
    setWishlistIds(
      JSON.parse(localStorage.getItem("wishlist"))?.map(e => e.id) || []
    );
  }, [dispatch])


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
            <div className="mt-2 flex flex-wrap items-center gap-6">
              <h2 className="text-3xl  tracking-tight">Flash Sales</h2>
              <div className="flex gap-4 bg-white shadow rounded-xl px-6 py-4">
                <TimeBox label="Days" value={time.d} />
                <Dots />
                <TimeBox label="Hours" value={time.h} />
                <Dots />
                <TimeBox label="Min" value={time.m} />
                <Dots />
                <TimeBox label="Sec" value={time.s} />
              </div>
            </div>

          </div>
        </div>
        <div className='flex justify-start flex-wrap gap-[50px] overflow-x-auto gap-[30px] mt-[30px]'>
          {data?.map((e) => {
            return (
              <div className='flex flex-col gap-[20px] border-2 p-[10px] rounded-2xl'>

                <div class="product-card">
                  <div className='flex justify-end flex-col items-end mr-[10px] mt-[10px]'>
                    <Link to={`/productDetails/${e.id}`}>
                      <EyeOutlined className='mr-[8px]' />
                    </Link>
                    <div >
                      <HeartOutlined
                        onClick={() => {
                          if (wishlistIds.includes(e.id)) {
                            removeFromWishlist(e.id);
                            setWishlistIds(prev => prev.filter(id => id !== e.id));
                          } else {
                            addToWishlist(e);
                            setWishlistIds(prev => [...prev, e.id]);
                          }
                        }}
                        className={`cursor-pointer text-xl transition 
    ${wishlistIds.includes(e.id) ? 'bg-[red]' : "text-gray-500"}`}
                      />
                    </div>
                  </div>
                  <div class="image-container">
                    <img src={`https://store-api.softclub.tj/images/${e.image}`} alt="Canon EOS DSLR" />
                    <button class="add-to-cart" onClick={() => dispatch(addToCart(e.id))}>Add To Cart</button>
                  </div>
                </div>
                <div class="product-info">
                  <h1 className='text-[18px]'>{e.productName}</h1>
                  <p className='text-[red]'>${e.price}</p>
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>
              </div>
            )
          })}
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
        <div className='flex justify-between overflow-x-auto md:overflow-x-hidden w-full  gap-4'>
          {data2?.map((e) => {
            return (
              <div className='w-[180px] gap-[15px] p-[30px] rounded-2xl hover:bg-[red] hover:text-white hover  border-2 flex flex-col items-center'>
                <img src={`https://store-api.softclub.tj/images/${e.categoryImage}`} className='h-[40px]' alt="" />
                <h1>{e.categoryName}</h1>
              </div>
            )
          })}
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
          <Link to={`/commerceRroduct`}>
            <button className='p-[10px] rounded-[5px] pt-[12px] text-white pb-[12px]  bg-[red]'>View All</button>
          </Link>
        </div>
        <div className='flex justify-start flex-wrap gap-[50px] overflow-x-auto gap-[30px]  mt-[50px] mb-[50px]'>
          {data?.map((e) => {
            return (
              <div className='flex flex-col gap-[20px] border-2 p-[10px] rounded-2xl gap-4'>
                <div class="product-card">
                   <div className='flex justify-end flex-col items-end mr-[10px] mt-[10px]'>
                    <Link to={`/productDetails/${e.id}`}>
                      <EyeOutlined className='mr-[8px]' />
                    </Link>
                    <div className={`p-[5px] border-2 rounded-[5px] hover:bg-[red] ${wishlistIds.includes(e.id) ? "bg-[red]" : "text-gray-500"}`}>
                      <HeartOutlined
                        onClick={() => {
                          if (wishlistIds.includes(e.id)) {
                            removeFromWishlist(e.id);
                            setWishlistIds(prev => prev.filter(id => id !== e.id));
                          } else {
                            addToWishlist(e);
                            setWishlistIds(prev => [...prev, e.id]);
                          }
                        }}
                        className={`cursor-pointer text-xl transition 
    ${wishlistIds.includes(e.id) ? '' : "text-gray-500"}`}
                      />
                    </div>
                  </div>
                  <div class="image-container" >
                    <img src={`https://store-api.softclub.tj/images/${e.image}`} alt="Canon EOS DSLR" />
                    <button class="add-to-cart" onClick={() => dispatch(addToCart(e.id))}>Add To Cart</button>
                  </div>
                </div>
                <div class="product-info">

                  <h1 className='text-[18px]'>{e.productName}</h1>
                  <p className='text-[red]'>${e.price}</p>
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>
              </div>
            )
          })}
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
        <div>
          <h1 className='text-4xl'>Explore Our Products</h1>
          <div className='flex justify-start flex-wrap gap-[50px] w-full mt-[50px] mb-[20px] gap-[30px] overflow-x-auto '>
            {data?.map((e) => {
              return (
                <div className='flex flex-col gap-[20px] border-2 p-[10px] rounded-2xl'>

                  <div class="product-card">

                     <div className='flex justify-end flex-col items-end mr-[10px] mt-[10px]'>
                    <Link to={`/productDetails/${e.id}`}>
                      <EyeOutlined className='mr-[8px]' />
                    </Link>
                    <div className={`p-[5px] border-2 rounded-[5px] hover:bg-[red] ${wishlistIds.includes(e.id) ? "bg-[red]" : "text-gray-500"}`}>
                      <HeartOutlined
                        onClick={() => {
                          if (wishlistIds.includes(e.id)) {
                            removeFromWishlist(e.id);
                            setWishlistIds(prev => prev.filter(id => id !== e.id));
                          } else {
                            addToWishlist(e);
                            setWishlistIds(prev => [...prev, e.id]);
                          }
                        }}
                        className={`cursor-pointer text-xl transition 
    ${wishlistIds.includes(e.id) ? '' : "text-gray-500"}`}
                      />
                    </div>
                  </div>
                    <div class="image-container" >
                      <img src={`https://store-api.softclub.tj/images/${e.image}`} alt="Canon EOS DSLR" />
                      <button class="add-to-cart" onClick={() => dispatch(addToCart(e.id))}>Add To Cart</button>
                    </div>
                  </div>
                  <div class="product-info">
                    <h1 className='text-[18px]'>{e.productName}</h1>
                    <p className='text-[red]'>${e.price}</p>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                </div>
              )
            })}
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
