import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  FooterLastMainWrapper: {
    color: "red",
    marginRight: "200px",
    marginLeft: "200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "60px",
  },
  FooterLastLeftSection: {
    display: "flex",
    alignItems: "center",
    gap: "2px",
  },
  FooterLastLeftcopyright: {
    fontFamily: theme.font.Inter,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize,
    color: theme.color.grey,
  },
  FooterLastRightSection: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
  },
}));
