import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  box: {
    width: "100%",
    background: theme.color.white,
    boxShadow: "0px 12px 48px rgba(0, 0, 0, 0.08)",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-Start",
    padding: "50px 0 35px 21px",
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
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 2,
    color: theme.color.lightBlack,
    margin: 0,
  },
  verify_para: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize,
    lineHeight: "21px",
    color: theme.color.lightGrey,
    width: "88%",
  },
  prow: {
    display: "flex",
    flexDirection: "row",
  },
  [`@media (max-width: ${theme.breakpoints.lg}px) `]: {
    box: {
      padding: "50px 0 44px 21px",
    },
    verify_para: {
      fontSize: theme.size.defaultSize - 2,
      lineHeight: "18px",
    },
  },
}));
