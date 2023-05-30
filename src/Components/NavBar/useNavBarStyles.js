import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  Navigation: {
    width: "100%",
    background: theme.color.white,
    boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.04)",
  },
  logoNav: {
    padding: "7px 0 7px 150px",
  },

  [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
    Navigation: {
      boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.04)",
    },
    logoNav: {
      padding: "32px 0 24px 60px",
    },
  },
}));
