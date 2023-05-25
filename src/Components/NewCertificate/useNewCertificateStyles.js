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
  getCertificateFrame: {
    height: 91,
    background: "rgba(255, 166, 181, 0.2)",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
  },
  getCertificateText: {
    height: 209,
    background: theme.color.white,
    border: `"1px solid ${theme.color.placeholdergrey}`,
    borderRadius: 4,
    marginTop: "20px",
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
  },
  getCertificateFrameWrapper: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    paddingLeft: "10px",
  },
  getCertificateText: {
    height: 209,
    background: theme.color.white,
    border: `"1px solid ${theme.color.placeholdergrey}`,
    borderRadius: 4,
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
  },
  getCertificateTextHeadWrapper: {
    height: 145,
    padding: 32,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 16,
  },
  inputGetCertificateWrapper: {
    height: 50,
    border: `1px solid ${theme.color.blackvar}`,
    borderRadius: 4,
    display: "flex",
    "&:hover": {
      border: `1px solid ${theme.color.lightBlack}`,
      cursor: "pointer",
    },
  },
  inputGetCertificate: {
    width: "80%",
    border: 0,
    paddingLeft: "20px",

    "&:focus": {
      fontWeight: theme.Weight.medium,
      outline: "none",
      fontFamily: theme.font.Inter,
      fontWeight: theme.Weight.light,
      fontSize: theme.size.defaultSize + 2,
      color: theme.color.lightBlack,
    },
    "&::placeholder": {
      fontFamily: theme.font.Aeonik,
      fontWeight: theme.Weight.light,
      fontSize: theme.size.defaultSize,
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
    "&:hover": {
      background: theme.color.LightRedHover,
      border: "none",
      cursor: "pointer",
    },
  },
  getCertificateButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
