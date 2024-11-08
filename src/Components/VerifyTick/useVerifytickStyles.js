import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  checkBoxWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "16px 24px",
    background: "rgb(242, 242, 242, 0.6)",
    marginTop: "1px",
  },
  checkInput: {
    cursor: "pointer",
    fontSize: theme.size.defaultSize + 2,
    userSelect: "none",
    background: "black",
  },
  checkBoxLabel: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize + 2,
    height: "31px",
    display: "flex",
    alignItems: "center",
    gap: 5,
    marginBottom: 15,
    "& input": {
      accentColor: "black",
      width: 24,
      height: "24px ",
      borderRadius: "50%",
      border: `1px solid ${theme.color.placeholdergrey}`,
    },
    "& input:checked": {
      width: 24,
      height: "24px",
      borderRadius: "50%",
      border: `1px solid ${theme.color.lightBlack}`,
    },
  },
  requestButtonParent: {
    width: "fit-content",
    margin:"8px 0px 16px 7px"
  },
}));
