// Signup.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../utils/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});

  const handleSignup = () => {
    // Perform signup logic (e.g., form validation)
    dispatch(signup(userData));

    // Save user data to localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = [...storedUsers, userData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
