import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  HVerifyMainWrapper: {
    width: "100%",
    margin: "0 auto",
    paddingTop: 50,
  },
  verifyHeader: {
    display: "flex",
    height: "48px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  verifyTitle: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 14,
    color: theme.color.lightBlack,
  },
  verifyButton: {
    padding: "12px 24px",
    height: " 48px",
    border: "none",
    background: theme.color.buttonPink,
    borderRadius: 4,
    "&:hover": {
      opacity: 0.8,
      border: "none",
      cursor: "pointer",
    },
  },
  verifyButonText: {
    fontFamily: theme.font.Inter,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 2,
    textAlign: "center",
    color: theme.color.lightBlack,
  },
  thankYouWrapper: {
    padding: 24,
    background: "rgba(255, 166, 181, 0.2)",
    borderRadius: 4,
    margin:"15px 0 10px 0",
  },
  thankYouPara: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize,
    display: "flex",
    alignItems: "center",
    color: theme.color.lightBlack,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    thankYouPara: {
         fontSize: theme.size.defaultSize - 2,
     
    },
    thankYouWrapper: {
      padding: 16,
      background: "rgba(255, 166, 181, 0.2)",
      borderRadius: 4,
      margin:"15px 0 10px 0",
    },
  },
}));
