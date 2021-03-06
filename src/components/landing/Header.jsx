import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="px-4 pt-16 pb-24 mx-auto text-left xs:px-6 sm:px-14 md:px-20 lg:px-16 md:py-28 md:text-center">
      <h1 className="text-5xl font-extrabold leading-[3.2rem] tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
        <span className="inline md:block">Encuentra las <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-brand-green-700 to-brand-green-500">mejores</span> recomendaciones</span> <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-brand-green-700 to-brand-green-500">gastronómicas</span> en un <span className="inline md:block">solo lugar</span>
      </h1>
      <div className="mx-auto text-gray-500 mt-7 md:mt-12 md:max-w-lg md:text-center lg:text-xl">Descubre platos y restaurantes, conecta con usuarios con gustos similares, compra, puntúa y recomienda.</div>
      <div className="flex flex-col items-center mt-10 text-center md:mt-12">
        <motion.span whileHover={{ scale: 1.04, transition: { duration: 0.35 } }} className="relative inline-flex w-full md:w-auto">
          <Link to="/signin/cliente" className="inline-flex items-center justify-center w-full px-7 py-3.5 text-lg font-bold leading-6 text-white bg-brand-green-500 rounded-md md:w-auto hover:bg-brand-green-700 shadow-lg shadow-brand-green-500/50 focus:outline-none">
            Empezar
          </Link>
        </motion.span>
      </div>
    </div>
  )
}
