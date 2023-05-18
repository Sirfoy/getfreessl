import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  proceedBtnWrapper: {
    background: theme.color.lightRed,
    borderRadius: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 24px",
    gap: 8,
    border: "none",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 16,
    cursor: "pointer",
    textAlign: "center",
    color: theme.color.white,
  },
}));
