import { Navigate } from "react-router-dom";

export const RedirectRestaurant = () => {
  return <Navigate to="/restaurante/inicio" replace={true}/>
};
