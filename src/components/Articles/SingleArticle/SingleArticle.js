import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./css/SingleArticle.module.css";
class SingleArticle extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <article className={styles.SingleArticle}>
          <img
            className={styles.SingleArticle__image}
            src="https://via.placeholder.com/150"
          ></img>
          <div className={styles.Information}>
            <span className={styles.Information__data}>Nov 29, 2018</span>
            <span className={styles.Information__data}>John Smith</span>
            <span className={styles.Information__data}>the Verge</span>
          </div>
          <h3 className={styles.SingleArticle__title}>Title Article</h3>
          <div className={styles.SingleArticle__description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            quia error laudantium. Accusantium ullam facere tempore, voluptas
            rerum atque maxime.
          </div>
          <Link to="/article" className={styles.SingleArticle__CTA}>
            Read More
          </Link>
        </article>
      </Fragment>
    );
  }
}

export default SingleArticle;
