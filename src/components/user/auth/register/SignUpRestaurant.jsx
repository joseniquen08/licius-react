import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, DocumentTextIcon, FingerPrintIcon, IdentificationIcon, MenuAlt1Icon, OfficeBuildingIcon, SelectorIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const people = [
  { name: 'Opción 1' },
  { name: 'Opción 2' },
  { name: 'Opción 3' },
  { name: 'Opción 4' },
  { name: 'Opción 5' },
]

export const SignUpRestaurant = () => {

  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="">
      <p className="text-xl font-medium text-center">Regístrate como empresa</p>
      <p className="py-2 text-base text-center">¿Eres cliente? Regístrate <Link to="/signup/cliente" className="font-bold text-brand-green">aquí</Link></p>
      <div className="mt-8 mb-2 space-y-4 w-96">
        <div>
          <label htmlFor="business_name" className="block text-sm font-medium text-gray-700">
            Razón Social
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-auto">
              <span className="text-gray-500 sm:text-sm">
                <OfficeBuildingIcon className="w-5 h-5" />
              </span>
            </div>
            <input
              type="text"
              name="business_name"
              id="business_name"
              className="block w-full text-base focus:ring-2 focus:ring-gray-200 focus:outline-none pl-10 pr-3 py-1.5 border border-slate-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label htmlFor="ruc" className="block text-sm font-medium text-gray-700">
            RUC
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-auto">
              <span className="text-gray-500 sm:text-sm">
                <FingerPrintIcon className="w-5 h-5" />
              </span>
            </div>
            <input
              type="number"
              name="ruc"
              id="ruc"
              className="block w-full text-base focus:ring-2 focus:ring-gray-200 focus:outline-none pl-10 pr-3 py-1.5 border border-slate-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label htmlFor="tradename" className="block text-sm font-medium text-gray-700">
            Nombre comercial
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-auto">
              <span className="text-gray-500 sm:text-sm">
                <IdentificationIcon className="w-5 h-5" />
              </span>
            </div>
            <input
              type="text"
              name="tradename"
              id="tradename"
              className="block w-full text-base focus:ring-2 focus:ring-gray-200 focus:outline-none pl-10 pr-3 py-1.5 border border-slate-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <div className="relative mt-1">
            <div className="absolute top-0 left-0 flex items-center pl-3 mt-2 pointer-events-auto">
              <span className="text-gray-500 sm:text-sm">
                <MenuAlt1Icon className="w-5 h-5" />
              </span>
            </div>
            <textarea
              type="text"
              name="description"
              id="description"
              className="block w-full text-base focus:ring-2 focus:ring-gray-200 focus:outline-none pl-10 pr-3 py-1.5 border border-slate-300 rounded-md resize-none"
              rows={4}
            />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Categoría
          </label>
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative z-10 mt-1">
              <Listbox.Button className="relative w-full py-2 pl-4 pr-10 text-left bg-white border rounded-lg cursor-default border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-gray-200 focus-visible:ring-offset-2 sm:text-sm">
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
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">
            Ficha RUC
          </label>
          <div className="relative mt-1">
            <div className="absolute top-0 left-0 flex items-center pl-3 mt-2 pointer-events-auto">
              <span className="text-gray-500 sm:text-sm">
                <DocumentTextIcon className="w-5 h-5" />
              </span>
            </div>
            <input type="file" id="file" name="file" className="block w-full pl-10 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-green-500/20 file:text-brand-green-700"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full space-x-2">
        <input type="checkbox" id="tyc" className="my-5 text-sm text-center accent-brand-green-500" />
        <label htmlFor="tyc" className="text-xs">Acepto las Condiciones de Uso y Política de privacidad</label>
      </div>
      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-brand-green-500 focus:outline-none"
        >
          Enviar solicitud
        </button>
      </div>
    </div>
  )
}
