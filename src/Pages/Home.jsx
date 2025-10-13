import Introduction from "../Sections/Introduction";
import MyJourney from "../Sections/MyJourney";
import Projects from "../Sections/Projects";
const Home = () => {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden ">
      <Introduction />
      <MyJourney />
      <Projects />
    </div>
  );
};

export default Home;
