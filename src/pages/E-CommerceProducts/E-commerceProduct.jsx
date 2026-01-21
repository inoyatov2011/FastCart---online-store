import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"
import { EyeOutlined, StarOutlined } from '@ant-design/icons'
import logo from "../../img/652e82cd70aa6522dd785109a455904c.png"
import logo2 from "../../img/Wishlist.png"
import { Link } from 'react-router-dom'
const CommerceProduct = () => {
  return (
    <div className='max-w-[1300px] m-auto'>
      <section className='flex justify-between flex-col md:flex-row  items-center mt-[100px] mb-[50px]'>
        <h1>Home / Explore Our Products</h1>
        <select name="" id="">
          <option value="Popular">Popular</option>
        </select>
      </section>
      <section className='flex flex-col md:flex-row justify-between items-center md:items-start gap-[50px] md:gap-[150px]'>
        <aside className='w-[300px]'>
          <Accordion
            type="single"
            collapsible
            defaultValue="shipping"
            className="max-w-[250px]"
          >
            <AccordionItem value="shipping">
              <AccordionTrigger>Category</AccordionTrigger>
              <AccordionContent className='text-[red]'>
                All products
              </AccordionContent>
              <AccordionContent>Electronics</AccordionContent>
              <AccordionContent>Home & Lifestyle</AccordionContent>
              <AccordionContent>Medicine</AccordionContent>
              <AccordionContent>Sports & Outdoor</AccordionContent>
              <AccordionContent className='text-[red]'>See all</AccordionContent>
            </AccordionItem>
            <AccordionItem value="jk">
              <AccordionTrigger>Brands</AccordionTrigger>
              <AccordionContent className='flex gap-[10px] items-center'>
                <input type="checkbox" />Samsung
              </AccordionContent>
              <AccordionContent className=' flex gap-[10px] items-center'> <input type="checkbox" />Apple</AccordionContent>
              <AccordionContent className=' flex gap-[10px] items-center'><input type="checkbox" />Huawei</AccordionContent>
              <AccordionContent className=' flex gap-[10px] items-center'><input type="checkbox" />Pocco</AccordionContent>
              <AccordionContent className=' flex gap-[10px] items-center'><input type="checkbox" />Lenovo</AccordionContent>
              <AccordionContent className='text-[red]'>See all</AccordionContent>
            </AccordionItem>
            <AccordionItem value="shiphjkping">
              <AccordionTrigger>Features</AccordionTrigger>
              <AccordionContent className='flex gap-[10px] items-center'>
                <input type="checkbox" />Metallic
              </AccordionContent>
              <AccordionContent className=' flex gap-[10px] items-center'> <input type="checkbox" />Plastic cover</AccordionContent>
              <AccordionContent className=' flex gap-[10px] items-center'><input type="checkbox" />8GB Ram</AccordionContent>
              <AccordionContent className=' flex gap-[10px] items-center'><input type="checkbox" />Super power</AccordionContent>
              <AccordionContent className=' flex gap-[10px] items-center'><input type="checkbox" />Large Memory</AccordionContent>
              <AccordionContent className='text-[red]'>See all</AccordionContent>
            </AccordionItem>
            <AccordionItem value="shikjpping">
              <AccordionTrigger>Price range</AccordionTrigger>
              <AccordionContent>
                <input type="range" />
              </AccordionContent>
              <AccordionContent className='flex gap-[20px]'>
                <AccordionContent className='text-black'>
                  <div className='flex flex-col items-start'>
                    <label htmlFor="name">
                      Min
                    </label>
                    <input className='w-[100px] p-[10px] border-2 rounded-[7px]' type="text" id='name' />
                  </div>
                </AccordionContent>
                <AccordionContent className='text-black'>
                  <div className='flex flex-col items-start'>
                    <label htmlFor="name">
                      Max
                    </label>
                    <input className='w-[100px] p-[10px] border-2 rounded-[7px]' type="text" id='name' />
                  </div>
                </AccordionContent>
              </AccordionContent>
              <AccordionContent>
                <button className='p-[10px] pr-[70px] pl-[70px] border-2 border-[#DB4444] text-[red]'>Apply</button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shng">
              <AccordionTrigger>Condition</AccordionTrigger>
              <AccordionContent>
                <div className='flex gap-[20px] items-center'>
                  <input type="radio" />
                  <h1>Any</h1>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className='flex gap-[20px] items-center'>
                  <input type="radio" />
                  <h1>Refurbished</h1>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className='flex gap-[20px] items-center'>
                  <input type="radio" />
                  <h1>Brand new</h1>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className='flex gap-[20px] items-center'>
                  <input type="radio" />
                  <h1>Old items</h1>
                </div>
              </AccordionContent>

            </AccordionItem>
            <AccordionItem value="sg">
              <AccordionTrigger>Condition</AccordionTrigger>
              <AccordionContent>
                <div className='flex gap-[20px] items-center'>
                  <input type="checkbox" />
                  <div className='flex gap-[10px]'>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className='flex gap-[20px] items-center'>
                  <input type="checkbox" />
                  <div className='flex gap-[10px]'>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className='flex gap-[20px] items-center'>
                  <input type="checkbox" />
                  <div className='flex gap-[10px]'>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className='flex gap-[20px] items-center'>
                  <input type="checkbox" />
                  <div className='flex gap-[10px]'>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </aside>
        <aside className='flex flex-wrap justify-start gap-[30px]'>
          {[1, 2, 3, 4, 5].map((e) => {
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
        </aside>
      </section>
    </div>
  )
}

export default CommerceProduct