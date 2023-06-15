import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  ToolsMainWrapper: {
    width: "85%",
    margin: "0 auto",
    display: "flex",
    gap: "70px",
  },
  ToolsleftWrapper: {
    width: "50%",
    display: "flex",
    alignItems: "center",
  },
  ToolsrightWrapper: {
    width: "50%",
  },
  ToolsLeftContanier: {},
  ToolsTexHead: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 42,
    lineHeight: " 59px",
    color: theme.color.black,
  },
  ToolsTexPara: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize + 4,
    lineHeight: "27px",
    display: " flex",
    alignItems: " center",
    color: theme.color.lightGrey,
    width: "80%",
  },
  ToolsChecks: {
    height: "144px",
  },
  [`@media (max-width: ${theme.breakpoints.lg}px) `]: {
    ToolsMainWrapper: {
      flexDirection: "column-reverse",
    },
    ToolsleftWrapper: {
      width: "100%",
      paddingLeft: 52,
    },
    ToolsrightWrapper: {
      width: "100%",
    },
    ToolsTexHead: {
      width: "80%",
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    ToolsTexHead: {
      fontSize: theme.size.defaultSize + 22,
      lineHeight: " 49px",
    },
    ToolsTexPara: {
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
      ToolsMainWrapper: {
        width: "100%",
        margin: "0 auto",
        display: "flex",
      },
      ToolsleftWrapper: {
        paddingLeft: 40,
      },

      ToolsTexHead: {
        fontSize: theme.size.defaultSize + 22,
      },
      ToolsTexPara: {
        fontSize: theme.size.defaultSize,
      },
    },
  },
}));
