import React from "react";
import clsx from "clsx";
import IconBell from "../atoms/IconBell";

const ButtonSecondaryIcon = ({ children, className, icon, onClick, disabled }) => {
  const handleClick = (e) => {
    console.log("Button clicked");
    if (onClick) onClick(e);
  };

  const renderIcon = () => {
    switch (icon) {
      case "bell":
        return <IconBell></IconBell>;
    }
  };
  return (
    <button
      className={clsx(
        `flex justify-center items-center gap-1 focus:outline-none bg-[#3A362F] border-0 font-sans text-[12px] text-[#E9E9E9] rounded-none px-[8px] py-[4px] hover:bg-[#26221C] active:bg-[#9E9A91] active:text-[#000000] transition duration-150 ease-out hover:ease-in ${
          disabled
            ? "cursor-not-allowed disabled:bg-[#3A362F] disabled:opacity-40 disabled:text-[#E9E9E966]"
            : ""
        }`,
        className
      )}
      onClick={!disabled ? handleClick : undefined}
      disabled={disabled}
    >
      {renderIcon()}
      {children}
    </button>
  );
};

export default ButtonSecondaryIcon;
