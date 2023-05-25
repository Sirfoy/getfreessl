import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  ModalSectionMainContanier: {
    width: "100%",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.35)",
    position: "fixed",
    zIndex: 9999,
    overflow: "hidden",
  },
  ModalSectionMainWrapper: {
    backgroundColor: theme.color.white,
    width: "959px",
    height: "773px",
    position: "fixed",
    top: 61,
    left: 364,
  },
  ModalSectionUpper: {
    backgroundColor: theme.color.white,
    display: "flex",
    height: 56,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottom: `0.9px solid ${theme.color.modalBackground}`,
  },
  ModalSectionUpperPic: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 16,
  },
  ModalSectionMiddle: {
    backgroundColor: theme.color.white,
    margin: "7px 28px 0 28px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ModalSectionMiddleHead: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 18,
    color: theme.color.lightBlack,
    margin: 0,
  },
  ModalSectionMiddlePara: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    color: theme.color.lightGrey,
    textAlign: "center",
    width: "60%",
    margin: 0,
    lineHeight: "27px",
    paddingTop: "10px",
  },
}));
