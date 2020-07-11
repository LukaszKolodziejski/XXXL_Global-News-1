import React, { Component, Fragment } from "react";
// import axios from "../../../axios-newsapi";
import NewsAPI from "newsapi";
import styles from "./css/Filters.module.css";

const newsapi = new NewsAPI("21dec1c6cdd34f6986cecd09f8d9c71e");

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

  componentDidMount = () => {
    // axios
    //   .get(
    //     `/everything?q=a&from=2020-07-11&apiKey=21dec1c6cdd34f6986cecd09f8d9c71e.json`
    //   )
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    newsapi.v2
      .everything({
        q: "a",
        from: "2017-12-01",
        language: "en",
        sortBy: "relevancy",
        page: 2,
      })
      .then((res) => {
        console.log(res);
        /*
      {
          status: "ok",
          articles: [...]
        }
        */
      })
      .catch((err) => console.log(err));
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
