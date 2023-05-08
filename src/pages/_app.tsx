import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import "../Styles/index.css";
import type { AppProps } from "next/app";
import theme from '../../theme'
// import "../styles/sslc"

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