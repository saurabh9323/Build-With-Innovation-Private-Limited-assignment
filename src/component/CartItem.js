import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleChange = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      <ul className="restarunat-menu flex flex-wrap justify-center outline outline-customBlue border-t-gray-50 mx-8">
        {cartItems.map((item, index) => (
          <li
            className="flex flex-col justify-evenly items-center text-center rounded-lg shadow-lg w-[220px] p-4 hover:outline outline-offset-2  outline-gray-100 my-4 mx-6 bg-backColor "
            key={index}
          >
            <img
              className="w-[200px] h-[200px] rounded-md m-4"
              src={item?.images[0]}
              alt={item?.brand}
            />
            <h5 className="font-bold">{item?.brand}</h5>
            <h6 className="font-extrabold ">
              {item?.description.split(" ").slice(0, 3).join(" ")}
            </h6>
            <h6 className="font-semibold">{item?.category}</h6>
            <h6 className="font-semibold"> ₹ {item?.price}</h6>
            <button
              className="p-2 w-[80px] bg-customBlue m-2 rounded-xl hover:bg-sky-800"
              onClick={() => {
                handleChange(index);
              }}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItem;
