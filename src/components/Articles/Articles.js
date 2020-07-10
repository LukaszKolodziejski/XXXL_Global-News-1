import React, { Component, Fragment } from "react";
import SingleArticle from "./SingleArticle/SingleArticle";
import styles from "./css/Articles.module.css";
class Articles extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className={styles.Articles}>
          <SingleArticle />
          <SingleArticle />
          <SingleArticle />
          <SingleArticle />
          <SingleArticle />
        </div>
        <button className={styles.LoadMoreButton}>Show More</button>
      </Fragment>
    );
  }
}

export default Articles;
