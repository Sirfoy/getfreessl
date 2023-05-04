import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  // rec: {
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  // },

  box: {
    width: " 100%",
    height: "350px",
    background: theme.white,
    boxShadow: " 0px 12px 48px rgba(0, 0, 0, 0.08)",
    borderRadius: "4px",
  },

  info: {
    display: " flex",
    flexDirection: "column",

    alignItems: "flex-Start",
    paddingLeft: "21px",
    paddingTop: "50px",
  },

  verif: {
    position: " relative",
    width: "80px",
    height: "80px",
  },

  pimage: {
    width: " 70%",
    height: "70%",
  },

  content: {
    display: " flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  verify_owner: {
    height: "12px",
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "36px",
    color: theme.lightBlack,
  },

  verify_para: {
    fontSize: " 14px",
    lineHeight: " 21px",

    fontFamily: "Aeonik",
    fontStyle: " normal",
    fontWeight: 400,

    color: theme.lightGrey,
    width: "88%",
  },

  prow: {
    display: "flex",
    flexDirection: " row",
  },
}));
