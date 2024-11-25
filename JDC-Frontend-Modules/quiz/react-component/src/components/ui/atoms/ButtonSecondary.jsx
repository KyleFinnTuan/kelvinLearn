import React from "react";
import clsx from "clsx";

const ButtonSecondary = ({ children, className, disabled, onclick }) => {
  const handleClick = (e) => {
    console.log("Button clicked");
    if (onclick) onclick(e);    
  }

  return (
    <button 
      className={clsx(
        `focus:outline-none bg-[#3A362F] border-0 font-sans text-[12px] text-[#E9E9E9] rounded-none px-[8px] py-[4px] hover:bg-[#26221C] active:bg-[#9E9A91] active:text-[#000000] transition duration-150 ease-out hover:ease-in ${
          disabled ? " disabled:bg-[#3A362F] disabled:text-[#E9E9E966] disabled:opacity-40 cursor-not-allowed"  : ""
        }`,
        className
      )}
      onClick={!disabled ? handleClick : undefined}
      disabled={disabled}
    >
      {children}
    </button>
  );
};



export default ButtonSecondary;
