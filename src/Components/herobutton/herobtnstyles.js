import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
export const styles = createUseStyles((theme) => ({


    hero_btn: {
        padding: "12px 24px",
        gap: '8px',
        background: theme.color.lightRed,
        borderRadius: "4px",
        border: "none",
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: "24px",
        textAlign: "center",
        color: theme.color.white,
        cursor:'Pointer',       
    },
 }));