import React from "react";
import dlte from "../Utils/AllIcons/delete.png";
import training from "../Utils/AllIcons/presentation.png";
import coding from "../Utils/AllIcons/coding.png";
import yt from "../Utils/AllIcons/youtube.png";
import piggy from "../Utils/AllIcons/piggy-bank.png";
import insta from "../Utils/AllIcons/instagram.png";
import calendar from "../Utils/AllIcons/calendar.png";
import tea from "../Utils/AllIcons/tea.png";
import rupee from "../Utils/AllIcons/rupee.png";
import { DateFormat } from "../Moment/Moment";

const IncomeList = ({
  id,
  title,
  amount,
  category,
  date,
  type,
  deleteIncome,
}) => {
  const categoryIcon = () => {
    //
  };
  const expenseIcon = () => {
    switch (category) {
      case "Dev":
        return <img src={coding} alt="" className="size-[35px]" />;
      case "Training":
        return <img src={training} alt="" className="size-[35px]" />;
      case "tea":
        return <img src={tea} alt="" className="size-[35px]" />;
      case "Youtube":
        return <img src={yt} alt="" className="size-[35px]" />;
      case "Instagram":
        return <img src={insta} alt="" className="size-[35px]" />;
      case "other":
        return <img src={piggy} alt="" className="size-[35px]" />;
      default:
        return "";
    }
  };
  return (
    <div className="bg- bg-gray-600 py-1 border-2 border-red-200 flex justify-around items-center gap-5 m-2 rounded-md">
      <div className="ml-4">
        {type === "income" ? expenseIcon() : categoryIcon()}
      </div>
      <div className="text-md font-bold ml-3 mb-1 flex">{title}</div>
      <div className="flex justify-center items-center gap-5">
        <div className="flex gap-2">
          <img src={rupee} alt="" className="w-[20px]" />
          <span>{amount}</span>
        </div>
        <div className="flex gap-2">
          <img src={calendar} alt="" className="w-[15px]" />
          <span>{DateFormat(date)}</span>
        </div>
        <div>
          <img
            src={dlte}
            alt=""
            className="w-[20px] mr-3"
            onClick={() => deleteIncome(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default IncomeList;
