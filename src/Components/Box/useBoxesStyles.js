import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  box: {
    width: "100%",
    height: "350px",
    background: theme.white,
    boxShadow: "0px 12px 48px rgba(0, 0, 0, 0.08)",
    borderRadius: "4px",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-Start",
    padding: "50px 0 0 21px",
  },
  verif: {
    position: "relative",
    width: "80px",
    height: "80px",
  },
  pimage: {
    width: "70%",
    height: "70%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  verifyOwner: {
    height: "12px",
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 2,
    lineHeight: "36px",
    color: theme.color.lightBlack,
  },
  verify_para: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize,
    lineHeight: "21px",
    color: theme.color.lightGrey,
    width: "88%",
  },
  prow: {
    display: "flex",
    flexDirection: "row",
  },
}));
