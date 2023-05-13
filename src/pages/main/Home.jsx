import Header from "../../components/Header";
import Banner from "./sections/Banner";
import CurrentStock from "./sections/CurrentStock";

function Home(){
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <CurrentStock></CurrentStock>
        </div>
    )
}

export default Home