import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  restartBtnWrapper: {
    border: `1px solid ${theme.color.lightRed2}`,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 24px",
    gap: 8,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 16,
    textAlign: "center",
    color:theme.color.lightBlack,
    cursor: "pointer",
    background: theme.color.white,
    "&:hover": {
      border: `1px solid ${theme.color.lightPink}`,
      cursor: "pointer",
    },
  },
}));
