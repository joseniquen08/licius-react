import { Outlet } from "react-router-dom";
import { Navbar } from "../dashboard/Navbar";

export const HomeRestaurant = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
