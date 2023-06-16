import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  toolsMainWrapper: {
    width: "85%",
    margin: "0 auto",
    display: "flex",
    gap: "70px",
  },
  toolsleftWrapper: {
    width: "50%",
    display: "flex",
    alignItems: "center",
  },
  toolsrightWrapper: {
    width: "50%",
  },
  toolsLeftContanier: {},
  toolsTexHead: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 42,
    lineHeight: " 59px",
    color: theme.color.black,
  },
  toolsTexPara: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize + 4,
    lineHeight: "27px",
    display: " flex",
    alignItems: " center",
    color: theme.color.lightGrey,
    width: "80%",
  },
  toolsChecks: {
    height: "144px",
  },
  [`@media (max-width: ${theme.breakpoints.lg}px) `]: {
    toolsMainWrapper: {
      flexDirection: "column-reverse",
    },
    toolsleftWrapper: {
      width: "100%",
      paddingLeft: 52,
    },
    toolsrightWrapper: {
      width: "100%",
    },
    toolsTexHead: {
      width: "80%",
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    toolsTexHead: {
      fontSize: theme.size.defaultSize + 22,
      lineHeight: " 49px",
    },
    toolsTexPara: {
      fontFamily: theme.font.Aeonik,
      fontWeight: theme.Weight.light,
      fontSize: theme.size.defaultSize + 4,
      lineHeight: "27px",
      display: " flex",
      alignItems: " center",
      color: theme.color.lightGrey,
      width: "80%",
    },

    [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
      toolsMainWrapper: {
        width: "100%",
        margin: "0 auto",
        display: "flex",
      },
      toolsleftWrapper: {
        paddingLeft: 40,
      },

      toolsTexHead: {
        fontSize: theme.size.defaultSize + 22,
      },
      toolsTexPara: {
        fontSize: theme.size.defaultSize,
      },
    },
  },
}));
