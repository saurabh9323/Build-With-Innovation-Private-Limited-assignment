import React, { useState } from "react";

// Mock user data (replace this with your actual mock user data)
const mockUserData = {
  username: "saurabh",
  password: "saurabh",
  // ... (other user details)
};

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      // Check if entered credentials match the mock user data
      if (
        credentials.username === mockUserData.username &&
        credentials.password === mockUserData.password
      ) {
        // Mocking a successful login - for demonstration purposes
        localStorage.setItem("token", "your_generated_token_here");
        console.log("Login successful!");
        // Redirect to the home page or perform other actions upon successful login
      } else {
        // Mocking a failed login - for demonstration purposes
        throw new Error("Invalid username or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Handle the login failure, show error message, etc.
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-backColor h-[300px] flex flex-col items-center justify-center border text-center">
      <input
        type="text"
        name="username"
        placeholder="username"
        value={credentials.username}
        onChange={handleChange}
        className="w-[200px] m-2 text-center"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={credentials.password}
        onChange={handleChange}
        className="w-[200px] m-2 p2 text-center"
      />
      <button
        onClick={handleLogin}
        className="p-2 w-[60px] bg-customBlue m-2 rounded-xl hover:bg-sky-800"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
