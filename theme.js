import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
const theme = {
  font: {
    Aeonik: "Aeonik",
    Inter: "Inter",
  },
  breakpoints: {
    sm: 450,
    md: 768,
    lg: 1024,
    xl: 1440,
    xxl: 1728,
  },
   Weight: {
    bold: 700,
    light: 400,
    medium: 500,
    large: 600,
  },
  size: {
    defaultSize: 14,
  },
  color: {
    black: "#000000",
    lightBlack: "#0F111A",
    primary: "#0c0c0c",
    secondary: "#898880",
    secondaryLight: "#C5C3BC",
    accent: "#80722A",
    accentMid: "#E9E7DE",
    white: "#FFFFFF",
    lightPink: "#FFA6B5",
    lightGrey: "#5C5D66",
    lightRed: "#ED3957 ",
    LightRedHover: "#E32D4C",
    lightRed2: "#FA536E ",
    grey: "#FAFAFA",
    grey2: "#F2F2F2",
    placeholdergrey: "#C0C2CC",
    placeholdergrey2: "#909199",
    buttonPink: "#FFA6B5",
    linkBlue: "#1B9BE2",
    blackvar: "#2B2C33",
    modalBackground: "#C2C9D1",
  },
};
export default theme;

