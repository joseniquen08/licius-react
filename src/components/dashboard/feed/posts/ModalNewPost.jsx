import { Dialog, Switch, Transition } from "@headlessui/react";
import { EmojiHappyIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";
import moment from 'moment';
import { forwardRef, Fragment, useEffect, useRef, useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { contentP, createPreferenceAsync, setContentPostAction, setFinalDateAction, setFinalTimeAction, setTitlePostAction, setTotalDaysAction, setTotalPriceAction } from "../../../../redux/slices/post/checkout/checkoutSlice";
import { contentNP, createPostWithouthPaymentAsync, createPS, loadingPost, setContentNewPostAction, setPostSuccessAction, setTitleNewPostAction } from "../../../../redux/slices/post/postSlice";
import decodeToken from "../../../../utils/jwt/decode";
import { Spinner } from "../../../shared/Spinner";

export const ModalNewPost = ({ postIsOpen, closePostModal }) => {

  const { role } = decodeToken(localStorage.getItem('token'));

  const [startDate, setStartDate] = useState(new Date(new Date().setDate(new Date().getDate() + 3)));
  const [totalDays, setTotalDays] = useState(3);
  const [totalPrice, setTotalPrice] = useState(30);
  const [isPromoted, setIsPromoted] = useState(false);
  const [errorPostTitle, setErrorPostTitle] = useState(false);
  const [errorPostContent, setErrorPostContent] = useState(false);
  const [loadingNewPost, setLoadingNewPost] = useState(false);

  const postTitleRef = useRef();
  const postContentRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contentPost = useSelector(contentP) ?? "";
  const contentNewPost = useSelector(contentNP) ?? "";
  const postIsLoading = useSelector(loadingPost) ?? false;
  const createPostSuccess = useSelector(createPS) ?? false;

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
    if (postTitleRef.current.value !== "") {
      if (postContentRef.current.value !== ""){
        dispatch(setTitleNewPostAction(postTitleRef.current.value));
        dispatch(setContentNewPostAction(postContentRef.current.value));
        if (isPromoted) {
          const orderData = {
            title: postTitleRef.current.value,
            unit_price: 10,
            quantity: totalDays,
          }
          dispatch(setTitlePostAction(postTitleRef.current.value));
          dispatch(setContentPostAction(postContentRef.current.value));
          dispatch(setTotalDaysAction(totalDays));
          dispatch(setFinalDateAction(moment(startDate).format('L')));
          dispatch(setFinalTimeAction(moment(startDate).format('LT')));
          dispatch(setTotalPriceAction(totalPrice));
          dispatch(createPreferenceAsync(orderData));
          navigate('/restaurante/post/checkout');
        } else {
          dispatch(createPostWithouthPaymentAsync({
            user_id: decodeToken(localStorage.getItem('token')).id,
            title: postTitleRef.current.value,
            content: postContentRef.current.value,
            attachment_urls: []
          }));
        }
      } else {
        setErrorPostContent(true);
        postContentRef.current.focus();
      }
    } else {
      setErrorPostTitle(true);
      postTitleRef.current.focus();
    }
  }

  const CustomInputDatepicker = forwardRef(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref} className="bg-transparent border border-gray-300 py-1 text-center w-48 text-slate-800 font-inter font-medium rounded-md text-[0.9rem]">{value}</button>
  ));

  const handleChange = () => {
    setErrorPostTitle(false);
    setErrorPostContent(false);
  }

  useEffect(() => {
    if (postIsLoading) setLoadingNewPost(true);
    if (createPostSuccess) {
      setErrorPostContent(false);
      setLoadingNewPost(false);
      dispatch(setPostSuccessAction(true));
      closePostModal();
    }
    // eslint-disable-next-line
  }, [contentPost, contentNewPost, postIsLoading, createPostSuccess]);

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
                className="text-2xl font-inter text-slate-800 py-4 font-semibold text-center"
              >
                Crear publicación
              </Dialog.Title>
              <div className="space-y-1">
                <textarea
                  type="text"
                  name="title"
                  placeholder="¿Qué hay de nuevo?"
                  rows={1}
                  ref={postTitleRef}
                  onChange={handleChange}
                  className={`placeholder:font-inter font-inter placeholder:text-sm text-sm block w-full focus:outline-none focus:border-slate-300 focus:ring-0 px-4 py-2 border rounded-lg resize-none ${errorPostTitle ? 'border-red-500 focus:border-red-500' : 'border-slate-300'}`}
                />
                {
                  errorPostTitle && <p className="text-red-500 text-sm">Debes agregar un título al post.</p>
                }
              </div>
              <div className="py-2 space-y-1">
                <textarea
                  type="text"
                  name="comment"
                  placeholder="Cuéntanos un poco más..."
                  rows={4}
                  ref={postContentRef}
                  onChange={handleChange}
                  className={`placeholder:font-inter font-inter placeholder:text-sm text-sm block w-full focus:outline-none focus:border-slate-300 focus:ring-0 px-4 py-2 border rounded-lg resize-none ${errorPostContent ? 'border-red-500 focus:border-red-500' : 'border-slate-300'}`}
                />
                {
                  errorPostContent && <p className="text-red-500 text-sm">Debes agregar un texto al post.</p>
                }
              </div>
              <div className="border my-2 px-4 py-1 border-slate-300 rounded-lg flex items-center justify-between">
                <p className="text-slate-800 font-inter py-2">Añade a tu post...</p>
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
                      <p className="flex items-center space-x-1.5 text-stone-700"><span><HiOutlineSpeakerphone className="h-5 w-5"/></span><span className="font-medium font-inter">Potencia tu alcance</span></p>
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
                  className="inline-flex justify-center font-inter w-36 py-2 text-base font-semibold text-white bg-brand-green-500 border border-transparent rounded-full hover:bg-brand-green-700 focus:outline-none"
                  onClick={handlePost}
                >
                  {isPromoted ? 'Continuar' : (loadingNewPost ? (<Spinner/>) : 'Publicar')}
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
