import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../Components/BackgroundRipple";

const Footer = () => {
  return (
    <>
      <div id="footer" className="w-full h-0.5 bg-gray-900"></div>

      <motion.div
        className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center font-bold bg-[#FFFACD] text-[#2C2C2C] px-4 sm:px-20 py-8 "
      >
        <BackgroundRippleEffect />
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-20 z-10"
        >
          <motion.h2
            className="text-xl sm:text-2xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Gino Vagliente
          </motion.h2>

          <motion.div
            className="flex flex-col gap-2 sm:gap-8 text-lg sm:text-2xl font-normal"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              whileHover={{ scale: 1.1, color: "#9ca3af" }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="transition-colors"
            >
              → Github
            </motion.a>
            <motion.a
              href="https://www.linkedin.com"
              target="_blank"
              whileHover={{ scale: 1.1, color: "#9ca3af" }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="transition-colors"
            >
              → Linkedin
            </motion.a>

          </motion.div>

          <motion.div
            className="flex flex-col gap-2 sm:gap-8 text-lg sm:text-2xl font-normal"
          >
            <motion.a
              target="_blank"
              whileHover={{ scale: 1.1, color: "#9ca3af" }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="transition-colors"
            >
              → Curriculum
            </motion.a>

          </motion.div>
        </motion.div>

        {/* Derecha */}
        <motion.h2
          className="text-xl sm:text-2xl mt-4 sm:mt-0 font-normal"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          Last Updated 19-10-2025
        </motion.h2>
      </motion.div>
    </>
  );
};

export default Footer;
