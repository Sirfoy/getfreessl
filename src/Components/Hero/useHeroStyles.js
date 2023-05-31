import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  HeroWrapper: {
    // margin: "80px 290px 0px 290px",
    maxWidth: 1728,
    width: "67%",
    margin: "0 auto",
  },
  hupperWrapper: {},
  [`@media (max-width: ${theme.breakpoints.lg}px) and (min-width:${theme.breakpoints.md}px)`]:
    {
      HeroWrapper: {
        width:"85%",
      margin:"0 auto",
    
      },
    },
}));
