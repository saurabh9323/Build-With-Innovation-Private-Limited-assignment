import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  // Find the product with the matching ID

  const handleChange = () => {
    dispatch(addItem(item));
  };
  const { brand, description, category, price, images } = item;
  return (
    <>
      <div className="shadow-lg w-[220px] h-[280px] rounded-lg items-center text-center hover:outline outline-offset-2  outline-gray-100  m-2 bg-backColor">
        <img
          src={images[0]}
          alt={brand}
          className="w-22 p-2 rounded-lg shadow-sm h-[200px] "
        />
        <div className="info align-text-center items-center flex flex-col py-2">
          <h5 className="font-bold">{brand}</h5>
          <h6 className="font-extrabold">
            {description.split(" ").slice(0, 3).join(" ")}
          </h6>
          <h6 className="font-semibold">{category}</h6>
          <h6 className="font-semibold"> ₹ {price}</h6>

          <button
            className="p-2 w-[60px] bg-customBlue m-2  rounded-xl hover:bg-sky-800"
            onClick={handleChange}
          >
            Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
