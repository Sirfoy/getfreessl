import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  HVerifyMainWrapper: {
    margin: 52,
  },
  verifyHeader: {
    display: "flex",
    height: "48px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  verifyTitle: {
    fontFamily: theme.font.firstfont,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.sixthSize,
    lineHeight: 36,
    color: theme.color.lightBlack,
  },
  verifyButton: {
    padding: "12px 24px",
    gap: 8,
    width: 135,
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
    fontFamily: theme.font.secondfont,
    fontWeight: theme.Weight.bold,
    fontSize: " 16px",
    textAlign: "center",
    color: theme.color.lightBlack,
  },
  thankYouWrapper: {
    padding: 24,
    background: " rgba(255, 166, 181, 0.2)",
    borderRadius: 4,
    marginTop: 15,
    marginBottom: 10,
  },
  thankYouPara: {
    fontFamily: theme.font.firstfont,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.secondSize,
    display: "flex",
    alignItems: "center",
    color: theme.color.lightBlack,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
}));
