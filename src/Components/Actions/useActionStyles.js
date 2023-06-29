import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  actionMainWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  actiontextWrapper: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize,
    textDecorationLine: "underline",
    color: theme.color.lightGrey,
    margin: 0,
    cursor: "pointer",
  },
  actionsBtnWrapper: {
    display: "flex",
    gap: 16,
  },
  [`@media (max-width: ${theme.breakpoints.lg}px) `]: {
    actiontextWrapper: {
      fontSize: theme.size.defaultSize - 2,
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    actionMainWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "24px",
      width: "100%",
    },
    actionsBtnWrapper: {
      display: "flex",
      gap: 16,
      width: "100%",
      justifyContent: "flex-end",
    },
  },
}));
