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
    fontFamily: theme.font.firstfont,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.secondSize,
    color: theme.color.lightBlack,
  },
  domainBoxWrapperBox: {
    width: "100%",
    border: 0,
    "&:focus": {
      outline: "none",
      fontFamily: theme.font.firstfont,
      fontWeight: theme.Weight.light,
      fontSize: theme.size.secondSize,
      color: theme.color.lightGrey,
    },
    "&::placeholder": {
      fontFamily: theme.font.firstfont,
      fontWeight: theme.Weight.light,
      fontSize: theme.size.secondSize,
      color: theme.color.placeholdergrey2,
    },
    domainBoxWrapperframePic: {
      width: 16,
      height: 12,
    },
  },
  domainBoxParagraph: {
    fontFamily: theme.font.firstfont,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.secondSize,
    color: theme.color.lightBlack,
  },
}));
