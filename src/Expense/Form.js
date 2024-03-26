import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../GlobalContext/GlobalContext";

const Form = () => {
  const [expensesInput, setExpensesInput] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });
  const { addExpense } = useGlobalContext();

  const { title, amount, date, category } = expensesInput;

  const handleExpenseInput = (e) => {
    const { name, value } = e.target;
    setExpensesInput({ ...expensesInput, [name]: value });
  };

  const onDateChange = (date) => {
    setExpensesInput({ ...expensesInput, date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addExpense(expensesInput);
      setExpensesInput({
        title: "",
        amount: "",
        date: "",
        category: "",
      });
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-gray-600 p-2 rounded-md"
        >
          <div className="input-control">
            <input
              className="input rounded-md"
              type="text"
              name="title"
              placeholder="Enter Title"
              value={title}
              onChange={handleExpenseInput}
            />
          </div>
          <div className="input-control">
            <input
              className="input rounded-md"
              type="number"
              name="amount"
              placeholder="Enter amount here"
              value={amount}
              onChange={handleExpenseInput}
            />
          </div>
          <div className="input-control">
            <DatePicker
              placeholder="Select a date"
              showIcon
              className="input rounded-md w-[240px]"
              selected={date}
              isClearable
              onChange={(date) => onDateChange(date)}
            />
          </div>
          <div className="input-control">
            <select
              className="input rounded-md w-full"
              name="category"
              value={category}
              placeholder="enter category"
              onChange={handleExpenseInput}
            >
              <option value="" disabled>
                Select Option
              </option>
              <option value="education">Education</option>
              <option value="stocks">Stocks</option>
              <option value="bike-emi">BikeEmi</option>
              <option value="grocery">Grocery</option>
              <option value="rent">HouseRent</option>
              <option value="food">Food</option>
            </select>
          </div>
          <div className="mt-2 rounded-md text-center">
            <button
              type="submit"
              className="bg-blue-500 h-fit px-4 py-1 cursor-pointer hover:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
