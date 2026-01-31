import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { EyeOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getBrand, getProducts } from '../../api/productsApi/productsSliceApi'
import { getCategory } from '../../api/categoryApi/categoryApi'
import { Link } from 'react-router-dom'
const CommerceProduct = () => {
  const { data, brands } = useSelector((state) => state.product);
  const { data2 } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getBrand());

    dispatch(
      getProducts({
        CategoryId: selectedCategory,
        BrandId: selectedBrand,
        MinPrice: min,
        MaxPrice: max,
      })
    );
  }, [dispatch, selectedCategory, selectedBrand, min, max]);


  return (
    <div className='max-w-[1300px] m-auto'>
      <section className='flex justify-between flex-col md:flex-row  items-center mt-[100px] mb-[50px]'>
        <h1>Home / Explore Our Products</h1>

      </section>
      <section className='flex flex-col md:flex-row justify-between items-center md:items-start gap-[50px] md:gap-[150px]'>

        <aside className='w-[300px] flex flex-col'>
          <Accordion type="single" collapsible className="w-[200px]">
            <AccordionItem value="item-1">
              <AccordionTrigger>Category</AccordionTrigger>

              {data2?.map((e) => (
                <AccordionContent key={e.id}>
                  <ul className="w-[200px] flex flex-col">
                    <li
                      className="cursor-pointer hover:text-red-500"
                      onClick={() => setSelectedCategory(e.id)}
                    >
                      {e.categoryName}
                    </li>
                  </ul>
                </AccordionContent>
              ))}

            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-[200px]">
            <AccordionItem value="item-1">
              <AccordionTrigger>Brand</AccordionTrigger>

              {brands?.map((e) => (
                <AccordionContent key={e.id}>
                  <ul className="w-[200px] flex flex-col">
                    <li
                      className="cursor-pointer hover:text-red-500"
                      onClick={() => setSelectedBrand(e.id)}
                    >
                      {e.brandName}
                    </li>
                  </ul>
                </AccordionContent>
              ))}

            </AccordionItem>
          </Accordion>

          <div className="flex gap-2 flex-col mt-4">
            <h1>Range Price</h1>
            <input
              type="number"
              placeholder="Min price"
              value={min ?? ""}
              onChange={(e) => setMin(e.target.value ? +e.target.value : null)}
              className="w-1/2 border px-2 py-1"
            />

            <input
              type="number"
              placeholder="Max price"
              value={max ?? ""}
              onChange={(e) => setMax(e.target.value ? +e.target.value : null)}
              className="w-1/2 border px-2 py-1"
            />
          </div>
        </aside>
        <aside className='flex flex-wrap justify-start gap-[30px]'>
          {data?.map((e) => {
            return (
              <div className='flex flex-col gap-[20px] border-2 p-[10px] rounded-2xl'>
                <div class="product-card">
                  <div className='flex justify-end flex-col items-end mr-[10px] mt-[10px]'>
                    <Link to={`/productDetails/${e.id}`}>
                      <EyeOutlined className='mr-[8px]' />
                    </Link>
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
        </aside>
      </section>
    </div>
  );
};

export default CommerceProduct
