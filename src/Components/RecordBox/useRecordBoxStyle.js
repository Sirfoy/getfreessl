import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  recordBoxWrapper: {
    marginBottom: "16px",
  },
  recordBoxInputWrapper: {
    height: "41px",
    border: `1px dashed ${theme.color.placeholdergrey}`,
    padding: 10,
    gap: 10,
    display: "flex",
  },
  inputRecordBox: {
    width: "100%",
    border: 0,
    "&:focus": {
      outline: "none",
      fontFamily: theme.font.firstfont,
      fontWeight: theme.Weight.light,
      fontSize: theme.size.secondSize,
      lineHeight: 21,
      color: theme.color.lightGrey,
    },
    "&::placeholder": {
      fontFamily: theme.font.firstfont,
      fontWeight: theme.Weight.light,
      fontSize: theme.size.secondSize,
      color: theme.color.placeholdergrey2,
    },
  },
  recordBoxHead: {
    fontFamily: theme.font.firstfont,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.secondSize,
    paddingBottom: "4px",
    color: theme.color.lightBlack,
  },
}));
