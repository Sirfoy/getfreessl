import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  restartBtnWrapper: {
    border: `1px solid ${theme.color.lightRed2}`,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 24px",
    gap: 8,
    fontFamily: theme.font.secondfont,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.thirdSize,
    textAlign: "center",
    color: theme.color.lightBlack,
    cursor: "pointer",
    background: theme.color.white,
    "&:hover": {
      border: `1px solid ${theme.color.lightPink}`,
      cursor: "pointer",
    },
  },
}));
