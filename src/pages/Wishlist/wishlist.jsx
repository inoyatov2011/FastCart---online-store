import { EyeOutlined, StarOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../img/652e82cd70aa6522dd785109a455904c.png"
import logo2 from "../../img/Wishlist.png"
const Wishlist = () => {
  return (
    <div className='max-w-[1300px] m-auto'>
      <section className='flex justify-between mt-[50px]'>
        <h1>Wishlist (4)</h1>
        <button className='border-2 p-[15px] pl-[40px] pr-[40px] rounded-[5px]'>Move All To Bag</button>
      </section>
        <div className='flex justify-between mt-[30px] mb-[30px]'>
          {[1, 2, 3, 4].map((e) => {
            return (
              <div className=''>
                <div className='flex items-start justify-between p-[15px] bg-[#F5F5F5]'>
                  <img src={logo} alt="" />
                  <div>
                  <Link to={"/wishlist"}>
                    <img src={logo2} alt="" />
                  </Link>
                  <Link to={"/productDetails"}>
                    <EyeOutlined className='ml-[8px]' />
                  </Link>
                  </div>
                </div>
                <h1>Breed Dry Dog Food</h1>
                <div className='flex gap-[15px]'>
                  <h1 className='text-[red]'>$100</h1>
                  <div className='flex gap-[5px]'>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                  <h1 className='text-gray-300'>(35)</h1>
                </div>
              </div>
            )
          })}
        </div>
      <section className='max-w-[1300px] m-auto mt-[50px]'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-[20px]'>
            <div className='p-[10px] rounded-[5px] pt-[20px] pb-[12px] bg-[red]'></div>
            <h1 className='text-[red]'>Just For You</h1>
          </div>
          <Link to={"/commerceRroduct"}>
          <button className='border-2 p-[15px] pl-[40px] pr-[40px] rounded-[5px]'>See All</button>
          </Link>
        </div>
        <div className='flex justify-between mt-[30px] mb-[30px]'>
          {[1, 2, 3, 4].map((e) => {
            return (
              <div className=''>
                <div className='flex items-start justify-between p-[15px] bg-[#F5F5F5]'>
                  <img src={logo} alt="" />
                  <div>
                  <Link to={"/wishlist"}>
                    <img src={logo2} alt="" />
                  </Link>
                  <Link to={"/productDetails"}>
                    <EyeOutlined className='ml-[8px]' />
                  </Link>
                  </div>
                </div>
                <h1>Breed Dry Dog Food</h1>
                <div className='flex gap-[15px]'>
                  <h1 className='text-[red]'>$100</h1>
                  <div className='flex gap-[5px]'>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                  <h1 className='text-gray-300'>(35)</h1>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Wishlist
