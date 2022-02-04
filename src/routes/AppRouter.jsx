import { Route, Routes } from "react-router-dom";
import { ChooseOption } from "../components/ChooseOption";
import { Feed } from "../components/dashboard/feed/Feed";
import { Search } from "../components/dashboard/feed/search/Search";
import { Home } from "../components/landing/Home";
import { NotFound } from "../components/NotFound";
import { PlatesRest } from "../components/restaurant/PlatesRest";
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";
import { SignInClient } from "../components/user/auth/login/SignInClient";
import { SignInRestaurant } from "../components/user/auth/login/SignInRestaurant";
import { SignUpClient } from "../components/user/auth/register/SignUpClient";
import { SignUpRestaurant } from "../components/user/auth/register/SignUpRestaurant";
import { HomeUser } from "../components/user/HomeUser";
import { RedirectUser } from "../components/user/RedirectUser";
import { User } from "../components/user/User";
import { LandingPage } from "../pages/LandingPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} >
        <Route index element={<Home />} />
        <Route path="plates" element={< PlatesRest/>} />
      </Route>
      <Route path="/signin" element={<SignIn />} >
        <Route index element={<ChooseOption />} />
        <Route path="usuario" element={<SignInClient />} />
        <Route path="restaurante" element={<SignInRestaurant />} />
      </Route>
      <Route path="/signup" element={<SignUp />} >
        <Route index element={<ChooseOption />} />
        <Route path="usuario" element={<SignUpClient />} />
        <Route path="restaurante" element={<SignUpRestaurant />} />
      </Route>
      {/* Proteger las siguientes rutas */}
      <Route path="/user" element={<User />} >
        <Route index element={<RedirectUser />} />
        <Route path="home" element={<HomeUser />} >
          <Route index element={<Feed />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
