import { EyeIcon, EyeOffIcon, LockClosedIcon, MailIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const SignInUser = () => {

  const navigate = useNavigate();

  const [isShowing, setIsShowing] = useState(true);

  return (
    <div className="">
      <p className="text-xl text-center font-medium">Ingresa a tu cuenta</p>
      <p className="text-base py-2 text-center">¿Eres una empresa? Inicia sesión <Link to="/signin/restaurante" className="text-brand-green font-bold">aquí</Link></p>
      <div className="w-80 space-y-4 my-8">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">
                <MailIcon className="h-5 w-5" />
              </span>
            </div>
            <input
              type="text"
              name="email"
              className="block w-full text-base focus:ring-2 focus:ring-gray-200 focus:outline-none pl-10 pr-3 py-1.5 border border-slate-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">
                <LockClosedIcon className="h-5 w-5" />
              </span>
            </div>
            <input
              type={isShowing ? 'password' : 'text'}
              name="password"
              className="block w-full text-base focus:ring-2 focus:ring-gray-200 focus:outline-none pl-10 pr-3 py-1.5 border border-slate-300 rounded-md"
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
                    <EyeIcon className="h-5 w-5" />
                  </span>
                ) : (
                  <span className="text-gray-500 sm:text-sm">
                    <EyeOffIcon className="h-5 w-5" />
                  </span>
                )
              }
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Link to='/recovery' className="text-sm text-center my-4">Olvidé mi contraseña</Link>
      </div>
      <div>
        <button
          onClick={() => navigate('/user/home')}
          type="button"
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-full hover:bg-brand-green-700 text-white bg-brand-green-500 focus:outline-none"
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  )
}
