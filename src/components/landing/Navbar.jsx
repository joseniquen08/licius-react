import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 26) {
        setShowBorder(true);
      } else {
        setShowBorder(false);
      }
    })
  }, []);


  return (
    <header className={`sticky top-0 bg-brand-gray z-40 ${showBorder ? 'border-b border-gray-300' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <section className="relative w-full py-3 px-10 text-gray-700 body-font">
          <div className="container flex flex-col flex-wrap items-center justify-between mx-auto md:flex-row max-w-7xl">
            <Link to="/" className={`relative z-10 flex items-center w-auto text-3xl font-extrabold leading-none text-brand-green-500 select-none tracking-wide ${showBorder ? '' : ''}`}>LICIUS.</Link>
            <nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
              <a href="#_" className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                <span className="block">Home</span>
              </a>
              <a href="#_" className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                <span className="block">Features</span>
              </a>
              <a href="#_" className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                <span className="block">Pricing</span>
              </a>
              <a href="#_" className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                <span className="block">Blog</span>
              </a>
            </nav>
            <div className="relative z-10 inline-flex items-center space-x-4 md:ml-5 lg:justify-end">
              <Link to="/signin" className={`inline-flex items-center justify-center w-24 py-2 text-base font-medium text-white bg-brand-brown-500 hover:bg-brand-brown-700 rounded-full focus:outline-none ${showBorder ? 'shadow-none' : 'shadow-lg shadow-brand-brown-500/50'}`}>
                Sign in
              </Link>
              <span className="inline-flex">
                <Link to="/signup" className={`inline-flex items-center justify-center w-24 py-2 text-base font-medium text-white bg-brand-green-500 rounded-full hover:bg-brand-green-700 focus:outline-none ${showBorder ? 'shadow-none' : 'shadow-lg shadow-brand-green-500/50'}`}>
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </section>
      </div>
    </header>
  )
}
