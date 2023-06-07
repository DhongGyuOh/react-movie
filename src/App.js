import PropTypes from "prop-types";
import styles from "./Button.module.css";
import React from "react";

function App() {
  return;
}
function Button() {
  const [counter, setCounter] = React.useState();
  const counting = () => {
    setCounter(+1);
  };
  return (
    <button className={styles.btn} text="good" onClick={counting}>
      Good button
    </button>
  );
}
Button.prototype = {
  text: PropTypes.string.isRequired,
};

export default App;
