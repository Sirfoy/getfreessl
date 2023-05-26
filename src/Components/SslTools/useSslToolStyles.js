import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  ToolsMainWrapper: {
    height: "543px",
    margin: "0px 150px  20px 150px",
    display: "flex",
  },
  ToolsleftWrapper: {
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  ToolsrightWrapper: {
    width: "50%",
    height: "100%",
  },
  ToolsLeftContanier: {
    width: "70%",
    height: "388px",
  },
  ToolsTexHead: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 42,
    lineHeight: " 59px",
    paddingLeft: 10,
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
  },
  ToolsChecks: {
    height: "144px",
  },
}));
