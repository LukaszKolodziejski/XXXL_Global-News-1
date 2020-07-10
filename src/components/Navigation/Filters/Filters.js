import React, { Component, Fragment } from "react";
import styles from "./css/Filters.module.css";

class Filters extends Component {
  state = {
    dropdown: [
      {
        name: "Topic",
        kindOf: ["tech", "travel", "politics", "sports"],
      },
      {
        name: "Time",
        kindOf: ["this month", "this week", "today"],
      },
      {
        name: "Sort By",
        kindOf: ["popularity", "publishedAt"],
      },
    ],
  };
  render() {
    const { dropdown } = this.state;

    return (
      <Fragment>
        <nav className={styles.Filters}>
          <div className={styles.Dropdown}>
            <button className={styles.Dropbtn}>
              <span>{dropdown[0].name}</span>
              <div className={styles.Dropbtn__arrow}></div>
            </button>
            <div className={styles.Dropdown__content}>
              <div>{dropdown[0].kindOf[0]}</div>
              <div>{dropdown[0].kindOf[1]}</div>
            </div>
          </div>
          <div className={styles.Dropdown}>
            <button className={styles.Dropbtn}>
              <span>{dropdown[1].name}</span>
              <div className={styles.Dropbtn__arrow}></div>
            </button>
            <div className={styles.Dropdown__content}>
              <div>{dropdown[1].kindOf[0]}</div>
              <div>{dropdown[1].kindOf[1]}</div>
            </div>
          </div>
          <button className={styles.Clearbtn}>Clear Filters</button>
        </nav>
      </Fragment>
    );
  }
}

export default Filters;
