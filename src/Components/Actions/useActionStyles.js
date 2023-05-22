import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  actionMainWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "96%",
  },
  actionTextParagraph: {
    margin: "0px",
    cursor: "pointer",
  },
  actiontextWrapper: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14,
    textDecorationLine: "underline",
    color: theme.color.lightGrey,
  },
  actionsBtnWrapper: {
    display: "flex",
    gap: "16px",
  },
}));
