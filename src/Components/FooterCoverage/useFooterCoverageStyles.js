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
}));
