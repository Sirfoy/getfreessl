import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  actionMainWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "96%",
  },
  actionTextParagraph: {
    margin: 0,
    cursor: "pointer",
  },
  actiontextWrapper: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize,
    textDecorationLine: "underline",
    color: theme.color.lightGrey,
  },
  actionsBtnWrapper: {
    display: "flex",
    gap: 16,
  },
}));
