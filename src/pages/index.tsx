import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from '../Components/hero/Hero.jsx'
import Nav from "../Components/navbar/Navbar";
import Unav from "../Components/unav/Unav";
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
