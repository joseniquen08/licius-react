import { Outlet } from "react-router-dom";
import { Footer } from '../components/landing/Footer';
import { Navbar } from '../components/landing/Navbar';

export const LandingPage = () => {
  return (
    <div className="bg-brand-gray">
      <div className="h-6"></div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
