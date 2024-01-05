export const FilterData = (searchInput, priceInput, products) => {
  let filteredData = products;

  // Filter by brand (similar to the existing implementation)
  filteredData = filteredData.filter((product) =>
    product?.brand.toLowerCase().includes(searchInput?.toLowerCase())
  );

  // Filter by price if priceInput is provided
  if (priceInput) {
    const maxPrice = parseFloat(priceInput);
    filteredData = filteredData.filter((item) => item.price <= maxPrice);
  }

  return filteredData;
};
