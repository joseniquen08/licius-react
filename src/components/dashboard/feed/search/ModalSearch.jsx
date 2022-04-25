import { Dialog, Transition } from "@headlessui/react";
import { SearchIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

export const ModalSearch = ({ searchIsOpen, closeSearchModal }) => {
  return (
    <>
      <Transition appear show={searchIsOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-400/50"
          onClose={closeSearchModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative inline-block w-full max-w-3xl px-6 py-4 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="py-1.5 flex space-x-2 items-center">
                  <div className="relative w-full">
                    <input
                      type="text"
                      name="comment"
                      placeholder="Buscar"
                      className="placeholder:text-sm placeholder:font-inter focus:border-slate-400 focus:ring-0 text-sm block w-full focus:outline-none pl-9 pr-6 py-1.5 border border-slate-300 rounded-lg resize-none"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-slate-600 sm:text-sm">
                        <SearchIcon className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  <div className="flex-none">
                    <button onClick={closeSearchModal} type="button" className="focus:outline-none hover:bg-slate-100 rounded-full p-1">
                      <XIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="py-2.5 pr-9">
                  <hr />
                </div>
                <div className="pr-9">
                  <div className="flex flex-row space-x-4 font-inter">
                    <div className="w-1/2 flex flex-col space-y-2.5">
                      <p className="font-inter font-medium">Categorías</p>
                      <div className="grid grid-cols-2 gap-2.5 text-sm">
                        <button type="button" className="border rounded-xl text-center py-1.5">Comida</button>
                        <button type="button" className="border rounded-xl text-center py-1.5">Comida</button>
                        <button type="button" className="border rounded-xl text-center py-1.5">Comida</button>
                        <button type="button" className="border rounded-xl text-center py-1.5">Comida</button>
                      </div>
                    </div>
                    <div className="w-1/2 flex flex-col space-y-2.5">
                      <p className="font-inter font-medium">Categorías</p>
                      <div className="grid grid-cols-2 gap-2.5 text-sm">
                        <button type="button" className="border rounded-xl text-center py-1.5">Comida</button>
                        <button type="button" className="border rounded-xl text-center py-1.5">Comida</button>
                        <button type="button" className="border rounded-xl text-center py-1.5">Comida</button>
                        <button type="button" className="border rounded-xl text-center py-1.5">Comida</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
