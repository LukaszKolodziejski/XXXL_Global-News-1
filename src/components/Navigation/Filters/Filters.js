import React, { Component } from "react";

class Filters extends Component {
  state = {
    dropdown: [
      {
        name: "Topic",
        kindOf: ["tech", "travel", "politics", "sports"],
      },
      {
        name: "Sort By",
        kindOf: ["popularity", "publishedAt"],
      },
      {
        name: "Dates",
        kindOf: ["this month", "this week", "today"],
      },
    ],
  };
  render() {
    const { dropdown } = this.state;

    return (
      <div class="dropdown">
        <button class="dropbtn">{dropdown[0].name}</button>
        <div class="dropdown-content">
          <a href="#">{dropdown[0].kindOf[0]}</a>
          <a href="#">{dropdown[0].kindOf[1]}</a>
        </div>
      </div>
    );
  }
}

export default Filters;
