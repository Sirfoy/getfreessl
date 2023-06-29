import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const usePollValidationStyles = createUseStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.4)",
    zIndex: 10,
  },
  pollDialog: {
    width: "40vw",
    maxWidth: "600px",
    background: theme.color.white,
    padding: " 0 28px 28px 28px",
    boxSizing: "border-box",
    fontFamily: theme.font.Aeonik,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "1px",
  },
  pollImage: {
    width: "40%",
  },
  pollHeading: {
    fontSize: theme.size.defaultSize + 10,
    fontWeight: theme.Weight.bold,
    margin: 0,
    color: theme.color.lightBlack,
    margin: "4px 0 12px 0",
  },
  pollText: {
    margin: 0,
    textAlign: "center",
    fontSize: theme.size.defaultSize,
    width: "80%",
    lineHeight: "1.4",
    color: theme.color.lightGrey,
  },
  pollCountdown: {
    marginTop: "12px",
    padding: "8px",
    borderRadius: "1px",
    background: "rgba(255, 166, 181, 0.2)",
    border: `1px solid rgba(255, 166, 181, 0.3)`,
    fontFamily: theme.font.Aeonik,
    height: "fit-content",
    display: "flex",
    gap: "3px",
    alignItems: "flex-end",

    "& .countdown": {
      fontSize: theme.size.defaultSize - 2.5,
      margin: 0,
      padding: 0,
      color: theme.color.lightRed,
      fontWeight: theme.Weight.bold,
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    pollDialog: {
      width: "66vw",
      padding: "0 20px 20px 20px",
    },
  },
  [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
    pollDialog: {
      width: "66vw",
      padding: "0 10px 40px 10px",
    },
    pollImage: {
      width: "80%",
    },
  },  
}));