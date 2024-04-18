import Estate from "../componants/Estate";
import Footer from "../componants/Footer";
import Slides from "../componants/Slides";
import "../css/Slide.css";

const Home = () => {
  return (
    <div>
      <div className="px-8 mt-8 rounded-lg ">
        <Slides></Slides>
        <Estate></Estate>
      </div>
      
    </div>
  );
};

export default Home;
