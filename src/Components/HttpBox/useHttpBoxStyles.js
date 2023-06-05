import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  HttpBoxMainWrapper1: {
    marginBottom: "16px",
  },
  HttpBoxMethod: {
    width: "97%",
    background: theme.color.grey2,
    border: `1px solid ${theme.color.grey2}`,
    display: "flex",
    alignItems: "center",
    gap: "8px",
    paddingLeft: "16px",
  },
  HttpBoxMethod2: {
    width: "97%",
    background: theme.color.grey2,
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
    width: "100%",
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize,
    cursor: "pointer",
    textDecorationLine: "underline",
    color: theme.color.linkBlue,
    wordWrap: "break-word",
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
  HttpBoxTextWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "0px 14px 0px 16px",
  },
  HttpBoxTextWrapper2: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "0px 14px 0px 16px",
  },
  [`@media (max-width: ${theme.breakpoints.lg}px) `]: {
    HttpBoxTextWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "8px",
      padding: 0,
    },
    HttpBoxTextWrapper2: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "0px 14px 0px 6px",
    },
    HttpBoxMethod: {
      width: "97%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "8px",
      padding: "10px 0px 10px 16px",
    },
    HttpBoxMethod2: {
      width: "97%",
      gap: "8px",
      padding: "10px 0px 10px 16px",
    },
    HttpBoxGraph: {
      margin: 0,
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    HttpBoxTextWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 8,
      padding: "0px 10px 0px 0px",
    },
    HttpBoxMethod: {
      paddingTop: "10px",
      width: "90%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 8,
      padding: "0px 10px 10px 10px",
    },
  },
  [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
    HttpBoxMethod: {
      width: "97%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "8px",
      padding: "10px 0px 10px 16px",
    },
    HttpBoxMethod2: {
      width: "100%",
      gap: "8px",
      padding: "10px 0px 10px 0px",
    },
    HttpBoxGraph: {
      margin: 0,
    },
  },
}));
