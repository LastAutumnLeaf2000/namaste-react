import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, emptyCart } from "./utils/cartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleDeleteItem = (item, menu) => {
    console.log(item);
    toast.dark(menu?.item?.name+" Removed from Cart")
    dispatch(removeItem(item)); //calling the reducer function
  };

  return (
    <>
      <div className="heading text-center font-semibold text-4xl mt-5 mb-2">
        My Cart
      </div>

      {cartItems.length == 0 ? (
        <h1 className="heading text-center font-semibold text-3xl mt-20 mb-2">
          Cart is Empty!
        </h1>
      ) : (
        <button
          className="flex m-auto bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded-full"
          onClick={() => dispatch(emptyCart())}
        >
          Empty Cart
        </button>
      )}
      <div className="menu-container lg:w-6/12 m-auto">
        {cartItems?.map((menu, index) => (
          <div
            className="menu-card mx-4 mr-12 border-gray-300 border-b-2 py-4 pl-6 flex justify-between"
            key={index}
          >
            <div>
              <div className="mb-2 lg:flex">
                <span className="font-semibold">{menu?.item?.name}</span>
                <span className="font-semibold">
                  - ₹
                  {Math.floor(menu.item.price) ||
                    Math.floor(menu.item.max_price)}
                </span>
              </div>
              <h6 className="text-xs p-2">{menu?.item?.desc}</h6>
            </div>
            <button
              className="absolute bg-black text-white px-2 rounded-md ml-[65vw] lg:ml-[622px] text-xs h-10 hover:bg-gray-600 font-medium"
              onClick={() => handleDeleteItem(index, menu)}
            >
              Delete
            </button>

            {menu?.item?.item_image_thumb_url ? (
              <img className="w-24" src={menu?.item?.item_image_thumb_url} />
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
