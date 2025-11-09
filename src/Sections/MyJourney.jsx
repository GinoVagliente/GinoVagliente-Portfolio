import { motion } from "framer-motion";
import { useState } from "react";
import { LiaUniversitySolid } from "react-icons/lia";
import { PiDesktopTower, PiGraduationCap } from "react-icons/pi";
import { CiTrophy, CiViewList } from "react-icons/ci";

const MyJourney = () => {
  const milestones = [
    {
      year: "2022",
      title: "Started University",
      description:
        "I started my university studies in Computer Systems Analysis, taking my first steps into the world of software development.",
      icon: <LiaUniversitySolid className="text-4xl sm:text-5xl" />,
    },
    {
      year: "2024 – March",
      title: "Joined Maser Informática",
      description:
        "I joined Maser Informática as a C# Developer, working on both the frontend and backend sides of projects.",
      icon: <PiDesktopTower className="text-4xl sm:text-5xl" />,
    },
    {
      year: "2024 – November",
      title: "Academic Honor Roll",
      description:
        "I was included in the Academic Honor Roll for my outstanding performance.",
      icon: <CiTrophy className="text-4xl sm:text-5xl" />,
    },
    {
      year: "2025 - Mid September",
      title: "IELTS Results",
      description:
        "I took the IELTS exam and achieved an overall band score of 8.0, demonstrating a high level of proficiency in English across all four skills — listening, reading, writing, and speaking.",
      icon: <CiViewList className="text-4xl sm:text-5xl" />,
    },
    {
      year: "2025 - End of September",
      title: "Graduation",
      description:
        "I successfully completed my studies and earned my degree in Computer Systems Analysis, marking the beginning of my professional journey.",
      icon: <PiGraduationCap className="text-4xl sm:text-5xl" />,
    },
  ];

  return (
    <div
      id="my-journey"
      className="relative flex flex-col font-bold overflow-hidden"
    >
      <h2 className="text-3xl sm:text-6xl mb-10 text-center md:text-left relative z-10">
        My Journey
      </h2>
      <div className="w-full h-px bg-gray-900 mb-10 relative z-10"></div>

      <div className="flex flex-col w-full relative z-10 gap-5">
        {milestones.map((milestone, index) => {
          const [hasAnimated, setHasAnimated] = useState(false);

          return (
            <div key={index} className="w-full">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
                whileInView={!hasAnimated ? { opacity: 1, x: 0 } : {}}
                onViewportEnter={() => setHasAnimated(true)}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-6"
              >
                {/* Ícono dinámico */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={hasAnimated ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  className="flex items-center justify-center w-20 h-20 text-[#2C2C2C]"
                >
                  {milestone.icon}
                </motion.div>

                {/* Texto */}
                <div className="flex flex-col text-center sm:text-left">
                  <h3 className="text-2xl font-semibold">{milestone.year}</h3>
                  <p className="text-lg font-semibold">{milestone.title}</p>
                  <p className="text-lg font-normal mt-1">{milestone.description}</p>
                </div>
              </motion.div>

              <div className="w-full h-px bg-gray-900 my-6"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyJourney;
