import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  checkContanier: {
    display: "flex",
    alignItems: "center",
    height: "24px",
    gap: "10px",
    justifyContent: "flex-start",
  },
  tcheckText: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    display: "flex",
    alignItems: " center",
    color: theme.color.lightblack,
    alignItems: "center",
  },
}));
