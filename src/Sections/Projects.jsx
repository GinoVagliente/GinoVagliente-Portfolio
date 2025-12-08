import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";

const HangmanModel = () => {
  const { scene } = useGLTF("/hangman.glb");

  useFrame((state, delta) => {
    scene.rotation.y += delta * 0.2; // gira lentamente
  });

  return <primitive object={scene} scale={1} position={[0, -0.1, 0]} />;
};

const Projects = () => {
  const milestones = [
    {
      title: "Artist Arena",
      img: "/ArtistArena.png",
      subtitle: "Spotify API based web",
      description:
        "Artist Arena is a comprehensive music analytics platform that lets you explore artists, albums, and head-to-head artist matchups. With its interactive interface and detailed visualizations, users can compare metrics like streams, popularity, followers, and album performance using the Spotify API.",
      url: "https://artist-arena.vercel.app",
    },
    {
      title: "Draw the Sound",
      img: "/dts.png",
      subtitle: "Spotify API + Drawing + Rating others (still on development you can check the source code on my github)",
      description:
        "Draw the Sound lets you visually express how an artist, song, or album makes you feel. Using the Spotify API, you can explore your favorite artists and create drawings that capture the emotions and vibes their music inspires and compare / rate others.",
      url: "",
    }
  ];

  const hangmanProject = {
    title: "Hangman 3D Style Game",
    subtitle: "Interactive Three.js Project",
    description:
      "This project is a 3D-styled Hangman guessing game built using Three.js and react-three-fiber. It was my first experience working with Three.js, creating an interactive 3D environment where users can rotate, zoom, and pan around the Hangman model, giving the classic game a modern 3D twist.",
    url: "https://hangman-game-puce-omega.vercel.app",
  };

  return (
    <div
      id="projects"
      className="relative flex flex-col font-bold overflow-hidden"
    >
      <h2 className="text-3xl sm:text-6xl mb-10 text-center md:text-left relative z-10">
        My Projects
      </h2>
      <div className="w-full h-px bg-gray-900 mb-10 relative z-10"></div>

      {/* Hangman 3D Project */}
      <div className="w-full mb-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center sm:items-center gap-6"
        >
          <div className="w-50 h-64 flex-shrink-0 rounded-4xl overflow-hidden">
            <Canvas camera={{ position: [0.5, 0, 0], fov: 50 }} gl={{ alpha: true }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 3, 3]} />
              <Suspense fallback={null}>
                <HangmanModel />
              </Suspense>
              <OrbitControls enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2} />
            </Canvas>
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold pb-3">
              <a
                href={hangmanProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                {hangmanProject.title}
              </a>
            </h3>
            <p className="text-lg font-semibold pb-3">{hangmanProject.subtitle}</p>
            <p className="text-lg font-normal mt-1">{hangmanProject.description}</p>
          </div>
        </motion.div>

        <div className="w-full h-px bg-gray-900 my-6 relative z-10"></div>
      </div>

      {/* Otros proyectos */}
      <div className="flex flex-col space-y-12 w-full relative z-10">
        {milestones.map((milestone, index) => (
          <div key={index} className="w-full">
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="w-50 flex-shrink-0">
                <img
                  src={milestone.img}
                  alt={milestone.title}
                  className="w-full h-auto rounded-4xl"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold pb-3">
                  <a
                    href={milestone.url}
                    target="_blank"
                    className="hover:text-gray-400 transition-colors"
                  >
                    {milestone.title}
                  </a>
                </h3>
                <p className="text-lg font-semibold pb-3">{milestone.subtitle}</p>
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

export default Projects;
