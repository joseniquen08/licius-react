import { Outlet } from "react-router-dom";
import { Navbar } from "../dashboard/Navbar";

export const HomeClient = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
