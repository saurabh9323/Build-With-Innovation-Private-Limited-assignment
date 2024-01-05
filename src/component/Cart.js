import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleChange = (cartItems) => {
    dispatch(clearCart(cartItems));
  };

  return (
    <div className="bg-backColor">
      <div className="flex justify-between mx-20  p-5 text-center items-center">
        <h1 className="font-bold">Total cart-items : {cartItems.length}</h1>
        <button
          className="p-2 w-[80px] bg-customBlue m-2 rounded-xl font-bold hover:bg-sky-800 hover:text-white"
          onClick={() => {
            handleChange(cartItems);
          }}
        >
          AllClear
        </button>
      </div>
      <CartItem />
    </div>
  );
};

export default Cart;
