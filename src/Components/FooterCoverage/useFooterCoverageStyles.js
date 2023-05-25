import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  FooterCoverageMainContanier: {
    height: 91,
    // background: "red",
    width: "20%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: " center",
    borderRight: "1px solid white",
    paddingTop: "24px",
  },
  FooterCoverageMainContanier2: {
    height: 91,
    // background: "red",
    width: "20%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: " center",
    paddingTop: "24px",
  },
  FooterCoverageMainContanierWrapper: {
    width: "100%",
  },
  FooterCoverageMainContanierHead: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: theme.size.defaultSize + 26,
    margin: 0,
    textAlign: "center",
    color: theme.color.white,
  },
  FooterCoverageMainContanierbody: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: theme.size.defaultSize + 4,
    textAlign: "center",
    color: theme.color.white,
  },
}));
