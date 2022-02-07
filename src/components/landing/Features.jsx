import { FaCommentsDollar, FaStar, FaUserFriends } from 'react-icons/fa';

export const Features = () => {
  return (
    <section className="py-2 bg-brand-gray">
      <div className="container items-center max-w-6xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
            <div className="w-full lg:max-w-md">
              <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">¡Repleto de opciones para armar tu comida!</h2>
              <ul>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <FaUserFriends size={24} className="mx-1 text-pink-500"/>
                  <span className="font-medium text-gray-500">Conecta con usuarios</span>
                </li>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <FaStar size={24} className="mx-1 text-yellow-500"/>
                  <span className="font-medium text-gray-500">Recomienda tu comida favorita</span>
                </li>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <FaCommentsDollar size={24} className="mx-1 text-green-500"/>
                  <span className="font-medium text-gray-500">Interactúa con tus restaurantes favoritos</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full" src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" alt="featureimage" /></div>
        </div>
      </div>
    </section>
  )
}
