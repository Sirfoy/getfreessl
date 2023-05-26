import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  httpMainWrapper: {
    padding: 32,
    gap: 10,
    height: 474,
    color: theme.color.white,
    border: `1px solid ${theme.color.placeholdergrey}`,
    borderRadius: 4,
  },
  httpTextWrapper: {
    height: "100%",
    margin: 0,
  },
  httpTextP: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize,
    color: theme.color.lightGrey,
  },
}));
