import * as actionTypes from "./actionTypes";
import axios from "../../axios-newsapi";

const MAIN_API = `/everything?q=a&apiKey=`;
const API_KEY = "21dec1c6cdd34f6986cecd09f8d9c71e";
const API = `${MAIN_API}${API_KEY}`;

export const fetchArticlesSuccess = (articles) => {
  return {
    type: actionTypes.FETCH_ARTICLES_SUCCESS,
    articles: articles,
  };
};

export const fetchArticlesFail = (error) => {
  return {
    type: actionTypes.FETCH_ARTICLES_FAIL,
    error: error,
  };
};

export const fetchArticlesStart = () => {
  return {
    type: actionTypes.FETCH_ARTICLES_START,
  };
};

export const fetchArticles = () => {
  return (dispatch) => {
    dispatch(fetchArticlesStart());
    axios
      .get(API)
      .then((res) => {
        // console.log(res.data);
        const fetchArticles = [];
        for (let key in res.data) {
          fetchArticles.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchArticlesSuccess(fetchArticles));
      })
      .catch((err) => {
        dispatch(fetchArticlesFail(err));
      });
  };
};
