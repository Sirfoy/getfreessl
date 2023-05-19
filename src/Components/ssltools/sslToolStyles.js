import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  tmainWrapper: {
    height: "543px",
    margin: "0px 150px  20px 150px",
    display: "flex",
  },
  tleftWrapper: {
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  trightWrapper: {
    width: "50%",
    height: "100%",
  },
  tleftContanier: {
    width: "70%",
     height: "388px",
  },
  tTexHead: {
    fontFamily: "Aeonik",
    fontStyle: " normal",
    fontWeight: 700,
    fontSize: "56px",
    lineHeight: " 59px",
    paddingLeft: 10,
    color: theme.color.black,
  },
  tTexPara: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "27px",
    display: " flex",
    alignItems: " center",
    color: theme.color.lightGrey,
  },
  tChecks: {
    height: "144px",
  },
}));
