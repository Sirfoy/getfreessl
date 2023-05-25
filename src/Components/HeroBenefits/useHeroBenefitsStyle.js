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
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize + 2,
    lineHeight: "8px",
    color: theme.color.lightBlack,
    height: "7px",
  },
  benefitsPara: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize,
    lineHeight: "21px",
    color: theme.color.light,
  },
}));
