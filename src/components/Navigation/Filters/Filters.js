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
        name: "Dates",
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
          <div className="dropdown">
            <button className="dropbtn">{dropdown[0].name}</button>
            <div className="dropdown-content">
              <button>{dropdown[0].kindOf[0]}</button>
              <button>{dropdown[0].kindOf[1]}</button>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">{dropdown[1].name}</button>
            <div className="dropdown-content">
              <button>{dropdown[1].kindOf[0]}</button>
              <button>{dropdown[1].kindOf[1]}</button>
            </div>
          </div>
          <button className="clear">Clear Filters</button>
        </nav>
      </Fragment>
    );
  }
}

export default Filters;
