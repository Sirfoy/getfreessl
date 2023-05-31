import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  pmainWrapper: {
    background: theme.color.grey,
    margin: "70px 150px 70px 150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: {
    width: "90%",
    display: "flex",
    gap: "50px",
    paddingTop: 109,
    paddingBottom: 161,
  },
  pleftWrapper: {
    display: "flex",
    display: "flex",   
    alignItems: "center",
    gap: "70px",
    width: "50%",
  },
  prightWrapper: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pcontent: {
    width: "80%",
  },
  psslHeader: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 38,
    lineHeight: "67px",
  },
  psslP: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize + 4,
    lineHeight: "24px",
    color: theme.color.lightGrey,
  },
  psslButton: {
    background: theme.color.lightRed,
    border: "none",
    borderRadius: "4px",
    flexDirection: "row",
    alignItems: "center",
    padding: "12px 24px",
    gap: "8px",
    cursor: "pointer",
    "&:hover": {
      background: theme.color.LightRedHover,
      border: "none",
      cursor: "pointer",
    },
  },
  psslBtnText: {
    fontFamily: theme.font.Inter,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 2,
    color: theme.color.white,
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