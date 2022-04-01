import { useDispatch } from "react-redux";
import { setResponsePaymentSuccessAction } from "../../../../redux/slices/post/checkout/checkoutSlice";

export const ToastPublishedPost = () => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setResponsePaymentSuccessAction(false));
  }

  return (
    <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-white bg-green-500 rounded-lg shadow absolute space-x-4 bottom-5 right-8" role="alert">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-white bg-white/20 rounded-lg">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
      </div>
      <div className="ml-3 text-sm font-normal">La publicación ha sido promocionada exitosamente.</div>
      <button type="button" onClick={handleClick} className="ml-auto -mx-1.5 -my-1.5 bg-green-500 text-white rounded-lg focus:outline-none p-1.5 hover:bg-white/10 inline-flex h-8 w-8" data-dismiss-target="#toast-success" aria-label="Close">
        <span className="sr-only">Close</span>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </button>
    </div>
  )
}
