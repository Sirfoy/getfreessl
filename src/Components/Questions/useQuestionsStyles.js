import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  QuestionsMainWrapper: {
    color: theme.color.grey,
    paddingBottom: "36px",
  },
  QuestionsMainWrapperTop: {
    paddingBottom: "50px",
    paddingTop: 25,
  },
  QuestionsMainWrapperTopHead: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 42,
    color: theme.color.black,
    textAlign: "center",
    fontStyle: "normal",
    lineHeight: "67.2px",
    margin: 0,
    paddingBottom: 10,
  },
  QuestionsMainWrapperTopBody: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize + 4,
    color: theme.color.lightGrey,
    textAlign: "center",
    fontStyle: "normal",
    lineHeight: "27px",
    margin: 0,
  },
  [`@media (max-width: ${theme.breakpoints.lg}px) `]: {
    QuestionsMainWrapperTopBody: {
      width: "85%",
      margin: "0 auto",
    },
    QuestionsMainWrapperTopHead: {
      fontSize: theme.size.defaultSize + 38,
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    QuestionsMainWrapperTopHead: {
      fontSize: theme.size.defaultSize + 29,
    },
    QuestionsMainWrapperTopBody: {
      width: "90%",
    },
    QuestionsMainWrapperTop: {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    QuestionsMainWrapper: {
      paddingBottom: "64px",
    },
  },
  [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
    QuestionsMainWrapperTop: {
      paddingBottom: "20px",
      paddingTop: 25,
    },
    QuestionsMainWrapper: {
      paddingBottom: "26px",
    },
    QuestionsMainWrapperTopHead: {
      fontSize: theme.size.defaultSize + 18,
      lineHeight: "48.2px",
    },
    QuestionsMainWrapperTopBody: {
      fontSize: theme.size.defaultSize,
      lineHeight: "21px",
      margin: "0 auto",
    },
  },
}));
