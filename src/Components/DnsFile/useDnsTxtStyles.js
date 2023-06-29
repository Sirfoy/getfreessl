import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  dnsMainWrapper: {
    padding: 32,
    background: theme.color.white,
    border: `1px solid ${theme.color.placeholdergrey}`,
    borderRadius: 4,
    margin: "0 6px",
  },
  dnsCountdown: {
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
  dnsTextParent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dnsTextP: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize,
    color: theme.color.lightGrey,
  },
  [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
    dnsMainWrapper: {
      padding: "32px 10px",
      margin: 0,
    },
  },
}));
