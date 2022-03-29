import { Provider } from "react-redux";
import { checkoutStore } from "../stores";

const CheckoutProvider = ({ children }) => {
  return <Provider store={checkoutStore}>{children}</Provider>
}

export default CheckoutProvider;