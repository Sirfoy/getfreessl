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
      fontFamily: theme.font.Aeonik,
      fontWeight: theme.Weight.light,
      fontSize: theme.size.defaultSize,
      lineHeight: 21,
      color: theme.color.lightGrey,
    },
    "&::placeholder": {
      fontFamily: theme.font.Aeonik,
      fontWeight: theme.Weight.light,
      fontSize: theme.size.defaultSize,
      color: theme.color.placeholdergrey2,
    },
  },
  recordBoxHead: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize,
    paddingBottom: "4px",
    color: theme.color.lightBlack,
  },
}));
