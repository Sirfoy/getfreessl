import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  MainFooterWrapper: {
    background: theme.color.lightBlack,
    paddingTop: 60,
  },
  MainFooterUpperContanier: {
    width: "85%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  MainFooterTextContanier: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  MainFooterTextContanierHead: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 42,
    margin: 0,
    paddingBottom: 22,
    color: theme.color.white,
  },
  MainFooterTextContanierPara: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize + 4,
    margin: 0,
    color: theme.color.white,
    lineHeight: "27px",
    width: "60%",
  },
  FooterCoverageWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    paddingTop: "24px",
  },
  [`@media (max-width: ${theme.breakpoints.lg}px) `]: {
    MainFooterTextContanierPara: {
      width: "80%",
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    MainFooterTextContanierPara: {
      fontSize: theme.size.defaultSize,
    },
    MainFooterTextContanierHead: {
      fontSize: theme.size.defaultSize + 26,
    },
  },
  [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
    MainFooterTextContanierPara: {
      fontSize: theme.size.defaultSize,
      lineHeight: "21px",
    },
    MainFooterTextContanierHead: {
      fontSize: theme.size.defaultSize + 18,
    },
    MainFooterUpperContanier: {
      width: "100%",
    },
  },
}));
