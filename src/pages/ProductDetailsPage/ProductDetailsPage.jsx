import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Heart, Truck, RefreshCw, Minus, Plus } from 'lucide-react'
import { StarOutlined } from '@ant-design/icons'
import { getByIdProduct, deleteImageProduct } from '../../api/productsApi/productsSliceApi'

const ProductDetailsPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.product)

  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const navigate = useNavigate();

  const handleBuyNow = () => {
    const checkoutProduct = {
      id: user.id,
      name: user.productName,
      price: user.price,
      image: user.images?.[0]?.images,
      quantity,
    };

    localStorage.setItem("checkoutProduct", JSON.stringify(checkoutProduct));
    navigate("/checkOut");
  };

  useEffect(() => {
    dispatch(getByIdProduct(id))
  }, [id, dispatch])
  useEffect(() => {
  if (user?.id) {
    setQuantity(1);
  }
}, [user?.id]);

  return (
    <div className="max-w-[1300px] mx-auto px-4">
      <h1 className="mb-6">Account / Product / {user.productName}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            {user.images?.map((img, i) => (
              <div
                key={img.id}
                onClick={() => setActiveImage(i)}
                className={`w-20 h-20 border rounded cursor-pointer flex items-center justify-center`}>
                <img
                  src={`https://store-api.softclub.tj/images/${img.images}`}
                  className="object-contain w-full h-full"
                  alt=""
                />
              </div>
            ))}
          </div>

          <div className="flex-100 rounded flex items-center justify-center p-6">
            {user.images?.[activeImage] && (
              <img
                src={`https://store-api.softclub.tj/images/${user.images[activeImage].images}`}
                className="object-contain w-full"
                alt=""
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{user.productName}</h1>

          <div className="flex items-center gap-2">
            <div className="text-yellow-400 flex">
              <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
            </div>
            <span className="text-gray-400 text-sm">(150 Reviews)</span>
            <span className="text-green-500 text-sm">In Stock</span>
          </div>

          <div className="text-2xl font-semibold">${user.price}</div>

          <p className="text-gray-600 border-b pb-4">
            {user.description}
          </p>
          <div className="flex gap-4 mt-4">
            <div className="flex border rounded h-11">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 border-r"
              >
                <Minus size={16} />
              </button>

              <div className="w-16 flex items-center justify-center font-bold">
                {quantity}
              </div>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 bg-red-500 text-white"
              >
                <Plus size={16} />
              </button>
            </div>
            <button
              onClick={handleBuyNow}
              className="p-[10px] pl-[30px] pr-[30px] bg-red-500 text-white font-bold rounded"
            >
              Buy Now
            </button>

            <button className="p-2 border rounded">
              <Heart />
            </button>
          </div>
          <div className="mt-6 border rounded divide-y">
            <div className="p-4 flex gap-4">
              <Truck />
              <div>
                <div className="font-bold">Free Delivery</div>
                <div className="text-xs underline cursor-pointer">
                  Enter your postal code
                </div>
              </div>
            </div>

            <div className="p-4 flex gap-4">
              <RefreshCw />
              <div>
                <div className="font-bold">Return Delivery</div>
                <div className="text-xs">
                  Free 30 Days Return
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default
  ProductDetailsPage
