import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  pmain_wrapper: {
    background:theme.color.grey,
    height: "978px",
    margin: "70px 150px 70px 150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  content_wrapper: {
    width: "90%",
    height: "708px",
    display: "flex",
    gap: "50px",
    padding: "28px",
  },

  pleft_wrapper: {
    display: "flex",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "center",
    gap: "70px",
    width: "50%",
    height: "100%",
  },
  pright_wrapper: {
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  pcontent: {
    width: "80%",
  },

  pssl_header: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "49px",
    lineHeight: "59px",
  },

  pssl_p: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontzseight: 300,
    fontSize: "15px",
    lineHeight: "24px",
    color: theme.color.lightGrey,
  },

  pssl_button: {
    background: theme.color.lightRed,
    border: "none",
    borderRadius: "4px",
    flexDirection: "row",
    alignItems: "center",
    padding: "12px 24px",
    gap: "8px",
    cursor: "pointer",
  },

  pssl_btn_text: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "10px",
    lineHeight: "12px",
    color: theme.color.white,
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
  },

  pcolumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "70px",
  },

  prow: {
    margin: "auto",
  },
}));
