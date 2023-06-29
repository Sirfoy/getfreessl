import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  HeroWrapper: {
    maxWidth: 1728,
    width: "67%",
    margin: "0 auto",
  },
  [`@media (max-width: ${theme.breakpoints.lg}px) and (min-width:${theme.breakpoints.md}px)`]:
    {
      HeroWrapper: {
        width: "85%",
        margin: "0 auto",
      },
    },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    HeroWrapper: {
      width: "90%",
      margin: "0 auto",
    },
  },
}));
