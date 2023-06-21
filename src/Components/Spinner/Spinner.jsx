import { useSpinnerStyles } from "./styles";

export const Spinner = () => {
  const classes = useSpinnerStyles();

  return <div className={classes.spinner} />;
};
