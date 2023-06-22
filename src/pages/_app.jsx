import { useState } from "react";
import { ThemeProvider } from "react-jss";
import "../styles/index.css";
import theme from "../../theme";
import { AppContext, initialAppData } from "../contexts";

const App = ({ Component, pageProps }) => {
  const [appData, setAppData] = useState(initialAppData);

  const updateAppData = (newAppData) => {
    setAppData({ ...appData, ...newAppData });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ ...appData, updateAppData }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </ThemeProvider>
  );
};
export default App;
