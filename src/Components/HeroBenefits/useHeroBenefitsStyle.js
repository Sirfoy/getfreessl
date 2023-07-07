import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  benefitsMainWrapper: {
    width: "33%",
    borderRight: ` 0.5px solid ${theme.color.placeholdergrey}`,
    margin: " 9px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: " flex-start",
    padding:"10px 0px",
   
  },
  benefitsMainWrapper2: {
    width: "33%",
    margin: " 9px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: " flex-start",
    padding:"10px 0px",    
  },
  benefitImage: {
    width: "24px",
    height: "24px",
  },
  benefitsTextWrapper: {
    padding: "0px",
    gap: "8px",
    width: "90%",
  },
  benefitsHeader: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize + 2,
    lineHeight: "8px",
    color: theme.color.lightBlack,
    height: "7px",
  },
  benefitsPara: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize,
    lineHeight: "21px",
    color: theme.color.lightGrey,
  },
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    benefitsMainWrapper: {
      width: "94%",
      borderRight: 0,
      borderBottom: ` 0.5px solid ${theme.color.placeholdergrey}`,
      margin: "0 auto",
      paddingLeft:"18px",
    },
    benefitsMainWrapper2: {
      width: "94%",
      margin: " 9px",
      display: "flex",
      margin: "0 auto",
      paddingLeft:"18px",
    },
  },
}));
