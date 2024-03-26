import React from "react";

const MainContent = ({ displayContent }) => {
  return (
    <div className="bg-customGreen2 m-1 w-3/4 md:w-4/5 lg:w-5/6 xl:w-3/4 p-4 rounded-lg shadow-md border-2 border-color-black">
      {displayContent()}
    </div>
  );
};

export default MainContent;
