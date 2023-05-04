
// import "../Styles/Unav.css";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import "../Styles/Box.css";
// import "../Styles/Sslpro.css";
import "../styles/Sslprotection.css"
import "../Styles/index.css";
import type { AppProps } from "next/app";

const theme = {
  black: "#000000",
  lightBlack: "#0F111A",
  primary: "#0c0c0c",
  secondary: "#898880",
  secondaryLight: "#C5C3BC",
  accent: "#80722A",
  accentMid: "#E9E7DE",
  white: "#FFFFFF",
  lightPink: " #FFA6B5",
  lightGrey: "#5C5D66",
  lightRed: " #ED3957 ",
  grey: "#FAFAFA",
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Layout>
        <Header />
        <Content> */}
          <Component {...pageProps} />
        {/* </Content>
        <Footer />
      </Layout> */}
    </ThemeProvider>
  );
};
export default (App)