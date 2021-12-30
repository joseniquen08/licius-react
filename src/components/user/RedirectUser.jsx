import { Navigate } from "react-router-dom";

export const RedirectUser = () => {
  return (
    <Navigate to='/user/home' replace={true} />
  )
}
