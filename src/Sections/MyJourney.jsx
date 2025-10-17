import { motion } from "framer-motion";
import TopographicBackground from "../Components/TopographicBackground";

const MyJourney = () => {
  const milestones = [
    {
      year: "2022",
      img: "/hat.png",
      title: "Started University",
      description:
        "I started my university studies in Computer Systems Analysis, taking my first steps into the world of software development.",
    },
    {
      year: "2024 – March",
      img: "/work.png",
      title: "Joined Maser Informática",
      description:
        "I joined Maser Informática as a C# Developer, working on both the frontend and backend sides of projects.",
    },
    {
      year: "2024 – November",
      img: "/reward.png",
      title: "Academic Honor Roll",
      description:
        "I was included in the Academic Honor Roll for my outstanding performance.",
    },
    {
      year: "2025",
      img: "/hat.png",
      title: "Graduation",
      description:
        "I successfully completed my studies and earned my degree in Computer Systems Analysis, marking the beginning of my professional journey.",
    },
  ];

  return (
    <div
      id="my-journey"
      className="relative flex flex-col font-bold p-20 bg-[#FFFCE0] text-[#2C2C2C] overflow-hidden"
    >
      <TopographicBackground/>
      <h2 className="text-3xl sm:text-6xl mb-10 text-center md:text-left relative z-10">
        My Journey
      </h2>
      <div className="w-full h-px bg-gray-900 mb-10 relative z-10"></div>

      <div className="flex flex-col space-y-12 w-full relative z-10">
        {milestones.map((milestone, index) => (
          <div key={index} className="w-full">
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6"
            >
              <div className="w-20">
                <img
                  src={milestone.img}
                  alt={milestone.title}
                  className="w-full h-auto mx-auto"
                />
              </div>
              <div className="flex flex-col text-center sm:text-left">
                <h3 className="text-2xl font-semibold">{milestone.year}</h3>
                <p className="text-lg font-semibold">{milestone.title}</p>
                <p className="text-lg font-normal mt-1">{milestone.description}</p>
              </div>
            </motion.div>

            <div className="w-full h-px bg-gray-900 my-6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyJourney;
