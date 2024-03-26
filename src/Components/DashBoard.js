import React, { useEffect } from "react";
import ChartComp from "../Chart/Chart";
import rupee from "../Utils/AllIcons/rupee.png";
import { useGlobalContext } from "../GlobalContext/GlobalContext";
import { useFetcher } from "react-router-dom";

const DashBoard = () => {
  const { totalIncome, totalExpenses, totalBalance, getIncomes, getExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
    getIncomes();
  }, []);

  return (
    <>
      All Transactions
      <div className="flex bg-gray-600">
        <ChartComp />
        <div className="flex flex-col gap-4 m-4 bg-incomeBg px-3">
          <div className="flex flex-col">
            <h1>Total Income</h1>
            <div className="flex gap-2 bg-green-500">
              <img src={rupee} alt="" className="w-[25px] " />
              <span>{totalIncome()}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h1>Total Expense</h1>
            <div className="flex gap-2 bg-red-400">
              <img src={rupee} alt="" className="w-[25px]" />
              <span>{totalExpenses()}</span>
            </div>
          </div>
          <div className="flex flex-col ">
            <h1>Total Balance</h1>
            <div className="flex gap-2 bg-blue-700">
              <img src={rupee} alt="" className="w-[25px]" />
              <span>{totalBalance()}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
