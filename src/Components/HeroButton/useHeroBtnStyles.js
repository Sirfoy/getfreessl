import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  HeroBtn: {
    fontFamily: theme.font.Inter,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 4,
    padding: "12px 24px",
    gap: "8px",
    background: theme.color.lightRed,
    borderRadius: "4px",
    border: "none",
    lineHeight: "24px",
    textAlign: "center",
    color: theme.color.white,
    cursor: "Pointer",
    "&:hover": {
      background: theme.color.LightRedHover,
      border: "none",
      cursor: "pointer",
    },
  },
}));
