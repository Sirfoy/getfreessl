import { Inter } from "next/font/google";
import Hero from "../Components/hero/Hero.jsx";
import Nav from "../Components/navbar/Navbar.jsx";
import Unav from "../Components/unav/Unav.jsx";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Nav />
      <Unav />
      <Hero />
    </>
  );
}
