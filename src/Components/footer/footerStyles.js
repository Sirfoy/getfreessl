import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  mainFooterWrapper: {
    height: 791,
    width: "100%",
    background: theme.color.lightBlack,
  },
  mainFooterHeading: {
    height: 260,
    background: "red",
    margin: "60px 320px 60px 320px",
  },
}));
