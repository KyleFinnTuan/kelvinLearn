import React from "react";
import clsx from "clsx";

const ButtonPrimary = ({ children, className, disabled, onClick }) => {
  const handleClick = (e) => {
    console.log("Button Clicked");
    if (onClick) onClick(e);
  };

  return (
    <button
      className={clsx(
        `focus:outline-none bg-[#C5C9D0] border-0 font-sans text-[12px] text-[#161616] rounded-none px-[8px] py-[4px] hover:bg-[#D9DDE3] active:bg-[#61656e] active:text-[#FFFFFF] transition duration-150 ease-out hover:ease-in ${
          disabled
            ? " disabled:bg-[#c5c9d0] disabled:opacity-40 cursor-not-allowed active:text-[#0f0d0d]"
            : ""
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

export default ButtonPrimary;
