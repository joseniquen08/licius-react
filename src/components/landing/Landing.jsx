import { Navbar } from './Navbar';
import { Outlet } from "react-router-dom";
import { Footer } from './Footer';

export const Landing = () => {
  return (
    <div className="bg-brand-gray">
      <div className="h-6"></div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
