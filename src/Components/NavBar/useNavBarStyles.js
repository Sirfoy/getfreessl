import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  Navigation: {
    width: "100%",
    height: "74px",
    background: theme.color.white,
    boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.04)",
  },
  logoNav: {
    width: "217px",
    height: "60px",
    marginLeft: "150px",
    paddingTop: "6px",
  },
}));
