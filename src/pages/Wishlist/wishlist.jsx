import React, { useEffect, useState } from 'react'
import { EyeOutlined, StarOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { getWishlist, removeFromWishlist } from "../../utils/wishlist";
import logo1 from "../../img/5445197.png"
const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  let navigate = useNavigate()
  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  const handleRemove = (id) => {
    removeFromWishlist(id);
    setWishlist(getWishlist());
  };

  return (
    <div className="max-w-[1300px] m-auto px-4">
      <section className="flex justify-between items-center mt-12 mb-8">
        <h1 className="text-2xl font-semibold">
          Wishlist <span className="text-gray-400">({wishlist.length})</span>
        </h1>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {wishlist.map((e) => (
          <div
            key={e.id}
            className="group border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white"
          >
            <div className="relative bg-gray-100 p-6 flex justify-center">
              <img
                src={`https://store-api.softclub.tj/images/${e.image}`}
                className="h-[160px] object-contain group-hover:scale-105 transition"
                alt=""
              />
              <button
                onClick={() => handleRemove(e.id)}
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-red-500 hover:text-white transition"
              >
                ✕
              </button>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h1 className="font-medium line-clamp-2">
                {e.productName}
              </h1>

              <div className="flex items-center justify-between">
                <p className="text-red-500 font-semibold">
                  ${e.price}
                </p>

                <div className="flex text-yellow-400 text-sm">
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>
              </div>
              <Link
                to={`/productDetails/${e.id}`}
                className="mt-2 text-center py-2 rounded-lg border hover:bg-black hover:text-white transition"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
      {wishlist.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20 gap-6">
          <div className="w-[250px] h-[250px] flex items-center justify-center rounded-full bg-gray-100 shadow-lg p-6">
            <img
              src={logo1}
              alt="Empty Wishlist"
              className="object-contain w-full h-full"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-700">
            ❤️ Your wishlist is empty
          </h2>
          <p className="text-gray-400 text-center max-w-[400px]">
            You haven’t added any products to your wishlist yet. Browse our store and start adding your favorites!
          </p>
          <button
            className="mt-4 px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition"
            onClick={()=>navigate(-1)}
            >
              Go Back
            </button>
             
        </div>
      )}

    </div>

  );
};

export default Wishlist;
