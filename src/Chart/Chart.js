import React from "react";
import {
  Chart,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  LinearScale,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useGlobalContext } from "../GlobalContext/GlobalContext";
import { DateFormat } from "../Moment/Moment";

Chart.register(
  LineElement,
  PointElement,
  Title,
  Tooltip,
  CategoryScale,
  LinearScale
);

const ChartComp = () => {
  const { incomes, expenses } = useGlobalContext();

  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc;
      return DateFormat(date);
    }),
    datasets: [
      {
        label: "Income",
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        color: "#fff",
        backgroundColor: "green",
        borderColor: "rgba(255, 255, 255,0.5)",
        tension: 0.2,
      },
      {
        label: "Expense",
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        backgroundColor: "red",
        borderColor: "rgba(255, 255, 255,0.5)",
        tension: 0.2,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  };
  return (
    <div className="w-full h-full text-gray-900">
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComp;
