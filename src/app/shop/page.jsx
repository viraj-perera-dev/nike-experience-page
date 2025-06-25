import Image from "next/image";
import Section1 from "../components/shop/section1";
import Section2 from "../components/shop/section2";
import Section3 from "../components/shop/section3";
import Banner from "../components/Banner";

export default function Shop() {
  return (
    <>
      <Section1/>
      <Section2/>
      <Section3/>
    <Banner/>
    </>
  );
}
