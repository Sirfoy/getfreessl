import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  toolsMainWrapper: {
    width: "85%",
    margin: "0 auto",
    display: "flex",
    gap: "70px",
    marginBottom: "150px",
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
  toolsTexParagraph: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
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
      marginBottom: "50px",
    },
    toolsleftWrapper: {
      width: "97%",
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
    toolsMainWrapper: {
      gap: 0,
    },
    toolsTexHead: {
      fontSize: theme.size.defaultSize + 18,
      lineHeight: " 49px",
      margin: 0,
    },
    toolsTexParagraph: {
      fontSize: theme.size.defaultSize + 4,
      lineHeight: "27px",
      display: " flex",
      alignItems: " center",
      color: theme.color.lightGrey,
      width: "80%",
    },
    toolsleftWrapper: {
      paddingLeft: 10,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
      toolsMainWrapper: {
        width: "100%",
        margin: "0 auto",
        display: "flex",
      },
      toolsTexHead: {
        width: "100%",
        fontSize: theme.size.defaultSize + 18,
      },
      toolsTexParagraph: {
        width: "100%",
        fontSize: theme.size.defaultSize,
      },
      toolsleftWrapper: {
        width: "70%",
        paddingBottom: "50px",
        paddingLeft: 27,
      },
      toolsrightWrapper: {
        width: "100%",
      },
    },
  },
}));
