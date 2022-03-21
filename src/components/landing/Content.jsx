import { motion } from 'framer-motion';

export const Content = () => {
  return (
    <section className="w-full bg-brand-gray py-7 md:pt-20 md:pb-24 space-y-16">
      <div className="box-border flex flex-col items-center md:items-start content-center px-4 mx-auto leading-6 text-black md:flex-row xs:px-6 sm:px-14 md:px-20 lg:px-16">
        <div className="box-border relative w-full max-w-md mt-8 mb-10 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <motion.img animate={{ y: [10, -5, 5, -5, 10] }} transition={{ repeat: Infinity, duration: 6 }} src="images/capture-dashboard.png" alt="capture-dashboard" className="shadow-xl rounded-xl" />
        </div>
        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 className="m-0 text-xl font-bold leading-tight tracking-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            Boost Productivity
          </h2>
          <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 lg:text-lg">
            Build an atmosphere that creates productivity in your organization and your company culture.
          </p>
          <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Speed past your competition
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Learn the top techniques
            </li>
          </ul>
        </div>
      </div>
      <div className="box-border flex flex-col items-center md:items-start content-center px-4 mx-auto mt-2 leading-6 text-black md:mt-20 md:flex-row xs:px-6 sm:px-14 md:px-20 lg:px-16">
        <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6">
          <h2 className="m-0 text-xl font-bold leading-tight tracking-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            Automated Tasks
          </h2>
          <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
            Save time and money with our revolutionary services. We are the leaders in the industry.
          </p>
          <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Automated task management workflow
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Detailed analytics for your data
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Some awesome integrations
            </li>
          </ul>
        </div>
        <div className="box-border relative w-full max-w-md mt-8 mb-6 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <motion.img animate={{ y: [-5, 5, -5, 10, -5] }} transition={{ repeat: Infinity, duration: 6 }} src="images/capture-dashboard.png" alt="capture-dashboard" className="shadow-xl rounded-xl" />
        </div>
      </div>
    </section>
  );
};
