import React, { useState } from "react";

const PriceFilter = ({ handlePriceFilter }) => {
  const [maxPrice, setMaxPrice] = useState("");

  const applyPriceFilter = () => {
    handlePriceFilter(maxPrice);
  };

  return (
    <div className="price-filter-container">
      <input
        type="number"
        className="price-input mx-2 w-[150px] rounded-md text-center p-1 hover:bg-customBlue text-black"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => {
          setMaxPrice(e.target.value);
        }}
      />
      <button
        className="bg-customBlue p-2 rounded-md hover:bg-gray-100 text-black"
        onClick={applyPriceFilter}
      >
        Apply Price Filter
      </button>
    </div>
  );
};

export default PriceFilter;
