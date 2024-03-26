import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import DashBoard from "../Components/DashBoard";
import Incomes from "../Income/Incomes";
import Expenses from "../Expense/Expenses";
import { useGlobalContext } from "../GlobalContext/GlobalContext";
const Layout = () => {
  const [active, setActive] = useState(1);
  const global = useGlobalContext();
  console.log(global);
  const displayContent = () => {
    switch (active) {
      case 1:
        return <DashBoard />;
      case 2:
        return <Incomes />;
      case 3:
        return <Expenses />;
      default:
        return "";
    }
  };
  return (
    <div className="flex h-screen">
      <Sidebar active={active} setActive={setActive} />
      <MainContent displayContent={displayContent} />
    </div>
  );
};

export default Layout;
