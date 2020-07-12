import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { Redirect } from "react-router-dom";
import styles from "./css/FullSingleArticle.module.css";
import Button from "../../UI/Button/Button";
class FullSingleArticle extends Component {
  state = {
    changeArticlePage: false,
  };
  readMoreHandler = () => this.setState({ changeArticlePage: true });

  convertDate = (date) => {
    const d = new Date(date);
    let newD = d.toString();
    newD = `${newD.slice(4, 10)}, ${newD.slice(11, 15)}`;
    return newD;
  };

  render() {
    const { changeArticlePage } = this.state;
    const { data } = this.props;
    const convertPublishedAt = this.convertDate(data.publishedAt);

    return (
      <Fragment>
        <article className={styles.FullSingleArticle}>
          <img
            className={styles.SingleArticle__image}
            src={data.urlToImage}
          ></img>
          <div className={styles.Information}>
            <span className={styles.Information__data}>
              {convertPublishedAt}
            </span>
            <span className={styles.Information__data}>{data.author}</span>
            <Link
              to={data.url}
              className={styles.Information__data}
              target="_blank"
            >
              {data.source.name}
            </Link>
          </div>
          <h3 className={styles.SingleArticle__title}>{data.title}</h3>
          <div className={styles.SingleArticle__description}>
            {data.description}
          </div>
          <Button btnType="ReadMore" clicked={this.readMoreHandler}>
            Read More
          </Button>
          {changeArticlePage && <Redirect to="/article" />}
        </article>
      </Fragment>
    );
  }
}

export default FullSingleArticle;
