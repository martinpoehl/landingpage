import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        "w-full py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none w-11/12" +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
