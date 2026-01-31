import React, { useEffect, useState } from "react";

const CheckOut = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("checkoutProduct"));
    setProduct(data);
  }, []);

  useEffect(() => {
    if (product) {
      localStorage.setItem("checkoutProduct", JSON.stringify(product));
    }
  }, [product]);

  const increaseQty = () => {
    setProduct(prev => ({
      ...prev,
      quantity: prev.quantity + 1,
    }));
  };

  const decreaseQty = () => {
    setProduct(prev => ({
      ...prev,
      quantity: Math.max(1, prev.quantity - 1),
    }));
  };

  const totalPrice = product ? product.price * product.quantity : 0;

  return (
    <div className="max-w-[1300px] m-auto">
      <h1>Product / View Cart / CheckOut</h1>

      <div className="max-w-[1300px] mx-auto p-8 font-sans">
        <h1 className="text-3xl font-medium mb-8">Billing Details</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                "First name",
                "Last name",
                "Street address",
                "Apartment, floor, etc. (optional)",
                "Town/City",
                "Phone number",
                "Email address",
              ].map(label => (
                <div key={label}>
                  <label className="block text-gray-400 mb-2">{label}</label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border p-3 rounded outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8 py-4">
            {product && (
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src={`https://store-api.softclub.tj/images/${product.image}`}
                    className="w-12 h-12 object-contain"
                    alt=""
                  />
                  <span>{product.name}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button onClick={decreaseQty} className="px-2 border">-</button>
                  <span>{product.quantity}</span>
                  <button onClick={increaseQty} className="px-2 border">+</button>
                </div>

                <span className="font-medium">
                  ${product.price * product.quantity}
                </span>
              </div>
            )}

            <div className="space-y-4 border-t pt-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${totalPrice}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span>${totalPrice}</span>
              </div>
            </div>

            <button className="w-full bg-red-500 text-white py-4 rounded">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
