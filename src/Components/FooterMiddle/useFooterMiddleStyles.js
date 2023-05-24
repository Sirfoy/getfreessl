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
    left: "1.65%",
    right: "96.65%",
    top: "6.87%",
    bottom: "86.6%",
  },
  FooterMiddleicon2: {
    position: "absolute",
    left: "48.53%",
    right: "49.12%",
    top: "6.87%",
    bottom: "80.27%",
  },
  FooterMiddleicon3: {
    top: "85.6%",
    left: "51.18%",
    right: "41.23%",
    bottom: "4.81%",
    position: "absolute",
  },

  FooterMiddleleft: {
    margin: "48px 0px 48px 50px",
    width: "80%",
  },
  FooterMiddleright: {},
  FooterMiddleTextWrapper: {
    width: 432,
    height: 123,
  },
  FooterMiddleTextPara: {
    fontFamily: theme.font.firstfont,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.fifthSize,
    color: theme.color.lightGrey,
    margin: 0,
  },
  FooterMiddleTextHead: {
    fontFamily: theme.font.firstfont,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.ninethSize,
    color: theme.color.lightBlack,
    margin: 0,
  },
  FooterMiddleButtonsContanier: {
    display: "flex",
    gap: "16px",
  },
  startBuilding: {
    fontFamily: theme.font.secondfont,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.thirdSize,
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
    fontFamily: theme.font.secondfont,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.thirdSize,
    color: theme.color.lightBlack,
    backgroundColor: theme.color.white,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    cursor: "pointer",
  },
}));
