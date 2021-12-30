import { Menu, Transition } from "@headlessui/react"
import { BellIcon, LogoutIcon, PencilAltIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/outline"
import { Fragment } from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <header className="w-full bg-gradient-to-r from-brand-blue-700 to-brand-blue-900 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto">
        <section className="relative w-full py-3.5 px-10 body-font">
          <div className="container flex flex-col flex-wrap items-center justify-between mx-auto md:flex-row max-w-7xl">
            <Link to="/user/home" className={`relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-white select-none tracking-wide`}>LICIUS.</Link>
            <div className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-sm md:-ml-5 md:py-0 md:absolute">
              <div className="relative w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-white sm:text-sm">
                    <SearchIcon className="h-4 w-4" />
                  </span>
                </div>
                <input
                  type="text"
                  className="block w-full placeholder:text-gray-100 focus:shadow-lg focus:shadow-white/5 placeholder:text-sm text-white text-sm focus:outline-none pl-9 pr-6 py-1.5 rounded-md bg-white bg-opacity-20"
                  placeholder="Buscar"
                />
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
                {/* <div>
                  <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>
                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>

                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>

                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  )
}