import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "../Components/navbar/Navbar";
import Unav from "../Components/unav/Unav";
import Sslprotection from "../Components/sslprotection/Sslprotection";
// import Sslc from "../Components/sslc/Sslc";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav />
      <Unav />
      <Sslprotection />
      {/* <Sslc/> */}
    </>
  );
}
