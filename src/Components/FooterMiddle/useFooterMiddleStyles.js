import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  FooterMiddleMainWrapper: {
    borderTop: `1px solid ${theme.color.placeholdergrey}`,
    borderBottom: `1px solid ${theme.color.placeholdergrey}`,
    marginTop: "60px",
    marginBottom: "20px",
    background: theme.color.lightBlack,
  },
  FooterMiddleContanier: {
    backgroundColor: theme.color.white,
    width: "70%",
    margin: "60px auto",
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
    width: "60%",
    margin: "48px auto",
    paddingLeft: 24,
  },
  FooterMiddleright: {
    width: "40%",
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
    width: "80%",
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
  [`@media (max-width: ${theme.breakpoints.xl}px) `]: {
    startBuilding: {
      fontFamily: theme.font.Inter,
      fontWeight: theme.Weight.bold,
      fontSize: theme.size.defaultSize - 2,
    },
    explore: {
      fontSize: theme.size.defaultSize - 2,
    },
  },
  [`@media (max-width: ${theme.breakpoints.lg}px) `]: {
    FooterMiddleContanier: {
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
    },
    FooterMiddleright: {
      width: "60%",
    },
    FooterMiddleleft: {
      width: "100%",
      paddingLeft: 24,
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      margin: 0,
      paddingBottom: "67px",
    },
    FooterMiddleTextHead: {
      width: "90%",
    },
    FooterMiddleTextWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    FooterMiddleicon1: {
      top: "18%",
      left: "73%",
      right: "97%",
      bottom: "87%",
      position: "absolute",
    },
    FooterMiddleicon2: {
      top: "33%",
      left: "16%",
      right: "49%",
      bottom: "80%",
      position: "absolute",
    },
    FooterMiddleicon3: {
      top: "33%",
      left: "81%",
      right: "41%",
      bottom: "5%",
      position: "absolute",
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    FooterMiddleContanier: {
      width: "95%",
    },
    FooterMiddleleft: {
      paddingLeft: 24,
    },
  },
  [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
    FooterMiddleleft: {
      paddingLeft: 0,
    },
  },
}));
