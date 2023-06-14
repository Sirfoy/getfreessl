import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  verificationSummaryWrapper: {
    margin: "1px 0px",
    marginBottom: "1px",
    padding: "1px",
    background:theme.color.grey,
  },
  verificationSummary: {
    background: theme.color.white,
    border: `1px solid ${theme.color.placeholdergrey}`,
    borderRadius: 4,
    width:"80%",
    margin:"24px auto",
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
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize - 3,    
    textDecorationLine: "underline",
    color: theme.color.lightGrey,
    margin: 0,
    width:"50%",
  },

  [`@media (max-width: ${theme.breakpoints.lg}px) `]: {
    VerificationSummaryParagraph: {
      fontFamily: theme.font.Aeonik,
      fontWeight: theme.Weight.light,
      fontSize: theme.size.defaultSize - 3,    
      textDecorationLine: "underline",
      color: theme.color.lightGrey,
    },
   
  },

  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    VerificationSummaryBoxWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
   },

  [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
    VerificationSummaryMainTextWrapper: {
      flexDirection:"column",  
      gap: "24px  ",
    
    },
    VerificationSummaryParagraph: {
    
      width:"100%",
    },
  
  }
}));
