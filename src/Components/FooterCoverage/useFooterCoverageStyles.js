import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  FooterCoverageMainContainer: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: " center",
    borderRight: "1px solid rgba(92, 93, 102, 0.5)",  
    paddingTop: "24px",
  },
  FooterCoverageMainContainer2: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: " center",
    paddingTop: "24px",
  },
  FooterCoverageMainContainerWrapper: {
    width: "100%",
  },
  FooterCoverageMainContainerHead: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 26,
    margin: 0,
    textAlign: "center",
    color: theme.color.white,
  },
  FooterCoverageMainContainerbody: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize + 4,
    textAlign: "center",
    color: theme.color.white,
  },
  [`@media (max-width: ${theme.breakpoints.lg}px) `]: {
    FooterCoverageMainContainer: {
      width: "37%",
    },
    FooterCoverageMainContainer2: {
      width: "37%",
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    FooterCoverageMainContainerHead: {
      fontSize: theme.size.defaultSize + 18,
    },
    FooterCoverageMainContainerbody: {
      fontSize: theme.size.defaultSize,
    },
  },
  [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
    FooterCoverageMainContainerbody: {
      fontSize: theme.size.defaultSize - 2,
    },
  },
}));
