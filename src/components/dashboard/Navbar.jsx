import { Menu, Transition } from "@headlessui/react";
import { BellIcon, LogoutIcon, PencilAltIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ModalSearch } from "./feed/search/ModalSearch";

export const Navbar = () => {

  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const closeSearchModal = () => {
    setSearchIsOpen(false);
  }

  const openSearchModal = () => {
    setSearchIsOpen(true);
  }

  return (
    <>
      <header className="w-full bg-gradient-to-r from-brand-blue-700 to-brand-blue-900 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto">
          <section className="relative w-full py-3.5 px-16 body-font">
            <div className="container flex flex-col flex-wrap items-center justify-between mx-auto md:flex-row max-w-7xl">
              <Link to="/user/home" className={`relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-white select-none tracking-wide`}>LICIUS.</Link>
              <div className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-sm md:-ml-5 md:py-0 md:absolute">
                <div className="relative w-96">
                  <button onClick={openSearchModal} type="button" className="focus:outline-none cursor-point pl-9 pr-6 hover:bg-opacity-30 text-left text-white text-sm w-full rounded-full py-1.5 bg-white bg-opacity-20">
                    Buscar
                  </button>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-white sm:text-sm">
                      <SearchIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative z-10 inline-flex items-center space-x-4 md:ml-5 lg:justify-end">
                <button type="button" className="p-1 rounded-full text-gray-200 hover:text-white focus:outline-none">
                  <BellIcon className="h-6 w-6" />
                </button>
                <div className="ml-3 relative w-8 h-8">
                  <Menu as="div" className="relative inline-block text-left">
                    <div className="">
                      <Menu.Button className="inline-flex justify-center text-sm font-medium text-white rounded-full h-8 w-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 w-56 mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none ring-1 ring-black ring-opacity-5">
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button className={`${active ? 'bg-brand-blue-700 text-white' : 'text-gray-700'} group flex rounded-md items-center w-full px-2.5 py-2 text-sm`}>
                                <UserCircleIcon className="w-5 h-5 mr-2" />
                                Perfil
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button className={`${active ? 'bg-brand-blue-700 text-white' : 'text-gray-700'} group flex rounded-md items-center w-full px-2.5 py-2 text-sm`}>
                                <PencilAltIcon className="w-5 h-5 mr-2" />
                                Editar
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button className={`${active ? 'bg-brand-blue-700 text-white' : 'text-gray-700'} group flex rounded-md items-center w-full px-2.5 py-2 text-sm`}>
                                <LogoutIcon className="w-5 h-5 mr-2" />
                                Cerrar sesión
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>
      <ModalSearch searchIsOpen={searchIsOpen} closeSearchModal={closeSearchModal} />
    </>
  )
}