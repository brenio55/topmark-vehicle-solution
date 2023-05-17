import Header from "../../components/Header";
import AboutUs from "./sections/AboutUs";
import Banner from "./sections/Banner";
import CurrentStock from "./sections/CurrentStock";

function Home(){
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <CurrentStock></CurrentStock>
            <AboutUs></AboutUs>
        </div>
    )
}

export default Home