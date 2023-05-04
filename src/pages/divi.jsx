import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.text}>Hello, world!</h1>
    </div>
  );
}

export default Home;
