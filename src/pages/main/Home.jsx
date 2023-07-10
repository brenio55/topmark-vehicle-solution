import Header from "../../components/Header";
import Footer from "../../components/Footer";

import AboutUs from "./sections/AboutUs";
import Banner from "./sections/Banner";
import CurrentStock from "./sections/CurrentStock";
import Contact from "./sections/Contact";

function Home() {
  return (
    <>
      <Header onLandingPage={true}></Header>
      <main>
        <Banner></Banner>
        <CurrentStock></CurrentStock>
        <AboutUs></AboutUs>
        <Contact></Contact>
      </main>
      <Footer onLandingPage={true}></Footer>
    </>
  );
}

export default Home;
