import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  QuestionsContanierMainWrapper: {
    maxWidth: "1011px",
    width: "80%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    background: "rgba(255, 166, 181, 0.30)",
    marginBottom: 14,
    padding: "32px 32px 32px 32px",
    cursor: "pointer",
  },
  QuestionsContanierMainTextWrapper: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 0,
    gap: "45px",
    justifyContent: "space-between",
    width: "100%",
  },
  QuestionsContanierMainWrapperHead: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize + 2,
    color: theme.color.lightBlack,
    fontStyle: "normal",
    lineHeight: "24px",
    margin: 0,
  },
  QuestionsContanierMainTextWrapperLower: {
    width: "100%",
  },
  QuestionsContanierMainTextWrapperBody: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize,
    color: theme.color.grey3,
    fontStyle: "normal",
    lineHeight: "21px",
    margin: 0,
    width: "80%",
  },
  [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
    QuestionsContanierMainWrapper: {
      width: "70%",
    },
  },
}));
