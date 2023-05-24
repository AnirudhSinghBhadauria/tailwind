import React, { ReactNode } from "react";

const Homebuttons = ({
  children,
  colored,
}: {
  children: ReactNode;
  colored: boolean;
}) => {
  return (
    <button
      className={`${
        colored ? "bg-yellow-100 border-yellow-400" : ""
      } text-lg font-semibold border-2 px-4 py-1 text-center  text-[#000] border-gray-300 w-fit rounded-lg cursor-pointer hover:bg-yellow-100 hover:border-yellow-400 transition-all duration-200 `}
    >
      {children}
    </button>
  );
};

export default Homebuttons;
