import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  FooterCoverageMainContainer: {
    height: 91,
    width: "20%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: " center",
    borderRight: `1px solid ${theme.color.white}`,
    paddingTop: "24px",
  },
  FooterCoverageMainContainer2: {
    height: 91,
    width: "20%",
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
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: theme.size.defaultSize + 26,
    margin: 0,
    textAlign: "center",
    color: theme.color.white,
  },
  FooterCoverageMainContainerbody: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: theme.size.defaultSize + 4,
    textAlign: "center",
    color: theme.color.white,
  },
}));
