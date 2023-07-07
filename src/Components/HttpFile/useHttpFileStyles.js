import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  httpMainWrapper: {
    padding: 32,
    margin: "0 6px",
    boxSizing: "border-box",
    gap: 10,
    color: theme.color.white,
    border: `1px solid ${theme.color.placeholdergrey}`,
    borderRadius: 4,
    marginBottom: "10px",
  },
  httpTextWrapper: {
    width: "100%",
    margin: 0,
  },
  httpCountdown: {
    padding: "8px",
    borderRadius: "1px",
    background: "rgba(255, 166, 181, 0.2)",
    border: `1px solid rgba(255, 166, 181, 0.3)`,
    fontFamily: theme.font.Aeonik,
    height: "fit-content",
    display: "flex",
    gap: "3px",
    alignItems: "flex-end",
    "& .countdown": {
      fontSize: theme.size.defaultSize - 2.5,
      margin: 0,
      padding: 0,
      color: theme.color.lightRed,
      fontWeight: theme.Weight.bold,
    },
  },
  httpTextParent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  httpTextP: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize,
    color: theme.color.lightGrey,
  },
  [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
    httpMainWrapper: {
      padding: "32px 10px",
      margin: "10px 0px",
    },
  },
}));
