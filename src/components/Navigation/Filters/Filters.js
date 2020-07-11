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
          active: false,
          values: ["tech", "travel", "politics", "sports"],
        },
        data: {
          name: "Topic",
          dropdownName: "Topic",
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
          active: false,
          values: null,
        },
        data: {
          name: "Time",
          dropdownName: "Time",
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
          active: false,
          values: ["popularity", "publishedAt"],
        },
        data: {
          name: "Sort By",
          dropdownName: "Sort By",
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

  dropdownContentHandler = (value, filterId) => {
    const { filters } = { ...this.state };

    filters.forEach((filter) => {
      if (filter.id === filterId) {
        const { activeValue } = filter.data;
        if (activeValue !== value) {
          filter.data.dropdownName = value;
          filter.data.activeValue = value;
          filter.api.active = true;
          filter.api.query = "jeszcze nie wiem";
        } else {
          filter.data.dropdownName = filter.data.name;
          filter.data.activeValue = "";
          filter.api.active = false;
          filter.api.query = filter.api.startQuery;
        }
      }
    });
    this.setState({ filters });
  };

  // componentDidUpdate = (prevProps, prevState) => console.log("Update <<");

  render() {
    const { filters } = this.state;

    const allFilters = filters.map((filter) => (
      <div key={filter.id} className={styles.Dropdown}>
        <Button btnType="Dropbtn">{filter.data.dropdownName}</Button>
        <div className={styles.Dropdown__content}>
          {filter.data.values.map((value) => {
            return (
              <div
                key={value}
                onClick={() => this.dropdownContentHandler(value, filter.id)}
              >
                {value}
              </div>
            );
          })}
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
