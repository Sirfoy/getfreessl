import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const styles = createUseStyles((theme) => ({
  hheadWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  hhead: {
 
  },
  hheadHead: {
   
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  hheadHead_h: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.bold,
    fontSize: theme.size.defaultSize + 47,
    lineHeight: "88px",
    textAlign: "center",
    color: theme.color.lightBlack,
  },
  hheadPara: {
    display: "flex",
    justifyContent: "center",
    margin:0, 
    },
  hheadParaP: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize + 6,
    lineHeight: "32px",
    textAlign: "center",
    width: "91%",
    color: theme.color.lightGrey,
    paddingBottom:"48px",
  },
  hsearch: {
    padding: "20px",
    border: "24px solid black",
    borderRadius: "4px",
    display: "flex",
    justifyContent: " space-between",
    alignItems: "center",
  
  },
  hinput: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  hinputPic: {
    height: "27px",
    padding: "11px",
  },
  hinputText: {
    fontFamily: theme.font.Aeonik,
    fontWeight: theme.Weight.light,
    fontSize: theme.size.defaultSize + 4,
    lineHeight: "27px",
    border: "none",
    outline: "none",
    "&::placeholder": {
      color: theme.color.placeholdergrey,
      fontFamily: theme.font.Aeonik,
      fontWeight: theme.Weight.light,
      fontSize: theme.size.defaultSize + 4,
      lineHeight: "27px",
    },
  },
  
   [`@media (max-width: ${theme.breakpoints.lg}px) and (min-width:${theme.breakpoints.md}px)`]:
  {
    hheadHead_h: {
      width:"85%",
      margin:"0 auto",    
    },
    hheadHead_h: {   
      fontSize: theme.size.defaultSize + 39,      
    },
   },
   
  
}));
