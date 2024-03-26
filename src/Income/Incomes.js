import React, { useEffect } from "react";
import Form from "./Form";
import { useGlobalContext } from "../GlobalContext/GlobalContext";
import IncomeList from "./IncomeList";

const Incomes = () => {
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } =
    useGlobalContext();
  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div className="transition ease-in-out delay-150 ">
      <h1>Incomes</h1>
      <p className="w-full p-2 bg-gray-600 text-incomeBg text-center border-green-200 border-1 rounded-md m-1 ">
        TotalIncome:
        <span className="text-green-700 text-lg"> ${totalIncome(incomes)}</span>
      </p>
      <div className="flex justify-between w-full">
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row m-2">
          <div className="size-[full]">
            <Form />
          </div>
        </div>
        <div className="w-full mx-auto m-2 ">
          {incomes.map((income) => {
            const { _id, title, amount, category, date, type, description } =
              income;
            return (
              <IncomeList
                key={_id}
                id={_id}
                title={title}
                amount={amount}
                category={category}
                date={date}
                type={type}
                description={description}
                deleteIncome={deleteIncome}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Incomes;
