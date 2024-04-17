
import Estate from "../componants/Estate";
import Slides from "../componants/Slides";
import "../css/Slide.css"

const Home = () => {
    return (
        <div className="px-8 mt-8 rounded-lg ">
        
            <Slides></Slides>
            <Estate></Estate>
        </div>
    );
};

export default Home;