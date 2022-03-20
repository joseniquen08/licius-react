import { Route, Routes } from "react-router-dom";
import { SignInClient } from "../components/auth/login/SignInClient";
import { SignInRestaurant } from "../components/auth/login/SignInRestaurant";
import { SignUpClient } from "../components/auth/register/SignUpClient";
import { SignUpRestaurant } from "../components/auth/register/SignUpRestaurant";
import { Client } from "../components/client/Client";
import { HomeClient } from "../components/client/HomeClient";
import { RedirectClient } from "../components/client/RedirectClient";
import { Feed } from "../components/dashboard/feed/Feed";
import { Search } from "../components/dashboard/feed/search/Search";
import { Home } from "../components/landing/Home";
import { HomeRestaurant } from "../components/restaurant/HomeRestaurant";
import { RedirectRestaurant } from "../components/restaurant/RedirectRestaurant";
import { Restaurant } from "../components/restaurant/Restaurant";
import { Auth } from "../pages/Auth";
import { LandingPage } from "../pages/LandingPage";
import { NotFound } from "../pages/NotFound";
import { PrivateRouteClient, PrivateRouteRestaurant } from "./PrivateRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} >
        <Route index element={<Home/>}/>
        {/* <Route path="plates" element={<PlatesRest/>}/> */}
      </Route>
      <Route path="/signin" element={<Auth/>} >
        <Route path="cliente" element={<SignInClient/>}/>
        <Route path="restaurante" element={<SignInRestaurant/>}/>
      </Route>
      <Route path="/signup" element={<Auth/>} >
        <Route path="cliente" element={<SignUpClient/>}/>
        <Route path="restaurante" element={<SignUpRestaurant/>}/>
      </Route>
      {/* Proteger las siguientes rutas */}
      <Route path="/cliente" element={
        <PrivateRouteClient>
          <Client/>
        </PrivateRouteClient>
      } >
        <Route index element={<RedirectClient/>}/>
        <Route path="inicio" element={<HomeClient/>} >
          <Route index element={<Feed/>}/>
          <Route path="search" element={<Search/>}/>
        </Route>
      </Route>
      <Route path="/restaurante" element={
        <PrivateRouteRestaurant>
          <Restaurant/>
        </PrivateRouteRestaurant>
      }>
        <Route index element={<RedirectRestaurant/>}/>
        <Route path="inicio" element={<HomeRestaurant/>} >
          <Route index element={<Feed/>}/>
          <Route path="search" element={<Search/>}/>
        </Route>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};
