import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import SingleArticle from "./SingleArticle/SingleArticle";
import Button from "../../components/UI/Button/Button";
import styles from "./css/Articles.module.css";
class Articles extends Component {
  state = {
    countArticles: 6, // in Redux
  };

  componentDidMount = () => this.props.onFetchArticles();

  render() {
    const { countArticles } = this.state;
    const { loading, articles } = this.props;
    let allArticles = [];

    if (!loading) {
      for (let key in articles[2]) {
        key !== "id" &&
          allArticles.push(<SingleArticle key={key} data={articles[2][key]} />);
      }
    } else {
      allArticles = <p>Loading ...</p>;
    }

    //TODO: If clearButton -> countArticles = 6 and allArticles.empty()

    // !loading
    //   ? (allArticles = <SingleArticle data={articles[2][0]} />)
    //   : (allArticles = <p>Loading ...</p>);

    return (
      <main className={styles.Articles}>
        <div className={styles.Articles__Content}>{allArticles}</div>
        <div className={styles.Articles__Button}>
          <Button btnType="LoadMoreButton" clicked={this.loadMoreButtonHandler}>
            Show More
          </Button>
        </div>
      </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
