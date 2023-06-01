import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  hlowerMainWrapper: {
    width: "70%",
    margin: "0px auto",
  },
  hlowerWrapper: {
    display: "flex",
    paddingTop: "29px",
  },
  lastBenefit: {
    border: "none",
  },
  [`@media (max-width: ${theme.breakpoints.lg}px) and (min-width:${theme.breakpoints.md}px)`]:
    {
      hlowerMainWrapper: {
        width: "95%",
        margin: "0 auto",
      },
    },
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    hlowerMainWrapper: {
      width: "100%",
      margin: "0px auto",
    },
    hlowerWrapper: {
      display: "flex",
      flexDirection:"column",
      width:"100%",
      paddingTop: "29px",
    },
  },
}));
