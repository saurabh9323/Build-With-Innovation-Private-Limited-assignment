import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filterdProducts, setFilterdProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch("https://dummyjson.com/products");

      const json = await data?.json();

      const prod = json?.products;

      setProducts(prod);
      setFilterdProducts(prod);
    } catch (error) {
      console.log(error);
    }
  }
  return [products, filterdProducts, setFilterdProducts];
};

export default useProducts;
