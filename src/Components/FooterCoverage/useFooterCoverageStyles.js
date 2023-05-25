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
    fontSize: 40,
    margin: 0,
    textAlign: "center",
    color: "#FFFFFF",
  },
  FooterCoverageMainContanierbody: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 18,
    textAlign: "center",
    color: "#FFFFFF",
  },
}));
