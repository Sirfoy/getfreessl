import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  ModalSectionMainContanier: {
    width: "100%",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.35)",
    position: "fixed",
    zIndex: 9999,
    overflow: "hidden",
  },
  ModalSectionMainWrapper: {
    backgroundColor: theme.color.white,
    width: "63%",
    height: "85%",
    backgroundColor: "#FFFFFF",
    margin: "4% auto",
  },
  ModalSectionUpper: {
    backgroundColor: theme.color.white,
    display: "flex",
    height: 56,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottom: `0.9px solid ${theme.color.modalBackground}`,
  },
  ModalSectionUpperPic: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 16,
    cursor:"pointer",
  },
  ModalSectionMiddle: {
    backgroundColor: theme.color.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ModalSectionMiddleHead: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 18,
    color: theme.color.lightBlack,
    margin: 0,
  },
  ModalSectionMiddlePara: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    color: theme.color.lightGrey,
    fontSize: theme.size.defaultSize + 4,
    textAlign: "center",
    width: "80%",
    margin: 0,
    lineHeight: "27px",
    paddingTop: "10px",
  },
  ModalSectionMiddleimg:{
    // width:"80%",
  },

   
  [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
    ModalSectionMainWrapper: {
      backgroundColor: theme.color.white,
      width: "63%",
      height: "94%",
      backgroundColor: "#FFFFFF",
      margin: "4% auto",
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px) `]:
    {
      ModalSectionMainWrapper: {
        backgroundColor: theme.color.white,
        width: "90%",
        height: "70%",
        backgroundColor: "#FFFFFF",
        margin: "9% auto",
      },
      ModalSectionMiddleHead: {
        fontSize: theme.size.defaultSize + 10,     
      },
      ModalSectionMiddlePara: {
        fontSize: theme.size.defaultSize,      
        lineHeight: "21px",     
      },
      
    
    },
    [`@media (max-width: ${theme.breakpoints.sm}px) `]:
    {
      ModalSectionMainWrapper: {
        backgroundColor: theme.color.white,
        width: "90%",
        height: "70%",
        backgroundColor: "#FFFFFF",
        margin: "4% auto",
      },
      ModalSectionMiddleHead: {
        fontSize: theme.size.defaultSize + 10,     
      },
      ModalSectionMiddlePara: {
        fontSize: theme.size.defaultSize,      
        lineHeight: "21px",     
      },
      
    
    },
}));
