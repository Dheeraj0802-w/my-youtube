import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { openMenu } from "../utils/appSlice";
import SideBar from "./SideBar";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  });

  return (
    <div className="flex overflow-x-hidden">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
