import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Cart from "./component/Cart";
import ErrorPage from "./component/ErrorPage";
import Login from "./component/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/login" element={<Login />} />
            <Route index element={<Products />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
