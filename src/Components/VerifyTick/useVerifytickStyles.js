import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  checkBoxWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },

  checkInput: {
    cursor: "pointer",
    fontSize: 16,
    userSelect: "none",
    background: "black",
  },
  checkBoxLabel: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    height: "31px",
    display: 'flex',
    alignItems: 'center',
    gap: 5,

    color: theme.color.lightBlack,
    "& input": {
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      backgroundColor: "white",
      width: 24,
      height: "24px ",
      borderRadius: "50%",
      border: `1px solid ${theme.color.placeholdergrey}`,
    },
    "& input:checked": {
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      width: 24,
      height: "24px ",
      borderRadius: "50%",
      border: `1px solid ${theme.color.lightBlack}`,
    },
  },
  
}));
