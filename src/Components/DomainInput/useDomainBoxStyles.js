import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  domainBoxWrapperframe: {
    gap: 9,
    width: "100%",
    border: `1px dashed ${theme.color.placeholdergrey}`,
    height: 41,
    display: "flex",
    alignItems: "center",
    paddingLeft:"11px",   
    justifyContent: "center", 
  },
  domainBoxWrapper: {
    width: "30%",
  },
  domainBoxWrapperBox: {
    width: "100%",
    border: 0,
    "&:focus": {
      outline: "none",
      fontFamily: theme.font.Aeonik,
      fontWeight: theme.Weight.light,
      fontSize: theme.size.defaultSize,
      color: theme.color.lightGrey,
    },
    "&::placeholder": {
      fontFamily: theme.font.Aeonik,
      fontWeight: theme.Weight.light,
      fontSize: theme.size.defaultSize,
      color: theme.color.placeholdergrey2,
    },
    domainBoxWrapperframePic: {
      width: 16,
      height: 12,
    },
  },
  domainBoxParagraph: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize,
    color: theme.color.lightBlack,
  }, 
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    domainBoxWrapper: {
      width: "100%",
    },
  },
}));
