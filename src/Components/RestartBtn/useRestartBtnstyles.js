import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  restartBtnWrapper: {
    border: `1px solid ${theme.color.lightRed2}`,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 24px",
    gap: 8,
    fontFamily: theme.font.Inter,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 2,
    textAlign: "center",
    color: theme.color.lightBlack,
    cursor: "pointer",
    background: theme.color.white,
    "&:hover": {
      border: `1px solid ${theme.color.lightPink}`,
      cursor: "pointer",
    },
    [`@media (max-width: ${theme.breakpoints.md}px) `]: {
      fontSize: theme.size.defaultSize ,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
      fontSize: theme.size.defaultSize-3 ,
    },
  },
}));
