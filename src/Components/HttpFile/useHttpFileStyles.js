import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  httpMainWrapper:{
    padding: 32,
    gap: 10,
    background: "#FFFFFF",
    border: `1px solid ${theme.color.placeholdergrey}`,
    borderRadius: 4,
  },
  httpTextWrapper: {
    height: "100%",
    margin: "0px",
  },
  httpTextP: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    // lineHeight: 21,
    color: theme.color.lightGrey,
  },
}));
