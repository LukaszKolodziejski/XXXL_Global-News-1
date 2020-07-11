import React, { Component, Fragment } from "react";
import SingleArticle from "./SingleArticle/SingleArticle";
// import Button from "../UI/Button/Button";
import Button from "../../components/UI/Button/Button";
import styles from "./css/Articles.module.css";
class Articles extends Component {
  state = {};
  render() {
    return (
      <main className={styles.Articles}>
        <div className={styles.Articles__Content}>
          <SingleArticle />
          <SingleArticle />
          <SingleArticle />
          <SingleArticle />
          <SingleArticle />
        </div>
        <div className={styles.Articles__Button}>
          <Button btnType="LoadMoreButton">Show More</Button>
        </div>
      </main>
    );
  }
}

export default Articles;
