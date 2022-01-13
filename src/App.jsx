import { Route, Routes } from 'react-router-dom'
import { Landing } from './components/landing/Landing';
import { NotFound } from './components/NotFound';
import { SignIn } from './components/SignIn';
import { SignInUser } from './components/user/SignInUser';
import { SignUpUser } from './components/user/SignUpUser';
import { SignUp } from './components/SignUp';
import { ChooseOption } from './components/ChooseOption';
import { Home } from './components/landing/Home';
import { SignInRestaurant } from './components/restaurant/SignInRestaurant';
import { SignUpRestaurant } from './components/restaurant/SignUpRestaurant';
import { HomeUser } from './components/user/HomeUser';
import { User } from './components/user/User';
import { RedirectUser } from './components/user/RedirectUser';
import { Search } from './components/dashboard/feed/search/Search';
import { Feed } from './components/dashboard/feed/Feed';

function App() {
  return (
    <div className="font-inter h-full">
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Landing />} >
            <Route index element={<Home />} />
          </Route>
          <Route path="/signin" element={<SignIn />} >
            <Route index element={<ChooseOption />} />
            <Route path="usuario" element={<SignInUser />} />
            <Route path="restaurante" element={<SignInRestaurant />} />
          </Route>
          <Route path="/signup" element={<SignUp />} >
            <Route index element={<ChooseOption />} />
            <Route path="usuario" element={<SignUpUser />} />
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
      </div>
    </div>
  );
}

export default App;