import { Inter } from "next/font/google";
import { Hero } from "../Components/Hero/Hero.jsx";
import { NavBar } from "../Components/NavBar/NavBar.jsx";
import { Unav } from "../Components/Unav/Unav.jsx";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <NavBar />
      <Unav />
      <Hero />
    </>
  );
}
