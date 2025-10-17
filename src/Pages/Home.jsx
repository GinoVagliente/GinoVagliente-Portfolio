import Footer from "../Sections/Footer";
import Introduction from "../Sections/Introduction";
import MyJourney from "../Sections/MyJourney";
import Projects from "../Sections/Projects";
import TopographicBackground from "../Components/TopographicBackground";
const Home = () => {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden ">
      <Introduction />
      <div className="relative bg-[#FFF9C0] text-[#2C2C2C] overflow-hidden p-20 sm:p-40 flex flex-col gap-5 sm:gap-10">
        <TopographicBackground className="opacity-70" />
        <MyJourney />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
