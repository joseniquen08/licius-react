import { Outlet } from "react-router-dom";
import { Navbar } from "../dashboard/Navbar";

export const HomeUser = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  )
}
