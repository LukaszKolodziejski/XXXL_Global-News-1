import React, { Component, Fragment } from "react";

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
        <div class="dropdown">
          <button class="dropbtn">{dropdown[0].name}</button>
          <div class="dropdown-content">
            <button>{dropdown[0].kindOf[0]}</button>
            <button>{dropdown[0].kindOf[1]}</button>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">{dropdown[1].name}</button>
          <div class="dropdown-content">
            <button>{dropdown[1].kindOf[0]}</button>
            <button>{dropdown[1].kindOf[1]}</button>
          </div>
        </div>
        <button class="clear">Clear Filters</button>
      </Fragment>
    );
  }
}

export default Filters;
