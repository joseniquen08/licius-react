import { useDispatch } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import { setResponsePaymentSuccessAction } from "../../../../../redux/slices/post/checkout/checkoutSlice";

export const CheckoutPostRedirect = () => {

  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  dispatch(setResponsePaymentSuccessAction(searchParams.get("status")));

  return <Navigate to='/restaurante/inicio'/>
}
