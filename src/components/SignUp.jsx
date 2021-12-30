import { Link, Outlet } from 'react-router-dom';
import { Footer } from './landing/Footer';

export const SignUp = () => {
  return (
    <div className="w-full flex flex-col items-center min-h-full pt-16 justify-between font-inter text-2xl xs:text-lg bg-brand-gray">
      <div className="mx-auto py-20">
        <div className="pb-10 flex justify-center items-center">
          <Link to="/" className="font-extrabold text-center text-4xl sm:text-6xl tracking-wide text-brand-green-500">LICIUS.</Link>
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}