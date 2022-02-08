import { Route, Routes } from "react-router-dom";
import { Client } from "../components/client/Client";
import { HomeClient } from "../components/client/HomeClient";
import { RedirectClient } from "../components/client/RedirectClient";
import { Feed } from "../components/dashboard/feed/Feed";
import { Search } from "../components/dashboard/feed/search/Search";
import { Home } from "../components/landing/Home";
import { HomeRestaurant } from "../components/restaurant/HomeRestaurant";
import { PlatesRest } from "../components/restaurant/PlatesRest";
import { RedirectRestaurant } from "../components/restaurant/RedirectRestaurant";
import { Restaurant } from "../components/restaurant/Restaurant";
import { SignInClient } from "../components/user/auth/login/SignInClient";
import { SignInRestaurant } from "../components/user/auth/login/SignInRestaurant";
import { SignUpClient } from "../components/user/auth/register/SignUpClient";
import { SignUpRestaurant } from "../components/user/auth/register/SignUpRestaurant";
import { Auth } from "../pages/Auth";
import { LandingPage } from "../pages/LandingPage";
import { NotFound } from "../pages/NotFound";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} >
        <Route index element={<Home />} />
        <Route path="plates" element={< PlatesRest/>} />
      </Route>
      <Route path="/signin" element={<Auth />} >
        <Route path="cliente" element={<SignInClient />} />
        <Route path="restaurante" element={<SignInRestaurant />} />
      </Route>
      <Route path="/signup" element={<Auth />} >
        <Route path="cliente" element={<SignUpClient />} />
        <Route path="restaurante" element={<SignUpRestaurant />} />
      </Route>
      {/* Proteger las siguientes rutas */}
      <Route path="/cliente" element={<Client />} >
        <Route index element={<RedirectClient />} />
        <Route path="inicio" element={<HomeClient />} >
          <Route index element={<Feed />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Route>
      <Route path="/restaurante" element={<Restaurant />}>
        <Route index element={<RedirectRestaurant />} />
        <Route path="inicio" element={<HomeRestaurant />} >
          <Route index element={<Feed />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
