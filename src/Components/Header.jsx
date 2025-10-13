import { motion } from "framer-motion";
import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="w-full absolute top-0 left-0 p-4 bg-transparent z-50"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="flex justify-between items-center">
        <motion.div className="flex gap-4" variants={containerVariants}>
          <motion.p
            variants={itemVariants}
            whileHover={{ scale: 1.1, color: "#9ca3af" }}
            className="text-sm sm:text-xl cursor-pointer"
          >
            Work
          </motion.p>
          <motion.p
            variants={itemVariants}
            whileHover={{ scale: 1.1, color: "#9ca3af" }}
            className="text-sm sm:text-xl cursor-pointer"
          >
            Education
          </motion.p>
          <motion.p
            variants={itemVariants}
            whileHover={{ scale: 1.1, color: "#9ca3af" }}
            className="text-sm sm:text-xl cursor-pointer"
          >
            Contact
          </motion.p>
        </motion.div>

        <motion.div className="flex items-center gap-4" variants={containerVariants}>
          <motion.a
            href="#"
            variants={itemVariants}
            whileHover={{ scale: 1.25 }}
            className="text-lg sm:text-2xl"
          >
            <TfiLinkedin />
          </motion.a>
          <motion.a
            href="#"
            variants={itemVariants}
            whileHover={{ scale: 1.25 }}
            className="text-lg sm:text-2xl"
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </div>
      <div className="w-full h-0.5 bg-gray-900 mt-2"></div>
    </motion.div>
  );
};

export default Header;
