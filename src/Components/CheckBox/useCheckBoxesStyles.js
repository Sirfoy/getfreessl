import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  checkContanier: {
    display: "flex",
    alignItems: "center",
    height: "24px",
    gap: "10px",
    justifyContent: "flex-start",
    paddingBottom: 13,
  },
  tcheckText: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize + 2,
    lineHeight: "24px",
    display: "flex",
    alignItems: " center",
    color: theme.color.lightblack,
    alignItems: "center",
  },
}));
