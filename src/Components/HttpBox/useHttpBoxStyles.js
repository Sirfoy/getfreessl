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
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14.8387,
    color: "#000000",
  },
  HttpBoxLink1: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14,
    cursor: "pointer",
    textDecorationLine: "underline",
    color: theme.color.linkBlue,
  },
  HttpBoxLink2: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14,
    textDecorationLine: "underline",
    color: " #909199",
    border: `1px dashed ${theme.color.placeholdergrey}`,
    padding: "10px",
    cursor: "pointer",
  },
}));
