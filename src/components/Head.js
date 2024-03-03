import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
        />
        <img
          className="h-8 mx-2"
          src="data:image/png;base64,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"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8 "
          src="data:image/png;base64,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"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
