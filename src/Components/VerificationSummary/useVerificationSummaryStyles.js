import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  verificationSummaryWrapper: {
    margin: "1px 0px",
    marginBottom: "1px",
    padding: "1px",
  },
  verificationSummary: {
    background: theme.color.white,
    border: `1px solid ${theme.color.placeholdergrey}`,
    borderRadius: 4,
    margin: "24px 58px 24px 64px",
    display: "flex",
    flexDirection: "column",
    padding: "32px",
  },
  VerificationSummaryBoxWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  VerificationSummaryMainTextWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "12%",
    marginTop: "12px",
    justifyContent: "space-between",
  },
  VerificationSummaryParagraph: {
    margin: 0,
  },
  VerificationSummaryTextWrapper: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize - 3,    
    textDecorationLine: "underline",
    color: theme.color.lightGrey,
  },
}));