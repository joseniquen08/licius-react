import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, EyeIcon, EyeOffIcon, FingerPrintIcon, IdentificationIcon, LockClosedIcon, MailIcon, MenuAlt1Icon, OfficeBuildingIcon, SelectorIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUpRestaurantAsync } from "../../../redux/slices/auth/signUpUserSlice";

const people = [
  { name: 'Opción 1', id: 1 },
  { name: 'Opción 2', id: 2 },
  { name: 'Opción 3', id: 3 },
  { name: 'Opción 4', id: 4 },
  { name: 'Opción 5', id: 5 },
]

export const SignUpRestaurant = () => {

  const navigate = useNavigate();

  const tokenLocalStorage = localStorage.getItem('token');

  const [selected, setSelected] = useState(people[0]);
  const [isShowing, setIsShowing] = useState(true);
  const [notEmail, setNotEmail] = useState(false);

  const businessNameRef = useRef();
  const rucRef = useRef();
  const trnameRef = useRef();
  const descriptionRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailRef.current.value !== "") {
      const restaurant = {
        razon_social: businessNameRef.current.value,
        ruc: rucRef.current.value,
        nombre_comercial: trnameRef.current.value,
        description: descriptionRef.current.value,
        category_id: selected.id,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        role: 3
      }
      dispatch(signUpRestaurantAsync(restaurant));
    } else {
      setNotEmail(true);
    }
  }

  const handleError = () => {
    // dispatch(setPasswordIsIncorrect(false));
    // dispatch(setEmailNotFound(false));
    // dispatch(setMinLengthPassword(false));
    // dispatch(setInvalidEmail(false));
  }

  const handleChange = () => {
    setNotEmail(false);
    // setUserNotFound(false);
    // setErrorPassword(false);
    // setErrorMinLenPassword(false);
    // setErrorInvalidEmail(false);
    handleError();
  }

  useEffect(() => {
    if (tokenLocalStorage) navigate('/restaurante/inicio');
    // eslint-disable-next-line
  }, [tokenLocalStorage]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <p className="text-[0.9rem] font-medium text-center">Regístrate</p>
        <div className="flex items-center justify-center cursor-default">
          <div className="flex items-center px-4 py-2 space-x-2 rounded-md bg-stone-100 hover:bg-stone-200/80">
            <FaRegBuilding/>
            <p className="font-medium text-[0.95rem]">Empresa</p>
          </div>
        </div>
      </div>
      <p className="py-2 text-sm text-center">¿Eres cliente? Regístrate <Link to="/signup/cliente" className="font-bold text-brand-green-500">aquí</Link></p>
      <div className="w-full mx-auto mt-3 mb-2 space-y-2">
        <div>
          <label htmlFor="business_name" className="block text-sm font-medium text-gray-700">
            Razón Social
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="text"
              name="business_name"
              onChange={handleChange}
              ref={businessNameRef}
              id="business_name"
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md focus:ring-2 peer focus:text-gray-700 focus:ring-brand-green-500/50 focus:border-transparent focus:outline-none border-slate-300 valid:border-green-500"
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-auto peer-focus:text-brand-green-500">
              <span className="sm:text-sm">
                <OfficeBuildingIcon className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="ruc" className="block text-sm font-medium text-gray-700">
            RUC
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="number"
              name="ruc"
              onChange={handleChange}
              ref={rucRef}
              id="ruc"
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md peer focus:text-gray-700 focus:ring-2 focus:ring-brand-green-500/50 focus:border-transparent focus:outline-none border-slate-300 valid:border-green-500"
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-auto peer-focus:text-brand-green-500">
              <span className="sm:text-sm">
                <FingerPrintIcon className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="tradename" className="block text-sm font-medium text-gray-700">
            Nombre comercial
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="text"
              name="tradename"
              onChange={handleChange}
              ref={trnameRef}
              id="tradename"
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
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <textarea
              type="text"
              name="description"
              onChange={handleChange}
              ref={descriptionRef}
              id="description"
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md resize-none peer focus:text-gray-700 focus:ring-2 focus:ring-brand-green-500/50 focus:border-transparent focus:outline-none border-slate-300 valid:border-green-500"
              rows={4}
              required
            />
            <div className="absolute top-0 left-0 flex items-center pl-3 mt-2 text-gray-500 pointer-events-auto peer-focus:text-brand-green-500">
              <span className="sm:text-sm">
                <MenuAlt1Icon className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Categoría
          </label>
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative z-10 mt-1">
              <Listbox.Button className="relative w-full py-2 pl-4 pr-10 text-sm text-left text-gray-700 bg-white border rounded-lg cursor-default border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-gray-200 focus-visible:ring-offset-2">
                <span className="block truncate">{selected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `${active ? 'text-brand-green-500 bg-brand-green-500 bg-opacity-20' : 'text-gray-900'}
                              cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? 'font-bold' : 'font-medium'
                            } block truncate`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? 'text-brand-green-500' : 'text-brand-green-500'
                              }
                                    absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon className="w-5 h-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              ref={emailRef}
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md peer focus:text-gray-700 invalid:border-red-600 invalid:text-red-600 invalid:focus:ring-red-100 focus:ring-2 focus:ring-brand-green-500/50 focus:border-transparent focus:outline-none border-slate-300"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-auto peer-focus:text-brand-green-500">
              <span className="sm:text-sm">
                <MailIcon className="w-5 h-5" />
              </span>
            </div>
          </div>
          {
            notEmail ? <p className="mt-1 text-sm font-medium text-red-500">Ingresar un correo.</p> : <></>
          }
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type={isShowing ? 'password' : 'text'}
              name="password"
              onChange={handleChange}
              ref={passwordRef}
              required
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md peer md:font-medium focus:ring-2 focus:ring-brand-green-500/50 focus:border-transparent focus:outline-none border-slate-300"
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
              className="absolute peer-focus:text-brand-green-500 text-gray-500 border-l peer-focus:border-brand-blue-500 inset-y-0 right-0 pl-2 pr-2.5 flex items-center"
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
        <input type="checkbox" id="tyc" required className="w-4 h-4 rounded border border-gray-300 focus:ring-transparent text-brand-green-500" />
        <label htmlFor="tyc" className="text-[0.7rem]">Acepto las Condiciones de Uso y Política de privacidad</label>
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-white border border-transparent rounded-md bg-brand-green-500 focus:outline-none"
      >
        Registrarme
      </motion.button>
      <div className="flex py-2.5 text-[0.85rem] items-center justify-center space-x-1">
        <p>¿Ya estás registrado?</p>
        <p>Inicia sesión <Link to="/signin/restaurante" className="font-bold text-brand-green-500">aquí</Link></p>
      </div>
    </form>
  )
}
