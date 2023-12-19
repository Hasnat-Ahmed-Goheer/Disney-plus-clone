import React from "react";
import startImage from "../assets/images/start-image.png";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <img src={startImage} alt="" className="h-[700px] w-[700px] " />
      <Link
        to="/main"
        className="transform rounded-[2rem] bg-blue-900 px-8 py-4 text-2xl font-bold tracking-widest transition-all duration-300 ease-in-out hover:translate-x-[-3px] hover:translate-y-[-3px] hover:bg-blue-700"
      >
        LOGIN
      </Link>
    </div>
  );
};

export default Start;
