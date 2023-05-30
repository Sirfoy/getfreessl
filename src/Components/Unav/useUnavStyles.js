import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  mainWrapper: {
    width: "100%",
    backgroundColor: theme.color.black,
  },
  ownWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    gap: "20px",
  },
  own: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize + 6,
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    color: theme.color.white,
    margin: 0,
    padding: "24px 0px",
  },
  ownButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "9px 16px",
    gap: "10px",
    background: theme.color.lightPink,
    borderRadius: "4px",
    flex: "none",
    order: 1,
    flexGrow: 0,
    zIndex: 1,
    border: "none",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
      border: "none",
      cursor: "pointer",
    },
  },
  btnText: {
    fontFamily: theme.font.Inter,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize,
    lineHeight: "17px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.color.lightBlack,
  },

  [`@media (max-width: ${theme.breakpoints.lg}px) and (min-width:${theme.breakpoints.md}px)`]:
    {
      ownButton: {
        padding: "8px 12px",
      },
      btnText: {
        fontWeight: theme.Weight.large,
      },
    },
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    ownWrapper: {
      paddingRight: "60px",
    },
    own: {
      fontSize: theme.size.defaultSize - 2,
      padding: "19px 0px 19px 60px",
    },
    btnText: {
      fontWeight: theme.Weight.large,
    },
  },
  [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
    ownWrapper: {
      paddingRight: "20px",
      gap: "10px",
    },
    own: {
      fontSize: theme.size.defaultSize - 2,
      padding: "19px 0px 19px 20px",
    },
    ownButton: {
      padding: "8px 12px",
    },
    btnText: {
      fontWeight: theme.Weight.large,
    },
  },
}));
