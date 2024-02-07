/* eslint-disable react/prop-types */
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../../redux/slices/CardSlice";

const ItemCard = ({ id, img, qty, price, name }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 rounded-lg shadow-md p-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id }));
        }}
        className="absolute right-7 text-gray-600 cursor-pointer"
      />
      <img src={img} alt="item" className="w-[50px] h-[50px] " />
      <div className="leadind-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between ">
          <span className="text-green-500"> ₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() =>qty>1? dispatch(decrementQty({ id })):(qty=0)}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none  text-xl transition-all ease-linear cursor-pointer rounded-md p-1 "
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() =>qty>=1? dispatch(incrementQty({ id })):(qty=0)}
              className="border-2 border-gray-600 text-gray-600  hover:text-white hover:bg-green-500 hover:border-none text-xl transition-all ease-linear cursor-pointer rounded-md p-1 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
