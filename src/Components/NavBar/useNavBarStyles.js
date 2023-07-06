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
      padding: "20px 0 20px 20px",
      width: "20%",
    },
  },
  [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
    Navigation: {
      boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.04)",
    },
    logoNav: {
      width: "35%",
      padding: "16px 0 16px 16px",
    },
  },
}));
