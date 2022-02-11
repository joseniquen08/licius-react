import React, { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Auth = () => {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/signin") {
      navigate("/signin/cliente");
    } else if (location.pathname === "/signup") {
      navigate("/signup/cliente");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-full px-3 py-10 lg:px-8 font-inter bg-gradient-to-tr from-brand-blue-900 to-brand-blue-700">
      <div className="w-full max-w-sm px-6 pb-10 pt-14 mx-auto bg-white rounded-lg shadow-xl md:px-8">
        <div className="flex items-center justify-center pb-6">
          <Link to="/" className="text-5xl font-extrabold tracking-wide text-center text-brand-blue-700">LICIUS.</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
