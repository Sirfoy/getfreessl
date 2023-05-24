import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  VerifySection: {
    height: "100%",
    background: theme.color.grey,
    marginTop: "1px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "10px",
  },
  VerifySectionFrame: {
    height: "100%",
    marginRight: "296px",
    marginLeft: "64px",
    width: "87%",
  },
  VerifySectionMainText: {
    fontFamily: theme.font.firstfont,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.thirdSize,
    lineHeight: "24px",
    color: theme.color.lightBlack,
  },
  VerifySectionParagraph: {
    fontFamily: theme.font.firstfont,
    fontSize: theme.size.secondSize,
    fontWeight: theme.Weight.light,
    lineHeight: "21px",
    color: theme.color.lightGrey,
  },
}));
