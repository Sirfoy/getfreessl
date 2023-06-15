import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  ModalMiddleContanier: {
    backgroundColor: theme.color.buttonPink,
    border: `0.9px solid ${theme.color.lightRed}`,
    margin: "24px auto",
    display: "flex",
    position: "relative",
  },
  ModalMiddleicon1: {
    position: "absolute",
    left: "2%",
    right: "97%",
    top: "7%",
    bottom: "87%",
  },
  ModalMiddleicon2: {
    position: "absolute",
    left: "49%",
    right: "49%",
    top: "7%",
    bottom: "80%",
  },
  ModalMiddleicon3: {
    top: "86%",
    left: "51%",
    right: "41%",
    bottom: "5%",
    position: "absolute",
  },
  ModalMiddleleft: {
    width: "60%",
    margin: "48px auto",
    paddingLeft: 50,
  },
  ModalMiddleright: {
    width: "40%",
  },
  ModalMiddleTextPara: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize + 2,
    color: theme.color.lightBlack,
    margin: 0,
    lineHeight: "28px",
  },
  ModalMiddleTextHead: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 18,
    color: theme.color.lightBlack,
    lineHeight: "45px",
    margin: 0,
  },
  ModalMiddleButtonsContanier: {
    display: "flex",
    gap: "16px",
    paddingTop: "16px",
  },
  startBuilding: {
    fontFamily: theme.font.Inter,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize - 1,
    color: theme.color.lightBlack,
    backgroundColor: theme.color.white,
    padding: "13px 26px",
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
    fontSize: theme.size.defaultSize - 1,
    color: theme.color.lightBlack,
    backgroundColor: theme.color.buttonPink,
    padding: "13px 26px",
    border: `1px solid ${theme.color.white}`,
    borderRadius: 3.23941,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    cursor: "pointer",
  },

  [`@media (max-width: ${theme.breakpoints.xl}px) and (min-width:${theme.breakpoints.lg}px)`]:
    {
      ModalMiddleleft: {
        width: "60%",
        margin: "48px auto",
        paddingLeft: 24,
      },
      ModalMiddleTextHead: {
        fontFamily: theme.font.Aeonik,
        fontWeight: theme.Weight.bold,
        fontSize: theme.size.defaultSize + 13,
        color: theme.color.lightBlack,
        lineHeight: "40px",
        margin: 0,
      },
    },
  [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
    ModalMiddleright: {
      width: "60%",
    },
    ModalMiddleContanier: {
      alignItems: "center",
      margin: 0,
      marginTop: "52px",
      display: "flex",
      flexDirection: "column-reverse",
      position: "relative",
    },
    ModalMiddleButtonsContanier: {
      alignItems: "center",
      justifyContent: "center",
    },
    ModalMiddleleft: {
      width: "80%",
      textAlign: "center",
      paddingTop: 9,
      paddingBottom: 33,
      margin: 0,
      paddingLeft: 0,
    },
    ModalMiddleTextHead: {
      fontSize: theme.size.defaultSize + 10,
      color: theme.color.lightBlack,
      lineHeight: "24px",
      margin: 0,
    },
    ModalMiddleicon2: {
      top: "28%",
      left: "80%",
      right: "51%",
      bottom: "80%",
      position: "absolute",
    },
    ModalMiddleicon1: {
      top: "11%",
      left: "12%",
      right: "97%",
      bottom: "87%",
      position: "absolute",
    },
    ModalMiddleicon3: {
      top: "91%",
      left: "6%",
      right: "41%",
      bottom: "5%",
      position: "absolute",
    },
    startBuilding: {
      fontSize: theme.size.defaultSize - 3,
    },
    explore: {
      fontSize: theme.size.defaultSize - 3,
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    ModalMiddleright: {
      width: "70%",
    },
    ModalMiddleleft: {
      width: "100%",
    },
  },
  [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
    startBuilding: {
      fontWeight: theme.Weight.medium,
      fontSize: theme.size.defaultSize - 3,
    },
    explore: {
      fontWeight: theme.Weight.medium,
      fontSize: theme.size.defaultSize - 3,
    },
  },
}));
