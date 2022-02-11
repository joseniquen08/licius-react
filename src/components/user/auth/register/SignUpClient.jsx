import { EyeIcon, EyeOffIcon, IdentificationIcon, LockClosedIcon, MailIcon } from "@heroicons/react/outline";
import axios from 'axios';
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const SignUpClient = () => {

  const [isShowing, setIsShowing] = useState(true);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/user/create', {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      role: 2
    })
      .then(data => {
        if (data.success === true) {
          console.log(data.token);
        }
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-xl text-center font-medium">Regístrate</p>
      <p className="text-sm py-2 text-center">¿Eres una empresa? Regístrate <Link to="/signup/restaurante" className="text-brand-green font-bold">aquí</Link></p>
      <div className="w-full space-y-2 mt-3 mb-2 mx-auto">
        <div>
          <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
            First name
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              name="first_name"
              ref={firstNameRef}
              className="block w-full peer py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md md:font-medium focus:ring-2 focus:ring-brand-blue-900/50 focus:border-transparent focus:outline-none border-slate-300"
            />
            <div className="absolute peer-focus:text-brand-blue-900 text-gray-500 inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
              <span className="sm:text-sm">
                <IdentificationIcon className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
            Last name
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              name="last_name"
              ref={lastNameRef}
              className="block peer w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md md:font-medium focus:ring-2 focus:ring-brand-blue-900/50 focus:border-transparent focus:outline-none border-slate-300"
            />
            <div className="absolute peer-focus:text-brand-blue-900 text-gray-500 inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
              <span className="sm:text-sm">
                <IdentificationIcon className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="block w-full py-2 pl-10 pr-3 text-sm peer text-gray-600 border rounded-md md:font-medium invalid:border-red-600 invalid:text-red-600 invalid:focus:ring-red-100 focus:ring-2 focus:ring-brand-blue-900/50 focus:border-transparent focus:outline-none border-slate-300"
            />
            <div className="absolute peer-focus:text-brand-blue-900 text-gray-500 inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
              <span className="sm:text-sm">
                <MailIcon className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type={isShowing ? 'password' : 'text'}
              name="password"
              ref={passwordRef}
              required
              className="block peer w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md md:font-medium focus:ring-2 focus:ring-brand-blue-900/50 focus:border-transparent focus:outline-none border-slate-300"
            />
            <div className="absolute peer-focus:text-brand-blue-900 text-gray-500 inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
              <span className="sm:text-sm">
                <LockClosedIcon className="h-5 w-5" />
              </span>
            </div>
            <button
              onClick={() => {
                setIsShowing((isShowing) => !isShowing);
              }}
              type="button"
              className="absolute peer-focus:text-brand-blue-900 text-gray-500 border-l peer-focus:border-brand-blue-500 inset-y-0 right-0 pl-2 pr-2.5 flex items-center"
            >
              {
                isShowing === true ? (
                  <span className="sm:text-sm">
                    <EyeIcon className="h-5 w-5" />
                  </span>
                ) : (
                  <span className="sm:text-sm">
                    <EyeOffIcon className="h-5 w-5" />
                  </span>
                )
              }
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center space-x-2">
        <input type="checkbox" id="tyc" required className="text-sm text-center my-5 accent-brand-green" />
        <label htmlFor="tyc" className="text-xs">Acepto las Condiciones de Uso y Política de privacidad</label>
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-white border border-transparent rounded-md bg-brand-blue-900/90 focus:outline-none"
      >
        Registrarme
      </motion.button>
    </form>
  )
}
