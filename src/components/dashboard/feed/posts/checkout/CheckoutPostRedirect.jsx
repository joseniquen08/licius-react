import { useDispatch } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import { setResponsePaymentSuccessAction } from "../../../../../redux/slices/post/checkout/checkoutSlice";

export const CheckoutPostRedirect = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  dispatch(setResponsePaymentSuccessAction({
    payment_id: searchParams.get("payment_id"),
    merchant_order_id: searchParams.get("merchant_order_id"),
    status: searchParams.get("status")
  }))

  return <Navigate to='/restaurante/post/checkout/success'/>
}
