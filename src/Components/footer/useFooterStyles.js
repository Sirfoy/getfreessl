import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  MainFooterWrapper: {
    background: theme.color.lightBlack,
    paddingTop: 60,
  },
  MainFooterHeading: {
    height: 260,
    margin: "60px 320px 60px 320px",
  },
  MainFooterUpperContanier: {
    height: 260,
    marginLeft: 320,
    marginRight: 320,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  MainFooterTextContanier: {
    width: 608,
    height: 145,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  MainFooterTextContanierHead: {
    fontFamily: theme.font.firstfont,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.eighthSize,
    margin: 0,
    paddingBottom: 22,
    color: theme.color.white,
  },
  MainFooterTextContanierPara: {
    fontFamily: theme.font.firstfont,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.fifthSize,
    margin: 0,
    color: theme.color.white,
    lineHeight: "27px",
  },
  FooterCoverageWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    paddingTop: "24px",
  },
}));
