import { motion } from "framer-motion";
import Header from "../Components/Header";

const Introduction = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center items-start min-h-screen font-bold bg-[#FFFACD] text-[#2C2C2C] px-4 sm:px-20">
        <Header />

        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col mt-16"
        >
          <div className="flex justify-between items-center w-full">
            <p className="text-sm sm:text-2xl">Argentina</p>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <p className="text-sm sm:text-2xl">Currently looking for work</p>
            </div>
          </div>
          <div className="w-full h-px bg-gray-900 mt-2"></div>
        </motion.div>

        <motion.h1
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-3xl sm:text-8xl text-left w-full "
        >
          Hi, I'm Name
        </motion.h1>

        <div className="w-full flex flex-col mt-12 space-y-2">
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl text-left"
          >
            FullStack Developer
          </motion.p>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg sm:text-xl text-left"
          >
            Mobile Developer
          </motion.p>
        </div>
      </div>

      <div className="w-full h-0.5 bg-gray-900"></div>
    </>
  );
};

export default Introduction;
