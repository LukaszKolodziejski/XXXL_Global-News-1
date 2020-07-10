import React, { Component } from "react";
import styles from "./css/Title.module.css";

const Title = (props) => {
  return (
    <header className={styles.Header}>
      <h1 className={styles.Header__Title}>{props.name}</h1>
    </header>
  );
};

export default Title;
