import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  hheadWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  hheadHead: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  hheadHead_h: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 47,
    lineHeight: "88px",
    textAlign: "center",
    color: theme.color.lightBlack,
  },
  hheadPara: {
    display: "flex",
    justifyContent: "center",
    margin: 0,
  },
  hheadParaP: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize + 6,
    lineHeight: "32px",
    textAlign: "center",
    width: "91%",
    color: theme.color.lightGrey,
    paddingBottom: "48px",
  },
  hsearch: {
    padding: "20px",
    border: "24px solid black",
    borderRadius: "4px",
    display: "flex",
    justifyContent: " space-between",
    alignItems: "center",
  },
  hinput: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    width: "100%",
  },
  hinputPic: {
    height: "27px",
    padding: "11px",
  },
  hinputText: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize + 4,
    lineHeight: "27px",
    border: "none",
    outline: "none",
    width: "100%",
    "&::placeholder": {
      color: theme.color.placeholdergrey,
      fontFamily: theme.font.Aeonik,
      fontWeight: theme.Weight.light,
      fontSize: theme.size.defaultSize + 4,
      lineHeight: "27px",
    },
  },
  [`@media (max-width: ${theme.breakpoints.lg}px) and (min-width:${theme.breakpoints.md}px)`]:
    {
      hheadHead_h: {
        width: "85%",
        margin: "0 auto",
        fontSize: theme.size.defaultSize + 39,
      },
    },
  [`@media (max-width: ${theme.breakpoints.md}px )`]: {
    hheadHead_h: {
      width: "90%",
      margin: "0 auto",
      fontSize: theme.size.defaultSize + 18,
      lineHeight: "48px",
    },
    hheadParaP: {
      fontSize: theme.size.defaultSize + 2,
      lineHeight: "21px",
      width: "100%",
      color: theme.color.lightGrey,
      paddingBottom: "24px",
    },
    hsearch: {
      display: "flex",
      padding: 0,
      alignItems: "center",
      borderRadius: 4,
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: theme.color.black,
      alignItems: "flex-end",
      gap: 15,
    },
    hinput: {
      display: "flex",
      alignItems: "center",
      background: theme.color.white,
      gap: "5px",
      width: "100%",
      borderRadius: "4px",
      padding: "10px 0 16px 5px",
    },
    hinputText: {
      width: "90%",
      fontSize: theme.size.defaultSize,
      lineHeight: "21px",
      "&::placeholder": {
        fontWeight: theme.Weight.light,
        fontSize: theme.size.defaultSize,
        lineHeight: "21px",
      },
    },
  },
  hheadError: {
    padding: "20px",
    margin: "10px 0",
    background: "#F9A40A",
    fontFamily: theme.font.Aeonik,
  },
  hheadSuccess: {
    background: "#ACF0DF",
    padding: "20px",
    margin: "10px 0",
    fontFamily: theme.font.Aeonik,
  },
  [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
    hheadHead: {
      margin: 0,
      paddingTop: "24px",
      paddingBottom: "10px",
    },
    hheadHead_h: {
      width: "100%",
      margin: "0 auto",
      fontSize: theme.size.defaultSize + 12,
      lineHeight: "36px",
    },
  },
}));
