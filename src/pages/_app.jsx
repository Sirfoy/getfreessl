import { useState } from "react";
import { ThemeProvider } from "react-jss";
import "../styles/index.css";
import theme from "../../theme";
import { AppContext } from "../contexts";

const App = ({ Component, pageProps }) => {
  const [appData, setAppData] = useState({
    domain: "",
    step: 1,
    loading: false,
    type: null,
    task_id: null,
    validation: null,
  });

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
