import { Dialog, Transition } from "@headlessui/react";
import { EmojiHappyIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

export const ModalNewPost = ({ postIsOpen, closePostModal }) => {
  return (
    <Transition appear show={postIsOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto bg-slate-400/50"
        onClose={closePostModal}
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
            <div className="relative inline-block w-full max-w-xl px-6 pt-4 pb-2 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-2xl font-inter text-slate-800 py-2 font-semibold text-center"
              >
                Crear publicación
              </Dialog.Title>
              <div className="py-4">
                <textarea
                  type="text"
                  name="comment"
                  placeholder="¿Qué hay de nuevo?"
                  rows={4}
                  className="placeholder:font-inter placeholder:text-sm text-sm block w-full focus:outline-none px-4 py-2 border border-slate-300 rounded-lg resize-none"
                />
              </div>
              <div className="border px-4 py-1 border-slate-300 rounded-lg flex items-center justify-between">
                <p className="text-slate-800 text-sm font-inter py-2">Añade a tu post...</p>
                <div className="flex">
                  <button type="button" className="hover:bg-slate-100 rounded-full p-1.5 focus:outline-none">
                    <PhotographIcon className="h-5 w-5" />
                  </button>
                  <button type="button" className="hover:bg-slate-100 rounded-full p-1.5 focus:outline-none">
                    <EmojiHappyIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="py-4 flex item-center justify-center">
                <button
                  type="button"
                  className="inline-flex justify-center font-inter px-5 py-2 text-base font-semibold text-white bg-brand-blue-700 border border-transparent rounded-full hover:bg-brand-blue-900 focus:outline-none"
                  onClick={closePostModal}
                >
                  Publicar
                </button>
              </div>
              <button onClick={closePostModal} type="button" className="absolute focus:outline-none hover:bg-slate-100 top-5 right-5 rounded-full p-1">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
