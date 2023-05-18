import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const stylesVerify = createUseStyles((theme) => ({
  verificationMainWrapper1: {
    height: "72px",
    background: theme.color.grey2,
    marginTop: "1px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "24px",
    paddingRight: "24px",
    cursor: "pointer",
  },

  verificationMainWrapper2: {
    display: "none",
    height: "72px",
    background: "#F2F2F2",
    marginTop: "1px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "24px",
    paddingRight: "24px",
    cursor: "pointer",
  },

  verifyMethod: {
    display: "flex",
    justifyContent: " flex-start",
    alignItems: "center",
    gap: "8px",
  },
  verifyGraph: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    color: theme.color.lightBlack,
  },
  verifyGraph_light: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    background: theme.color.placeholdergrey2,
  },
}));
