import { Navigate } from "react-router-dom";
import decodeToken from "../utils/jwt/decode";


export const PrivateRouteClient = ({ children }) => {

  const token = localStorage.getItem('token');

  if (!token) return <Navigate to='/signin/cliente'/>;

  const { role } = decodeToken(token);

  return role === 2 ? children : <Navigate to='/restaurante/inicio'/>;
}

export const PrivateRouteRestaurant = ({ children }) => {

  const token = localStorage.getItem('token');

  if (!token) return <Navigate to='/signin/restaurante'/>;

  const { role } = decodeToken(token);

  return role === 3 ? children : <Navigate to='/cliente/inicio'/>;
}
