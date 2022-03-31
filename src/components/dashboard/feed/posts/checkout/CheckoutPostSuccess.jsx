import { useEffect } from "react";
import { useSelector } from "react-redux";
import { merchantOrderId, paymentId, statusPayment } from "../../../../../redux/slices/post/checkout/checkoutSlice";

export const CheckoutPostSuccess = () => {

  const payment_id = useSelector(paymentId) ?? "";
  const merchant_order_id = useSelector(merchantOrderId) ?? "";
  const status_payment = useSelector(statusPayment) ?? "";

  useEffect(() => {
  }, [payment_id, merchant_order_id, status_payment])

  return (
    <div>
      <p>{payment_id}</p>
      <p>{merchant_order_id}</p>
      <p>{status_payment}</p>
    </div>
  )
}
