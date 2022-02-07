import { Navigate } from "react-router-dom";

export const RedirectClient = () => {
  return <Navigate to="/cliente/inicio" replace={true}/>
};
