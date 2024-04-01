import WhatiDo from "../../WhatiDo/WhatiDo";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ResumeSummery from "../ResumeSummery/ResumeSummery";


const Home = () => {
    return (
        <div className="space-y-1">
            <Banner></Banner>
            <About></About>
            <WhatiDo></WhatiDo>
            <ResumeSummery></ResumeSummery>
        </div>
    );
};

export default Home;