import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  hlowerMainWrapper: {
    width:"70%",
    margin:"0px auto",
    },
  hlowerWrapper: {
    display: "flex",
    paddingTop:"29px",
  },
  lastBenefit: {
    border: "none",
  },
  [`@media (max-width: ${theme.breakpoints.lg}px) and (min-width:${theme.breakpoints.md}px)`]:
  {
    hlowerMainWrapper: {
      width:"92%",
      margin:"0 auto",    
    },

   },
   
}));
