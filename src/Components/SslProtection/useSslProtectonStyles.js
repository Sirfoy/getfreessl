import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  pmainWrapper: {
    background: theme.color.grey,
    width: "85%",
    margin: "70px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: {
    width: "90%",
    display: "flex",
    gap: "50px",
    padding: "109px 0px ",
  },
  pleftWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "80px",
    width: "50%",
  },
  pcolumn: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "70px",
  },
  prow: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: theme.size.defaultSize + 42,
    lineHeight: "67px",
  },
  psslP: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize + 4,
    lineHeight: "27px",
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
  [`@media (max-width: ${theme.breakpoints.lg}px) `]: {
    contentWrapper: {
      flexDirection: "column",
    },
    pleftWrapper: {
      alignItems: "center",
      gap: "80px",
      width: "69%",
      margin: "0px auto",
    },
    prightWrapper: {
      width: "94%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
    },
  },
  [`@media (max-width: ${theme.breakpoints.xl}px) `]: {
    pleftWrapper: {
      width: "85%",
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    pleftWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "80px",
      width: "100%",
    },
  },
  [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
    pcolumn: {
      width: "100%",
    },
    prow: {
      width: "100%",
      marginRight: 20,
    },
    psslHeader: {
      fontSize: theme.size.defaultSize + 18,
      lineHeight: "48px",
    },
    psslP: {
      fontSize: theme.size.defaultSize,
      lineHeight: "21px",
    },
    prightWrapper: {
      width: "100%",
    },
    pcontent: {
      width: "100%",
    },
    pmainWrapper: {
      width: "95%",
    },
  },
}));
