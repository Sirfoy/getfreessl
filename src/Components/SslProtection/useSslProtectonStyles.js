import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  paragraphMainWrapper: {
    background: theme.color.grey,
    width: "85%",
    margin: "70px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: {
    width: "90%",
    display: "flex",
    gap: "50px",
    padding: "109px 0px ",
  },
  paragraphleftWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "72px",
    width: "50%",
  },
  paragraphColumn: {
    // maxWidth:"361px",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
  },
  paragraphRow: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  paragraphrightWrapper: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paragraphcontent: {
    width: "80%",
  },
  psslHeader: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 42,
    lineHeight: "67px",
  },
  psslParagraph: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize + 4,
    lineHeight: "27px",
    color: theme.color.lightGrey,
  },
  psslButton: {
    background: theme.color.lightRed,
    border: "none",
    borderRadius: "4px",
    flexDirection: "row",
    alignItems: "center",
    padding: "12px 24px",
    gap: "8px",
    cursor: "pointer",
    "&:hover": {
      background: theme.color.LightRedHover,
      border: "none",
      cursor: "pointer",
    },
  },
  psslBtnText: {
    fontFamily: theme.font.Inter,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 2,
    color: theme.color.white,
    textAlign: "center",
  },
  [`@media (max-width: ${theme.breakpoints.xl}px) `]: {
    paragraphMainWrapper: {
      width: "95%",
    },
    paragraphleftWrapper: {
      width: "65%",
      margin: "50px auto",
    },
  },
  [`@media (max-width: ${theme.breakpoints.lg}px) `]: {
    paragraphMainWrapper: {
      width: "85%",
    },
    contentWrapper: {
      flexDirection: "column",
      padding: "40px 0px ",
    },
    paragraphleftWrapper: {
      alignItems: "center",
      gap: "54px",
      width: "80%",
      margin: "0px auto",
    },
    paragraphrightWrapper: {
      width: "94%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
    },
    paragraphColumn: {
      gap: "32px",
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px) `]: {
    paragraphleftWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "32px",
      width: "100%",
    },
    paragraphMainWrapper: {
      margin: "50px auto",
    },
    paragraphColumn: {
      // maxWidth:"361px",
      width: "70%",
      display: 'flex',
      maxWidth: 270,
     
    },
    paragraphRow: {
      width: "70%",
      display: 'flex',
      maxWidth: 270,
     
    },
  },
  [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
    paragraphColumn: {
      width: "100%",
      gap: "32px",
    },
    paragraphRow: {
      width: "100%",
    },
    psslHeader: {
      fontSize: theme.size.defaultSize + 18,
      lineHeight: "48px",
    },
    psslParagraph: {
      fontSize: theme.size.defaultSize,
      lineHeight: "21px",
    },
    paragraphrightWrapper: {
      width: "100%",
    },
    paragraphcontent: {
      width: "100%",
    },
    paragraphMainWrapper: {
      width: "100%",
      margin: "10px auto",
    },
    paragraphleftWrapper: {
      gap: "32px",
    },
    contentWrapper: {
      width: "90%",
      display: "flex",
      gap: "50px",
      padding: "21px 0px ",
    },
  },
}));
