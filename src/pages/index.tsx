import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "../Components/Navbar";
import Unav from "../Components/Unav";
import Sslprotection from '../Components/Sslprotection'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav />
      <Unav />
      <Sslprotection/>
    </>
  );
}
