import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

export const useSpinnerStyles = createUseStyles((theme) => ({
  "@keyframes spin": {
    from: {
      transform: "rotate(0deg)",
    },

    to: {
      transform: "rotate(360deg)",
    },
  },
  spinner: {
    width: "10px",
    height: "10px",
    border: "2px solid #fff",
    borderTopColor: "transparent",
    borderRadius: "50%",
    animationName: "$spin",
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  },
}));
