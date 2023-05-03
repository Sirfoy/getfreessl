
import "../Styles/Unav.css";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import "../Styles/Box.css";
// import "../Styles/Sslpro.css";
import "../styles/Sslprotection.css"
import "../Styles/index.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
