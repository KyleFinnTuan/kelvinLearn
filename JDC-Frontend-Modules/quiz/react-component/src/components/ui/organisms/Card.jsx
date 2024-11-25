import React from "react";

const Card = ({ children, disabled, onClick }) => {
  return (
    <a
      href={disabled ? undefined : "#"}
      className={`block text-[#161616] p-4 border border-b-4 border-[#CED2D9] hover:border-b-[#2670A9] active:border-[#2670A9]
        ${
          disabled
            ? "cursor-not-allowed opacity-50 hover:text-[#161616] border-[#CED2D9] hover:border-b-[#CED2D9] active:text-[#161616] active:border-[#CED2D9] "
            : "cursor-pointer"
        }`}
      aria-disabled={disabled}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          return;
        }
        console.log("Card Clicked");
        if (onClick) onClick();
      }}
    >
      {children}
    </a>
  );
};

export default Card;
