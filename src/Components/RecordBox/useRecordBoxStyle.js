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
    border: "0px",
    "&:focus": {
      outline: "none",
      fontFamily: "Aeonik",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 21,
      color: theme.color.lightGrey,
    },
    "&::placeholder": {
      fontFamily: "Aeonik",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 14,
      color: theme.color.placeholdergrey2,
    },
  },
  recordBoxHead: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    paddingBottom: "4px",
    color: theme.color.lightBlack,
  },
}));
