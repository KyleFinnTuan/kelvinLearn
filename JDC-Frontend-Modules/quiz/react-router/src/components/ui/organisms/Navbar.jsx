import React from "react";
import logo from "../../../assets/react.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import NavbarList from "../molecules/NavbarList";
import PrimaryButton from "../atoms/PrimaryButton";


const Navbar = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const getStartedHandle = () => {
    navigate("/dashboard")
  }

  const navbarMenuItems = [
    {
      label: "Dashboard",
      onClick: () => navigate("/dashboard"),
      isActive: location.pathname === "/dashboard"
    },
    {
      label: "Showcase",
      onClick: () => navigate("/showcase"),
      isActive: location.pathname === "/showcase"
    },
    {
      label: "Docs",
      onClick: () => navigate("/docs"),
      isActive: location.pathname === "/docs"
    }
  ]

  return (
    <div className=" flex align-middle justify-between p-6 w-full bg-slate-900">
      <NavLink to="/" end>
        <img src={logo}></img>
      </NavLink>
      <NavbarList items={navbarMenuItems}></NavbarList>
      <PrimaryButton onClick={getStartedHandle}>Get Started</PrimaryButton>
    </div>
  );
};

export default Navbar;
