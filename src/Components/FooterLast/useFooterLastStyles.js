import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  FooterLastMainWrapper: {
    width: "85%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "20px",
  },
  FooterLastLeftSection: {
    display: "flex",
    alignItems: "center",
    gap: "2px",
  },
  FooterLastLeftcopyright: {
    fontFamily: theme.font.Inter,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize,
    color: theme.color.grey,
  },
  FooterLastRightSection: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
  },
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    FooterLastMainWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
  },
}));
