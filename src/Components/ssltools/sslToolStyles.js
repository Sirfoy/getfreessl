import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  tmainWrapper: {
    height: "543px",
    background: "red",
    margin: "0px 150px  20px 150px",
    display: "flex",
  },

  tleftWrapper: {
    width: "50%",
    background: "green",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  trightWrapper: {
    width: "50%",
    background: "brown",
    height: "100%",
  },
  tleftContanier: {
    width: "70%",
    background: "orange",
    height: "388px",
  },

  tText: {
    
  },

  tTexHead: {
    fontFamily: "Aeonik",
    fontStyle: " normal",
    fontWeight: 700,
    fontSize: "56px",
    lineHeight: " 59px",
  },
  tTexPara: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "27px",
    display: " flex",
    alignItems: " center",
  },

  tChecks:{
    height:'144px',
  }
}));
