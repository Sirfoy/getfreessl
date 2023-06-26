import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  getCertificateMainWrapper: {
    margin: "1px",
    paddingTop: "24px",
    paddingLeft: "64px",
    paddingRight: "64px",
    paddingBottom: 24,
    background: theme.color.grey,
  },
  getCertificateFrameWrapper: {
    background: "rgba(255, 166, 181, 0.2)",
    borderRadius: 4,
    display: "flex",
    alignItems: "flex-start",
    display: "flex",

    gap: "10px",
    padding: "10px",
  },
  getCertificateTextHead: {
    background: theme.color.white,
    borderRadius: 4,

    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.medium,
    fontSize: theme.size.defaultSize,
    display: "flex",
    alignItems: "center",
    color: theme.color.lightGrey,
    paddingBottom: "16px",
  },
  getCertificateFramePic: {
    width: 64,
    height: 43,
  },
  getCertificateFrametext: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize,
    display: "flex",
    alignItems: "center",
    color: theme.color.lightBlack,
    paddingRight: "5px",
    lineHeight: "21px",
    wordWrap: "break-word",
    margin: 0,
  },

  getCertificateText: {
    background: theme.color.white,
    border: `1px solid ${theme.color.placeholdergrey}`,
    borderRadius: 4,
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    padding: 32,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 16,
  },

  inputGetCertificateWrapper: {},
  inputGetCertificate: {
    border: `1px solid ${theme.color.blackvar}`,
    borderRadius: 4,
    width: "100%",
    padding: "12px",
    boxSizing: "border-box",
    fontSize: theme.size.defaultSize + 2,
    fontWeight: theme.Weight.light,
    fontFamily: theme.font.Aeonik,

    "&:hover": {
      border: `1px solid ${theme.color.lightBlack}`,
    },

    "&:focus": {
      fontWeight: theme.Weight.medium,
      outline: "none",
      fontWeight: theme.Weight.light,
      color: theme.color.lightBlack,
    },
    "&::placeholder": {
      fontWeight: theme.Weight.light,
      color: theme.color.placeholdergrey2,
    },
  },
  getCertificateBtn: {
    padding: "12px 24px",
    gap: 8,
    background: theme.color.lightRed,
    borderRadius: 4,
    border: "none",
    fontFamily: theme.font.Inter,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 2,
    textAlign: "center",
    color: theme.color.white,
    width: "fit-content",
    display: "flex",
    alignItems: "center",

    "&:hover": {
      background: theme.color.LightRedHover,
      border: "none",
      cursor: "pointer",
    },
  },
  getCertificateButton: {
    paddingTop: "10px",
    display: "flex",
    justifyContent: "flex-end",
  },
  [`@media (max-width: ${theme.breakpoints.sm}px) `]: {
    getCertificateFrametext: {
      fontFamily: theme.font.Aeonik,
      fontWeight: theme.Weight.light,
      fontSize: theme.size.defaultSize - 2,
      display: "flex",
      alignItems: "center",
      color: theme.color.lightBlack,
      paddingRight: "5px",
      lineHeight: "18px",
      wordWrap: "break-word",
      margin: 0,
    },
  },
}));
