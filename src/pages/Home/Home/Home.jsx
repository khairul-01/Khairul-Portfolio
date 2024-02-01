import WhatiDo from "../../WhatiDo/WhatiDo";
import About from "../About/About";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div className="space-y-5">
            <Banner></Banner>
            <About></About>
            <WhatiDo></WhatiDo>
        </div>
    );
};

export default Home;