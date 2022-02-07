import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="container max-w-lg px-4 mx-auto text-left py-14 md:py-28 md:max-w-none md:text-center">
      <h1 className="text-5xl font-extrabold leading-[3rem] tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
        <span className="inline md:block">Encuentra las <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-brand-green-700 to-brand-green-500">mejores</span> opciones</span> <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-brand-green-700 to-brand-green-500">gastronómicas</span> en un <span className="inline md:block">solo lugar</span>
      </h1>
      <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">Descubre platos y restaurantes, conecta con usuarios con gustos similares, compra, puntúa y recomienda.</div>
      <div className="flex flex-col items-center mt-8 text-center md:mt-12">
        <motion.span whileHover={{ scale: 1.04, transition: { duration: 0.35 } }} className="relative inline-flex w-full md:w-auto">
          <Link to="/signin/cliente" className="inline-flex items-center justify-center w-full px-7 py-3.5 text-lg font-bold leading-6 text-white bg-brand-green-500 rounded-md md:w-auto hover:bg-brand-green-700 shadow-lg shadow-brand-green-500/50 focus:outline-none">
            Empezar
          </Link>
        </motion.span>
      </div>
    </div>
  )
}
