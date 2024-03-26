import React from "react";
import user from "../Utils/AllIcons/user.png";
import logout from "../Utils/AllIcons/check-out.png";
import { MenuItems } from "../Utils/MenuItems";
const Sidebar = ({ active, setActive }) => {
  return (
    <div className="bg-customGreen m-1 w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/4 p-1 rounded-lg sidebar">
      <div className="flex justiy-center items-center flex-col mt-5">
        <img src={user} alt="" className="size-[60px]" />
        <div className="text-md">Hello vamsi</div>
      </div>
      {MenuItems.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex justify-start items-center gap-3 m-2 p-2 ${
              active === item.id ? "active" : ""
            }`}
            onClick={() => setActive(item.id)}
          >
            <img src={item.icon} alt="" className="size-[35px]" />
            <span className="text-md">{item.title}</span>
          </div>
        );
      })}
      <div className="absolute bottom-4 left-10 flex justify-start items-center gap-5 -mx-2">
        <img src={logout} alt="" className="size-[35px]" />
        <span className="text-md">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
