import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import styles from "./css/FullSingleArticle.module.css";
import Button from "../../UI/Button/Button";
class FullSingleArticle extends Component {
  state = {};

  convertDate = (date) => {
    const d = new Date(date);
    let newD = d.toString();
    newD = `${newD.slice(4, 10)}, ${newD.slice(11, 15)}`;
    return newD;
  };

  render() {
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
        </article>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articlesIndex.articles,
  loading: state.articlesIndex.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchArticles: () => dispatch(actions.fetchArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FullSingleArticle);
