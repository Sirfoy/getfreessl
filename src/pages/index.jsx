import { useContext, useState } from "react";
import { Hero } from "../Components/Hero/Hero.jsx";
import { NavBar } from "../Components/NavBar/NavBar.jsx";
import { Footer } from "../Components/Footer/Footer.jsx";
import { Unav } from "../Components/Unav/Unav.jsx";
import { ModalSection } from "../Components/Modal/ModalSection.jsx";
import { AppContext } from "@/contexts";
import { PollValidation } from "../Components/PollValidation/PollValidation.jsx";
import { Meta } from "../Components/Meta/Meta.jsx";
export default function Home() {
  const { validation } = useContext(AppContext);
  const [change, setchange] = useState(false);
  const handleclicked = () => {
    window.document.body.style.overflow = !change ? "hidden" : "auto";
    setchange(!change);
  };

  return (
    <>
      <Meta />
      {change && <ModalSection />}
      <NavBar />
      <Unav />
      <Hero onGetClick={handleclicked} />
      <Footer />
      {validation?.is_polling && <PollValidation />}
      
    </>
  );
}
