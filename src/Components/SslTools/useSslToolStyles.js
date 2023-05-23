import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  tmainWrapper: {
    margin: "0px 150px  157px 150px",
    display: "flex",
  },
  tleftWrapper: {
    width: "50%",
    display: "flex",
    alignItems: "center",
  },
  trightWrapper: {
    width: "50%",
  },
  tleftContanier: {
    width: "70%",
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
