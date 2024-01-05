import { useState } from "react";
import useProducts from "../utils/useProducts.js";
import ProductCard from "./ProductCard.jsx";
import { FilterData, ProductData } from "../utils/helper.js";
import Shimmer from "./Shimmer.js";
import PriceFilter from "./PriceFilter.js";

const Products = () => {
  const [products, filterdProducts, setFilterdProducts] = useProducts();
  const [searchInput, setSearchInput] = useState("");

  const applyPriceFilter = (maxPrice) => {
    let filteredData = products;

    if (maxPrice) {
      filteredData = FilterData(searchInput, maxPrice, filteredData);
    }

    setFilterdProducts(filteredData);
  };
  const handleFilterProduct = () => {
    const data = ProductData(searchInput, products);
    setFilterdProducts(data);
  };

  return products?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-backColor">
      <div className="search-container bg-backColor flex m-2 ">
        <input
          type="text"
          className="rounded-md text-center m-2 hover:bg-customBlue text-black"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="p-2 w-[100px] bg-customBlue m-2 ml-4  rounded-xl hover:bg-sky-800"
          onClick={handleFilterProduct}
        >
          Search
        </button>
        <PriceFilter handlePriceFilter={applyPriceFilter} />
      </div>
      <div className="flex flex-wrap">
        {filterdProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
