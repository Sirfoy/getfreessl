import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const stylesVerify = createUseStyles((theme) => ({
  verificationMainWrapper1: {
    height: "72px",
    background: theme.color.grey2,
    marginTop: "1px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 24px",
    cursor: "pointer",
  },

  verificationMainWrapper2: {
    display: "none",
    height: "72px",
    backgroundColor: theme.color.grey2,
    marginTop: "1px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 24px",
    cursor: "pointer",
  },

  verifyMethod: {
    display: "flex",
    justifyContent: " flex-start",
    alignItems: "center",
    gap: "8px",
  },
  verifyGraph: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize + 2,
    lineHeight: "24px",
    color: theme.color.lightBlack,
  },
  verifyGraph_light: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize + 2,
    lineHeight: "24px",
    background: theme.color.placeholdergrey2,
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    verificationMainWrapper1: {
      padding: "0 10px",
      cursor: "pointer",
    },
    verificationMainWrapper2: {
   
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 10px",
      cursor: "pointer",
    },
  },
}));
