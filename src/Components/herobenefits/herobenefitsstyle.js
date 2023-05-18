import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  benefitsMainWrapper: {
    width: "33%",
    borderRight: ` 0.5px solid ${theme.color.placeholdergrey}`,
    margin: " 9px",
    display: "flex",
  },
  benefitsMainWrapper2: {
    width: "33%",
    margin: " 9px",
    display: "flex",
  },
  benefitWrapped: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: " flex-start",
    padding: "10px",
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
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "8px",
    color: theme.color.lightBlack,
    height: "7px",

    
  },
  benefitsPara: {
    fontFamily: "Aeonik",
    fontStyle: " normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "21px",
    color: theme.color.light,
  },
}));
