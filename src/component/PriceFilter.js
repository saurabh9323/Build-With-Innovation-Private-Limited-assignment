// PriceFilter.js
import React, { useState } from "react";

const PriceFilter = ({ handlePriceFilter }) => {
  const [maxPrice, setMaxPrice] = useState("");

  const handleInputChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleFilter = () => {
    handlePriceFilter(maxPrice);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Max Price"
        value={maxPrice}
        onChange={handleInputChange}
        className="ml-4"
      />
      <button
        onClick={handleFilter}
        className="p-2 w-[100px] bg-customBlue m-2 ml-4  rounded-xl hover:bg-sky-800"
      >
        Apply Price
      </button>
    </div>
  );
};

export default PriceFilter;
