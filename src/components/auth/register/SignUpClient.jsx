import { EyeIcon, EyeOffIcon, IdentificationIcon, LockClosedIcon, MailIcon } from "@heroicons/react/outline";
import axios from 'axios';
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa";
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
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <p className="text-[0.9rem] font-medium text-center">Regístrate</p>
        <div className="flex items-center justify-center cursor-default">
          <div className="flex items-center px-4 py-2 space-x-2 rounded-md bg-stone-100 hover:bg-stone-200/80">
            <FaRegUser/>
            <p className="font-medium text-[0.95rem]">Cliente</p>
          </div>
        </div>
      </div>
      <p className="py-2 text-center text-[0.95rem]">¿Eres una empresa? Regístrate <Link to="/signup/restaurante" className="font-bold text-brand-green-500">aquí</Link></p>
      <div className="w-full mx-auto mt-3 mb-2 space-y-2">
        <div>
          <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
            First name
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="text"
              name="first_name"
              id="first_name"
              ref={firstNameRef}
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md peer focus:ring-2 focus:ring-brand-green-500/50 focus:text-gray-700 focus:border-transparent focus:outline-none border-slate-300 valid:border-green-500"
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-auto peer-focus:text-brand-green-500">
              <span className="sm:text-sm">
                <IdentificationIcon className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
            Last name
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="text"
              name="last_name"
              id="last_name"
              ref={lastNameRef}
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md peer focus:text-gray-700 focus:ring-2 focus:ring-brand-green-500/50 focus:border-transparent focus:outline-none border-slate-300 valid:border-green-500"
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-auto peer-focus:text-brand-green-500">
              <span className="sm:text-sm">
                <IdentificationIcon className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              id="email"
              ref={emailRef}
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md peer invalid:border-red-600 focus:text-gray-700 invalid:text-red-600 invalid:focus:ring-red-400 focus:ring-2 focus:ring-brand-green-500/50 focus:border-transparent focus:outline-none border-slate-300"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-auto peer-focus:text-brand-green-500 peer-invalid:peer-focus:text-red-600">
              <span className="sm:text-sm">
                <MailIcon className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type={isShowing ? 'password' : 'text'}
              name="password"
              id="password"
              ref={passwordRef}
              required
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md peer focus:text-gray-700 focus:ring-2 focus:ring-brand-green-500/50 focus:border-transparent focus:outline-none border-slate-300"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-auto peer-focus:text-brand-green-500">
              <span className="sm:text-sm">
                <LockClosedIcon className="w-5 h-5" />
              </span>
            </div>
            <button
              onClick={() => {
                setIsShowing((isShowing) => !isShowing);
              }}
              type="button"
              className="absolute text-gray-500 border-l inset-y-0 right-0 pl-2 pr-2.5 flex items-center"
            >
              {
                isShowing === true ? (
                  <span className="sm:text-sm">
                    <EyeIcon className="w-5 h-5" />
                  </span>
                ) : (
                  <span className="sm:text-sm">
                    <EyeOffIcon className="w-5 h-5" />
                  </span>
                )
              }
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-start w-full mt-5 mb-3 space-x-1.5">
        <input type="checkbox" id="tyc" required className="text-sm flex-none mt-0.5 text-center accent-brand-blue-900" />
        <label htmlFor="tyc" className="text-[0.7rem]">Acepto las Condiciones de Uso y Política de privacidad</label>
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-white border border-transparent rounded-md bg-brand-green-500/90 focus:outline-none"
      >
        Registrarme
      </motion.button>
      <div className="flex py-2.5 text-[0.85rem] items-center justify-center space-x-1">
        <p>¿Ya estás registrado?</p>
        <p>Inicia sesión <Link to="/signin/cliente" className="font-bold text-brand-green-500">aquí</Link></p>
      </div>
    </form>
  )
}
