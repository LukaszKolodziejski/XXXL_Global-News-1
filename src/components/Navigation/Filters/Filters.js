import React, { Component, Fragment } from "react";
import axios from "../../../axios-newsapi";
import styles from "./css/Filters.module.css";
import Button from "../../UI/Button/Button";

const API_KEY = "21dec1c6cdd34f6986cecd09f8d9c71e";
class Filters extends Component {
  state = {
    filters: [
      {
        id: "Topic",
        api: {
          searchQuery: "q=",
          startQuery: "a",
          query: "",
          values: ["tech", "travel", "politics", "sports"],
        },
        data: {
          name: "Topic",
          active: false,
          values: ["Tech", "Travel", "Politics", "Sports"],
          activeValue: "",
        },
      },
      {
        id: "Dates",
        api: {
          searchQuery: "from=",
          startQuery: "",
          query: ">>>>>>> Tu jest Obliczona Data  <<<<<",
          values: null,
        },
        data: {
          name: "Time",
          active: false,
          values: ["This month", "This week", "Today"],
          activeValue: "",
        },
      },
      {
        id: "SortBy",
        api: {
          searchQuery: "sortBy=",
          startQuery: "",
          query: "",
          values: ["popularity", "publishedAt"],
        },
        data: {
          name: "Sort By",
          active: false,
          values: ["Popularity", "Publication Date"],
          activeValue: "",
        },
      },
    ],
  };

  componentDidMount = () => {
    axios
      .get(`/everything?q=a&apiKey=${API_KEY}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  render() {
    const { filters } = this.state;

    const allFilters = filters.map((filter) => (
      <div key={filter.id} className={styles.Dropdown}>
        <button className={styles.Dropbtn}>
          <span>{filter.data.name}</span>
          <div className={styles.Dropbtn__arrow}></div>
        </button>
        <div className={styles.Dropdown__content}>
          {filter.data.values.map((value) => (
            <div key={value}>{value}</div>
          ))}
        </div>
      </div>
    ));

    return (
      <Fragment>
        <nav className={styles.Filters}>
          {allFilters}
          <Button btnType="Clearbtn">Clear Filters</Button>
        </nav>
      </Fragment>
    );
  }
}

export default Filters;
