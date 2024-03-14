import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        "w-full text-xl py-3 border-none lg:py-4 px-12 lg:px-16 text-white-500 font-bold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none w-11/12" +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
