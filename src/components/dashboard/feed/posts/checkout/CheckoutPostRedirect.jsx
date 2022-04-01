import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import { savePaymentResponseAsync, setResponsePaymentSuccessAction, statusSave } from "../../../../../redux/slices/post/checkout/checkoutSlice";
import decodeToken from "../../../../../utils/jwt/decode";

export const CheckoutPostRedirect = () => {

  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();

  const statusS = useSelector(statusSave) ?? false;

  useEffect(() => {
    dispatch(savePaymentResponseAsync({
      title: localStorage.getItem("titlePost"),
      content: localStorage.getItem("contentPost"),
      attachment_urls: [],
      user_id: decodeToken(localStorage.getItem('token')).id,
      payment_id: searchParams.get("payment_id"),
      payment_type: searchParams.get("payment_type"),
      merchant_order_id: searchParams.get("merchant_order_id")
    }));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (statusS) {
      localStorage.removeItem("titlePost");
      localStorage.removeItem("contentPost");
      dispatch(setResponsePaymentSuccessAction(true));
      setIsSuccess(true);
    }
    // eslint-disable-next-line
  }, [statusS]);

  return (
    <>
      {
        isSuccess ? (<Navigate to='/restaurante/inicio'/>) : (<p>Cargando</p>)
      }
    </>
  );
}
