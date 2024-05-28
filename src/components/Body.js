import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
  return (
    <div className="flex flex-col w-[400px] sm:w-full dark:bg-gray-900">
      <Head />
      <div className="flex w-full relative">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
