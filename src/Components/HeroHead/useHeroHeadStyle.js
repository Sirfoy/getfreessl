import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  hheadWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  hhead: {
    height: "256px",
    margin: "111px",
    margin: " 8px  111px 5px 111px",
  },
  hheadHead: {
    height: "139px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  hheadHead_h: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "63px",
    textAlign: "center",
    color: theme.color.lightBlack,
    paddingBottom: "10px",
  },
  hheadPara: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
  },
  hheadParaP: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px",
    textAlign: "center",
    width: "91%",
    color: theme.color.lightGrey,
  },
  hsearch: {
    padding: "20px",
    border: "24px solid black",
    borderRadius: "4px",
    display: "flex",
    justifyContent: " space-between",
    alignItems: "center",
    margin: "48px",
  },
  hinput: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  hinputPic: {
    height: "27px",
    padding: "11px",
  },
  hinputText: {
    fontFamily: "Aeonik",
    fontStyle: " normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "27px",
    border: "none",
    outline: "none",
    "&::placeholder": {
      color: theme.color.placeholdergrey,
      fontFamily: "Aeonik",
      fontStyle: " normal",
      fontWeight: 400,
      fontSize: " 18px",
      lineHeight: "27px",
    },
  },
}));
