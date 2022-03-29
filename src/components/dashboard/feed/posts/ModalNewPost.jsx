import { Dialog, Switch, Transition } from "@headlessui/react";
import { EmojiHappyIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";
import moment from 'moment';
import { forwardRef, Fragment, useEffect, useRef, useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { contentP, setContentPost } from "../../../../redux/slices/post/checkout/checkoutSlice";
import { contentNP, setContentNewPost } from "../../../../redux/slices/post/postSlice";
import decodeToken from "../../../../utils/jwt/decode";

export const ModalNewPost = ({ postIsOpen, closePostModal }) => {

  const { role } = decodeToken(localStorage.getItem('token'));

  const [startDate, setStartDate] = useState(new Date(new Date().setDate(new Date().getDate() + 3)));
  const [totalDays, setTotalDays] = useState(3);
  const [totalPrice, setTotalPrice] = useState(30);
  const [isPromoted, setIsPromoted] = useState(false);
  const [errorPostContent, setErrorPostContent] = useState(false);

  const postContentRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contentPost = useSelector(contentP) ?? "";
  const contentNewPost = useSelector(contentNP) ?? "";

  const handleDate = (date) => {
    const now = new Date();
    const newDate = new Date(date.setHours(now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds()));
    const moment_1 = moment(now);
    const moment_2 = moment(newDate);
    const days = moment_2.diff(moment_1, 'days');
    setStartDate(newDate);
    setTotalDays(days);
    setTotalPrice(days * 10);
  }

  const handlePost = () => {
    if (postContentRef.current.value !== ""){
      dispatch(setContentPost(postContentRef.current.value));
      dispatch(setContentNewPost(postContentRef.current.value));
      if (isPromoted) {
        navigate('/restaurante/inicio/checkout');
      }
    } else {
      setErrorPostContent(true);
      postContentRef.current.focus();
    }
  }

  const CustomInputDatepicker = forwardRef(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref} className="bg-transparent border border-gray-300 py-1 text-center w-48 text-slate-800 font-inter font-medium rounded-md text-[0.9rem]">{value}</button>
  ));

  const handleChange = () => {
    setErrorPostContent(false);
  }

  useEffect(() => {

  }, [contentPost, contentNewPost]);

  return (
    <Transition appear show={postIsOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto bg-slate-400/50"
        onClose={() => {
          closePostModal();
          setErrorPostContent(false);
        }}
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
              <div className="py-4 space-y-1">
                <textarea
                  type="text"
                  name="comment"
                  placeholder="¿Qué hay de nuevo?"
                  rows={4}
                  ref={postContentRef}
                  onChange={handleChange}
                  className={`placeholder:font-inter placeholder:text-sm text-sm block w-full focus:outline-none px-4 py-2 border rounded-lg resize-none ${errorPostContent ? 'border-red-500' : 'border-slate-300'}`}
                />
                {
                  errorPostContent && <p className="text-red-500 text-sm">Debes agregar un texto al post.</p>
                }
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
              {
                role === 3 && (
                  <>
                    <div className="py-3 flex items-center justify-between w-full">
                      <p className="flex items-center space-x-1.5 text-stone-700"><span><HiOutlineSpeakerphone className="h-5 w-5"/></span><span className="font-medium">Potencia tu alcance</span></p>
                      <div>
                        <Switch
                          checked={isPromoted}
                          onChange={setIsPromoted}
                          className={`${isPromoted ? 'bg-brand-green-500' : 'bg-gray-200'}
                            relative inline-flex flex-shrink-0 h-7 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span
                            aria-hidden="true"
                            className={`${isPromoted ? 'translate-x-5' : 'translate-x-0'}
                              pointer-events-none inline-block h-6 w-6 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                          />
                        </Switch>
                      </div>
                    </div>
                    {
                      isPromoted && (
                        <div className="text-stone-700 space-y-2 border font-medium border-gray-300 rounded-lg px-5 py-3.5 font-inter">
                          <p className="font-bold text-lg">Ajustes de la promoción</p>
                          <div className="flex justify-between items-center">
                            <div>
                              <p>Fecha fin</p>
                              <p className="text-xs">Días totales: {totalDays}</p>
                            </div>
                            <div className="flex items-center justify-center">
                              <DatePicker
                                selected={startDate}
                                onChange={(date) => handleDate(date)}
                                dateFormat="dd/MM/yyyy h:mm aa"
                                minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                                customInput={<CustomInputDatepicker/>}
                              />
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p>Presupuesto estimado</p>
                              <p className="text-xs">Monto diario: S/. 10.00</p>
                            </div>
                            <div className="flex items-center justify-end">
                              <p className="font-semibold">S/. {totalPrice}.00</p>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  </>
                )
              }
              <div className="py-4 flex item-center justify-center">
                <button
                  type="button"
                  className="inline-flex justify-center font-inter px-5 py-2 text-base font-semibold text-white bg-brand-blue-700 border border-transparent rounded-full hover:bg-brand-blue-900 focus:outline-none"
                  onClick={handlePost}
                >
                  {isPromoted ? 'Continuar' : 'Publicar'}
                </button>
              </div>
              <button
                onClick={() => {
                  closePostModal();
                  setErrorPostContent(false);
                }}
                type="button"
                className="absolute focus:outline-none hover:bg-slate-100 top-5 right-5 rounded-full p-1"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
