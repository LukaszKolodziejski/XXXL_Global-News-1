import React from "react";
import { Link } from "react-router-dom";

import styles from "./ReturnButton.module.css";

const ReturnButton = (props) => {
  return (
    <Link to="/" className={styles.ReturnButton}>
      {props.children}
    </Link>
  );
};

export default ReturnButton;
