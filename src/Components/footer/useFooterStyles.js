import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  MainFooterWrapper: {
    height: 791,
    width: "100%",
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
    flexDirection:"column",
    alignItems:"center",
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
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 56,
    margin: "0px",
    paddingBottom: 22,
    color: theme.color.white,
  },
  MainFooterTextContanierPara: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 18,
    margin: "0px",
    color: theme.color.white,
  },
  FooterCoverageWrapper:{
    display:"flex",
    width:"100%",
    justifyContent:"center",
    paddingTop:"24px",
  },

}));
