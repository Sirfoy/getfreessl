import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  FooterMiddleMainWrapper: {
    borderTop: `1px solid ${theme.color.placeholdergrey}`,
    borderBottom: `1px solid ${theme.color.placeholdergrey}`,
    marginTop: "60px",
    marginBottom: "20px",
    height: 411,
    background: theme.color.lightBlack,
  },
  FooterMiddleContanier: {
    height: 291,
    backgroundColor: theme.color.white,
    margin: "60px 401px 60px 401px",
    display: "flex",
    position: "relative",
  },
  FooterMiddleicon1: {
    position: "absolute",
    left: "2%",
    right: "97%",
    top: "7%",
    bottom: "87%",
  },
  FooterMiddleicon2: {
    position: "absolute",
    left: "49%",
    right: "49%",
    top: "7%",
    bottom: "80%",
  },
  FooterMiddleicon3: {
    top: "86%",
    left: "51%",
    right: "41%",
    bottom: "5%",
    position: "absolute",
  },
  FooterMiddleleft: {
    margin: "48px 0px 48px 50px",
    width: "80%",
  },
  FooterMiddleTextWrapper: {
    width: 432,
    height: 123,
  },
  FooterMiddleTextPara: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize + 4,
    color: theme.color.lightGrey,
    margin: 0,
    lineHeight: "48px",
  },
  FooterMiddleTextHead: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 18,
    color: theme.color.lightBlack,
    margin: 0,
  },
  FooterMiddleButtonsContanier: {
    display: "flex",
    gap: "16px",
    paddingTop: "16px",
  },
  startBuilding: {
    fontFamily: theme.font.Inter,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 2,
    color: theme.color.white,
    backgroundColor: theme.color.lightBlack,
    padding: "16px 32px",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    border: 0,
    cursor: "pointer",
  },
  explore: {
    fontFamily: theme.font.Inter,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 2,
    color: theme.color.lightBlack,
    backgroundColor: theme.color.white,
    padding: "16px 32px",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    cursor: "pointer",
  },
}));
