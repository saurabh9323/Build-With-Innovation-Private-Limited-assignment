export const ProductData = (searchInput, products) => {
  const data = products?.filter((product) =>
    product?.brand.toLowerCase().includes(searchInput?.toLowerCase())
  );
  return data;
};

export const FilterData = (searchInput, priceInput, products) => {
  let filteredData = products;

  // Filter by brand (similar to the existing implementation)
  filteredData = filteredData?.filter((product) =>
    product?.brand?.toLowerCase().includes(searchInput?.toLowerCase())
  );

  // Filter by price if priceInput is provided
  if (priceInput) {
    const maxPrice = parseFloat(priceInput);
    filteredData = filteredData.filter((item) => item.price <= maxPrice);
  }

  return filteredData;
};

// export const FilterBrand = (searchInput, products) => {
//   const filteredData = products.filter((product) =>
//     product?.brand.toLowerCase().includes(searchInput?.toLowerCase())
//   );

//   return filteredData;
// };

// export const FilterPrice = (maxPrice, products) => {
//   if (!maxPrice) {
//     return products;
//   }

//   const filteredData = products.filter(
//     (item) => item.price <= parseFloat(maxPrice)
//   );

//   return filteredData;
// };
