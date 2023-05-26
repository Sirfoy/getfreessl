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
    fontFamily: theme.font.Inter,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 2,
    cursor: "pointer",
    textAlign: "center",
    color: theme.color.white,
    "&:hover": {
      background: theme.color.LightRedHover,
      border: "none",
      cursor: "pointer",
    },
  },
}));
