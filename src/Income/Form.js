import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../GlobalContext/GlobalContext";

const Form = () => {
  const [incomesInput, setIncomesInput] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });
  const { addIncome } = useGlobalContext();

  const { title, amount, date, category } = incomesInput;

  const handleIncomeInput = (e) => {
    const { name, value } = e.target;
    setIncomesInput({ ...incomesInput, [name]: value });
  };

  const onDateChange = (date) => {
    setIncomesInput({ ...incomesInput, date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addIncome(incomesInput);
      setIncomesInput({
        title: "",
        amount: "",
        date: "",
        category: "",
      });
    } catch (error) {
      console.error("Error adding income:", error);
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
              onChange={handleIncomeInput}
            />
          </div>
          <div className="input-control">
            <input
              className="input rounded-md"
              type="number"
              name="amount"
              placeholder="Enter amount here"
              value={amount}
              onChange={handleIncomeInput}
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
              onChange={handleIncomeInput}
            >
              <option value="" disabled>
                Select Option
              </option>
              <option value="Dev">Mern Developer</option>
              <option value="Training">Training</option>
              <option value="Youtube">Youtube</option>
              <option value="Instagram">Insta</option>
              <option value="tea">Tea</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mt-2 text-center rounded-md">
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
