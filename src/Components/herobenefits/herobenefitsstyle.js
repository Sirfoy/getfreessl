import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({
  benefits_mainwrapper: {
    width: "33%",
    width: "33%", 
    
   
    borderRight: ` 0.5px solid ${theme.color.placeholdergrey}`,
    margin: " 9px",
    display: "flex",
    
    
  },


  benefits_mainwrapper2: {
    width: "33%",
    width: "33%",
    margin: " 9px",
    display: "flex",
   
  },
  benefitwrapped:{
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: " flex-start",
    padding:"10px",

    
  },


  benefit_image: {
    width: "24px",
    height: "24px",
  },
  benefits_textwrapper: {
    padding: "0px",
    gap: "8px",
    width: "330px",
  },

  benefits_header: {
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: " 24px",
    color: theme.color.lightBack,
    height: "24px",
  },
  benefits_para: {
    fontFamily: 'Aeonik',
    fontStyle:" normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "21px",
    color: theme.color.light,
  },
}));
