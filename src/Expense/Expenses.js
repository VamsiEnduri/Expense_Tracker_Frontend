import React, { useEffect } from "react";
import Form from "../Expense/Form";
import ExpenseList from "./ExpenseList";
import { useGlobalContext } from "../GlobalContext/GlobalContext";

const Incomes = () => {
  const { addExpense, getExpenses, expenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div>
      <h1>Expenses</h1>
      <p className="w-full p-2  text-center bg-gray-600 text-incomeBg border-green-200 border-1 rounded-md m-1 ">
        TotalExpense:
        <span className="text-red-700 text-lg">
          {" "}
          ${totalExpenses(expenses)}
        </span>
      </p>
      <div className="flex justify-between w-full">
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row m-2 w-1/2">
          <div className="size-[full]">
            <Form />
          </div>
        </div>
        <div className="w-full mx-auto m-2">
          {expenses.map((expense) => {
            const { _id, title, amount, category, date, type, description } =
              expense;
            return (
              <ExpenseList
                key={_id}
                id={_id}
                title={title}
                amount={amount}
                category={category}
                date={date}
                type={type}
                description={description}
                deleteExpense={deleteExpense}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Incomes;
