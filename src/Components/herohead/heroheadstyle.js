import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  hhead_wrapper: {
    height: "416px",
    // background:"orange",
    display: "flex",
    flexDirection: "column",
  },

  hhead: {
    height: "256px",
    // background:"brown",
    margin: "111px",
    margin: " 8px  111px 5px 111px",
  },
  hhead_head: {
    height: "139px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },

  hhead_head_h: {
    height: "192px",
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "80px",
    lineHeight: "96px",
    textAlign: "center",
    color:theme.color.lightBlack,
    paddingBottom: "10px",
  },

  hhead_para: {
    height: "48px",
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
  },

  hhead_para_p: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "34px",
    textAlign: "center",
    width: "80%",

    color: theme.color.lightGrey,
    // height: 175px;
    // font-size: 49px;
    // font-style: normal;
    // text-align: center;
    // font-family: Aeonik;
    // font-weight: 600;
    // line-height: 61px;
  },

  hsearch: {
    height: "112px",
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

  hinput_pic: {
    height: "27px",
    padding: "11px",
 },

  hinput_text: {
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
