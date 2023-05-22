import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  domainBoxWrapperframe: {
    gap: 9,
    width: "93%",
    border: `1px dashed ${theme.color.placeholdergrey}`,
    height: 41,
    display: "flex",
    alignItems: "center",
    paddingLeft: 11,
    justifyContent: "center",
    paddingRight: 0,
    marginRight: 29,
  },
  domainBoxWrapper: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    color: theme.color.lightBlack,
  },
  domainBoxWrapperBox: {
    width: "100%",
    border: "0px",
    "&:focus": {
      outline: "none",
      fontFamily: "Aeonik",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 14,
      color: theme.color.lightGrey,
    },
    "&::placeholder": {
      fontFamily: "Aeonik",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 14,
      color: theme.color.placeholdergrey2,
    },
    domainBoxWrapperframePic: {
      width: 16,
      height: 12,
    },
  },

  domainBoxParagraph: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,

    color: theme.color.lightBlack,
  },
}));
