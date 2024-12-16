import React from "react";

const NavbarItem = ({ children, onClick, isActive }) => {
  return (
    <div>
      <div
        className={`cursor-pointer p-2 font-semibold text-white ${
          isActive ? "border-b text-[#22d3ee] border-[#22d3ee]" : "border-b-0 text-white"
        } hover:text-[#22d3ee]`}
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
};

export default NavbarItem;
