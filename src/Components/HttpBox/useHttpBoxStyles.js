import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  HttpBoxMainWrapper1: {
    marginBottom: "16px",
  },
  HttpBoxMethod: {
    width: "96%",
    height: 61,
    background: theme.color.grey,
    border: `1px solid ${theme.color.grey2}`,
    display: "flex",
    alignItems: "center",
    gap: "8px",
    paddingLeft: "16px",
  },
  HttpBoxPic: {
    width: 23.8,
    height: 23,
  },
  HttpBoxGraph: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize,
    color: theme.color.black,
  },
  HttpBoxLink1: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize,
    cursor: "pointer",
    textDecorationLine: "underline",
    color: theme.color.linkBlue,
  },
  HttpBoxLink2: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize,
    textDecorationLine: "underline",
    color: theme.color.placeholdergrey2,
    border: `1px dashed ${theme.color.placeholdergrey}`,
    padding: "10px",
    cursor: "pointer",
  },
}));
