import { EyeIcon, EyeOffIcon, LockClosedIcon, MailIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaRegBuilding } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { restaurants, users } from '../../../../utils/data/users';

export const SignInRestaurant = () => {

  const variants = {
    true: {
      x: [-10, 10, -10, 0],
      transition: {
        duration: 0.3,
        type: 'spring'
      }
    },
    false: {
      x: 0
    }
  }

  const navigate = useNavigate();

  const [isShowing, setIsShowing] = useState(true);
  const [notEmail, setNotEmail] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailRef.current.value !== "") {
      const restaurant = restaurants.find(restaurant => restaurant.profile.email === emailRef.current.value);
      if (restaurant) {
        const user = users.find(user => user.id === restaurant.user_id);
        if (user.password === passwordRef.current.value) {
          navigate('/restaurante/inicio');
        } else {
          setErrorPassword(true);
        }
      } else {
        setUserNotFound(true);
      }
    } else {
      setNotEmail(true);
    }
  }

  const handleChange = () => {
    setNotEmail(false);
    setErrorPassword(false);
    setUserNotFound(false);
  }

  return (
    <form onSubmit={handleSubmit} className="px-4">
      <div className="space-y-1.5">
        <p className="text-[0.9rem] font-medium text-center">Ingresa a tu cuenta empresa</p>
        <div className="flex items-center justify-center cursor-default">
          <div className="flex items-center px-4 py-2 space-x-2 rounded-md bg-stone-100">
            <FaRegBuilding/>
            <p className="font-medium text-[0.95rem]">Empresa</p>
          </div>
        </div>
      </div>
      <p className="py-2 text-center text-[0.95rem]">¿Eres un cliente? Inicia sesión <Link to="/signin/cliente" className="font-semibold underline decoration-transparent hover:decoration-current text-brand-blue-900 underline-offset-1">aquí</Link></p>
      <motion.div
        animate={notEmail ? 'true' : userNotFound ? 'true' : errorPassword ? 'true' : 'false'}
        variants={variants}
        className="my-4 space-y-3"
      >
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Corporativo
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500 sm:text-sm">
                <MailIcon className="w-5 h-5" />
              </span>
            </div>
            <input
              type="email"
              name="email"
              ref={emailRef}
              onChange={handleChange}
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md md:font-medium focus:ring-2 invalid:border-red-600 invalid:text-red-600 invalid:focus:ring-red-100 focus:ring-gray-200 focus:outline-none border-slate-300"
            />
          </div>
          {
            notEmail ? <p className="mt-1 text-sm font-medium text-red-500">Ingresar un correo.</p> : <></>
          }
          {
            userNotFound ? <p className="mt-1 text-sm font-medium text-red-500">Correo no registrado.</p> : <></>
          }
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500 sm:text-sm">
                <LockClosedIcon className="w-5 h-5" />
              </span>
            </div>
            <input
              type={isShowing ? 'password' : 'text'}
              name="password"
              ref={passwordRef}
              required
              onChange={handleChange}
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md md:font-medium focus:ring-2 focus:ring-gray-200 focus:outline-none border-slate-300"
            />
            <button
              onClick={() => {
                setIsShowing((isShowing) => !isShowing);
              }}
              type="button"
              className="absolute border-l inset-y-0 right-0 pl-2 pr-2.5 flex items-center"
            >
              {
                isShowing === true ? (
                  <span className="text-gray-500 sm:text-sm">
                    <EyeIcon className="w-5 h-5" />
                  </span>
                ) : (
                  <span className="text-gray-500 sm:text-sm">
                    <EyeOffIcon className="w-5 h-5" />
                  </span>
                )
              }
            </button>
          </div>
          {
            errorPassword ? <p className="mt-1 text-sm font-medium text-red-500">Contraseña incorrecta.</p> : <></>
          }
        </div>
      </motion.div>
      <div className="flex justify-center w-full">
        <Link to='/recovery' className="my-4 text-sm text-center">Olvidé mi contraseña</Link>
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-white border border-transparent rounded-md bg-brand-blue-900/90 focus:outline-none"
      >
        Iniciar sesión
      </motion.button>
    </form>
  )
}
