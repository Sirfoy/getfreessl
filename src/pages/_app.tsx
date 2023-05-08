import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import "../styles/index.css";
import type { AppProps } from "next/app";
import theme from '../../theme'


const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
  
          <Component {...pageProps} />
       
    </ThemeProvider>
  );
};
export default (App)