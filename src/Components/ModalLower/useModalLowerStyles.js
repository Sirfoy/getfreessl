import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  ModalMiddleMainWrapper: {
    borderRadius: 3,
    height: 411,
  },
  ModalMiddleContanier: {
    backgroundColor: theme.color.buttonPink,
    border: `0.9px solid ${theme.color.lightRed}`,
    margin: "52px 24px 79px 24px",
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
    left: "51",
    right: "41%",
    bottom: "5%",
    position: "absolute",
  },

  ModalMiddleleft: {
    margin: "48px 0px 18px 50px",
    width: "80%",
  },
  ModalMiddleright: {},
  ModalMiddleTextWrapper: {
    width: 432,
    height: 123,
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
}));
