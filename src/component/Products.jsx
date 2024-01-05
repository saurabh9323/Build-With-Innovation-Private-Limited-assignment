import { useState } from "react";
import useProducts from "../utils/useProducts.js";
import ProductCard from "./ProductCard.jsx";
import { FilterData } from "../utils/helper.js";
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

  return products?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-backColor">
      <div className="search-container bg-backColor flex m-2 ">
        <input
          type="text"
          className="search-input mx-2 w-[300px] rounded-md text-center p-1 hover:bg-customBlue text-black"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="bg-customBlue p-2 rounded-md hover:bg-gray-100 text-black"
          onClick={() => {
            const data = FilterData(searchInput, products);
            setFilterdProducts(data);
          }}
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
