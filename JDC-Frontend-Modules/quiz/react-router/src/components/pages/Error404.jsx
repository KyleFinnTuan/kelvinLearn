import React from "react";
import PrimaryButton from "../ui/atoms/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate()
  const backToHomeHandle = () => {
    console.log("go home!!!");
    navigate("/")
  }

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <div className="flex flex-col w-96 text-center gap-4">
        <h1 className="text-3xl font-semibold">Error!!!</h1>
        <h1 className="text-9xl font-bold">404</h1>
        <h1 className="text-3xl font-semibold">page not found</h1>
        <p className="text-lg">Sorry we can't find what you're looking for</p>
        <div>
        <PrimaryButton onClick={backToHomeHandle} >Back To Home</PrimaryButton>

        </div>
      </div>
    </div>
  );
};

export default Error404;
