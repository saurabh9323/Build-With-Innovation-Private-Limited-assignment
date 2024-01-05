import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Assets/image/logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const itemCart = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="flex justify-between bg-customBlue items-center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-[100px] p-2 ml-4 border-solid "
          />
        </Link>
        {/* 
        <h1 className="font-bold text-xl"> {user.name}</h1> */}
        <div>
          <ul className="flex p-3 bg-customBlue">
            <li className="p-2">
              <Link to="/">Home</Link>
            </li>

            <li className="p-2">
              {/* <Link to="/cart">Cart-{itemCart.length}</Link> */}
              <Link to="/cart">Cart-{itemCart.length}</Link>
            </li>

            {isLoggedIn ? (
              <button className="p-2" onClick={() => setIsLoggedIn(false)}>
                <Link to="/">Home</Link>
              </button>
            ) : (
              <button onClick={() => setIsLoggedIn(true)}>
                {" "}
                <Link to="/login">Login</Link>
              </button>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
