import React, { Component, Fragment } from "react";
import axios from "../../../axios-newsapi";
import styles from "./css/Filters.module.css";
import Button from "../../UI/Button/Button";

const MAIN_API = `/everything?q=a&apiKey=`;
const API_KEY = "21dec1c6cdd34f6986cecd09f8d9c71e";
const API = `${MAIN_API}${API_KEY}`;
class Filters extends Component {
  state = {
    filters: [
      {
        id: "Topic",
        api: {
          mainFullStartQuery: "q=a&",
          searchQuery: "q=",
          startQuery: "a",
          query: "",
          active: false,
        },
        data: {
          name: "Topic",
          dropdownName: "Topic",
          values: [
            { query: "tech", name: "Tech" },
            { query: "sports", name: "Sports" },
            { query: "travel", name: "Travel" },
            { query: "politics", name: "Politics" },
          ],
          activeValue: "",
        },
      },
      {
        id: "Dates",
        api: {
          mainFullStartQuery: "",
          searchQuery: "from=",
          startQuery: "",
          query: "",
          active: false,
        },
        data: {
          name: "Time",
          dropdownName: "Time",
          values: [
            { query: "month", name: "This month" },
            { query: "week", name: "This week" },
            { query: "today", name: "Today" },
          ],
          activeValue: "",
        },
      },
      {
        id: "SortBy",
        api: {
          mainFullStartQuery: "",
          searchQuery: "sortBy=",
          startQuery: "",
          query: "",
          active: false,
        },
        data: {
          name: "Sort By",
          dropdownName: "Sort By",
          values: [
            { query: "popularity", name: "Popularity" },
            { query: "publishedAt", name: "Publication Date" },
          ],
          activeValue: "",
        },
      },
    ],
  };

  componentDidMount = () => {
    axios
      .get(API)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  dropdownContentHandler = (value, filterId) => {
    const { filters } = { ...this.state };

    filters.forEach((filter) => {
      const { activeValue } = filter.data;
      if (filter.id === filterId) {
        if (activeValue !== value.name) {
          filter.data.dropdownName = value.name;
          filter.data.activeValue = value.name;
          filter.api.active = true;
          filterId === "Dates"
            ? (filter.api.query = this.getIsoDate(value.query))
            : (filter.api.query = value.query);
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

  componentDidUpdate = (prevProps, prevState) => {
    const queryApi = prevState.filters
      .map((filter) =>
        filter.api.active
          ? `${filter.api.searchQuery}${filter.api.query}&`
          : filter.api.mainFullStartQuery
      )
      .join("");
    console.log(queryApi);

    const newApi = `/everything?${queryApi}apiKey=${API_KEY}`;
    axios
      .get(newApi)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  getIsoDate = (time) => {
    let iso;
    const today = new Date();
    const week = new Date();
    const month = new Date();
    week.setDate(week.getDate() - 6);
    month.setDate(month.getDate() - 30);
    time === "today" && (iso = today);
    time === "week" && (iso = week);
    time === "month" && (iso = month);
    iso = iso.toISOString().toString().slice(0, 10);
    return iso;
  };

  clearButtonHandler = () => {
    const { filters } = { ...this.state };
    filters.forEach((filter) => {
      filter.data.dropdownName = filter.data.name;
      filter.data.activeValue = "";
      filter.api.active = false;
      filter.api.query = filter.api.startQuery;
    });
    this.setState({ filters });
  };

  render() {
    const { filters } = this.state;

    const allFilters = filters.map((filter) => (
      <div key={filter.id} className={styles.Dropdown}>
        <Button btnType="Dropbtn">{filter.data.dropdownName}</Button>
        <div className={styles.Dropdown__content}>
          {filter.data.values.map((value) => {
            return (
              <div
                key={value.name}
                onClick={() => this.dropdownContentHandler(value, filter.id)}
              >
                {value.name}
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
          <Button btnType="Clearbtn" clicked={this.clearButtonHandler}>
            Clear Filters
          </Button>
        </nav>
      </Fragment>
    );
  }
}

export default Filters;
