import React from "react";
import dlte from "../Utils/AllIcons/delete.png";
import book from "../Utils/AllIcons/book.png";
import market from "../Utils/AllIcons/market.png";
import food from "../Utils/AllIcons/food.png";
import grocery from "../Utils/AllIcons/grocery.png";
import rent from "../Utils/AllIcons/rent.png";
import rupee from "../Utils/AllIcons/rupee.png";
import calender from "../Utils/AllIcons/calendar.png";
import bike from "../Utils/AllIcons/bycicle.png";
import { DateFormat } from "../Moment/Moment";

const ExpenseList = ({
  id,
  title,
  amount,
  category,
  date,
  type,
  deleteExpense,
}) => {
  const categoryIcon = () => {
    //
  };
  const expenseIcon = () => {
    switch (category) {
      case "education":
        return <img src={book} alt="" className="size-[35px]" />;
      case "stocks":
        return <img src={market} alt="" className="size-[35px]" />;
      case "bike-emi":
        return <img src={bike} alt="" className="size-[35px]" />;
      case "food":
        return <img src={food} alt="" className="size-[35px]" />;
      case "grocery":
        return <img src={grocery} alt="" className="size-[35px]" />;
      case "rent":
        return <img src={rent} alt="" className="size-[35px]" />;

      default:
        return "";
    }
  };
  return (
    <div className="bg- bg-gray-600 py-1 border-2 border-red-200 flex justify-around items-center gap-5 m-2 rounded-md">
      <div className="ml-4">
        {type === "expense" ? expenseIcon() : categoryIcon()}
      </div>
      <div className="text-md font-bold ml-3 mb-1 flex">{title}</div>
      <div className="flex justify-center items-center gap-5">
        <div className="flex gap-2">
          <img src={rupee} alt="" className="w-[15px]" />
          <span>{amount}</span>
        </div>
        <div className="flex gap-2">
          <img src={calender} alt="" className="w-[15px]" />
          <span>{DateFormat(date)}</span>
        </div>
        <div>
          <img
            src={dlte}
            alt=""
            className="w-[20px] mr-3"
            onClick={() => deleteExpense(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
