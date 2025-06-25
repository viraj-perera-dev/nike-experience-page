import Herosection from "./components/homepage/Herosection";
import Section1 from "./components/homepage/Section1";
import Section2 from "./components/homepage/Section2";
import Section3 from "./components/homepage/Section3";
import Section4 from "./components/homepage/Section4";
import Banner from "./components/Banner";
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Herosection />
      <Section1 />
      <Section2/>
      <Section3/>
      <Section4/>
      <Banner/>
      <Footer/>
    </>
  );
}
