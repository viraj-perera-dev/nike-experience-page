import Image from "next/image";
import Section1 from "../components/shop/section1";
import Section2 from "../components/shop/section2";
import Section3 from "../components/shop/section3";
import Banner from "../components/Banner";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Shop() {
  return (
    <>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Banner/>
      <Footer/>
    </>
  );
}
