import { Inter } from "next/font/google";
import { useState } from "react";
import { Hero } from "../Components/Hero/Hero.jsx";
import { NavBar } from "../Components/NavBar/NavBar.jsx";
import { Footer } from "../Components/Footer/Footer.jsx";
import { Unav } from "../Components/Unav/Unav.jsx";
import { ModalSection } from "../Components/Modal/ModalSection.jsx";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [change, setchange] = useState(false);
  const handleclicked = () => {
    window.document.body.style.overflow = !change ? "hidden" : "auto";
    setchange(!change);
  };
  return (
    <>
      {change && <ModalSection />}    
        <NavBar />
        <Unav />
        <Hero onGetClick={handleclicked} />
        <Footer />   
    </>
  );
}
