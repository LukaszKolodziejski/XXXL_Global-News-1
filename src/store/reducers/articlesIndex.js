import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: true,
  articles: [],
};

const fetchArticlesStart = (state, action) => ({
  ...state,
  loading: true,
});

const fetchArticlesSuccess = (state, action) => ({
  ...state,
  loading: false,
  articles: action.articles,
});

const fetchArticlesFail = (state, action) => ({
  ...state,
  loading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES_START:
      return fetchArticlesStart(state, action);
    case actionTypes.FETCH_ARTICLES_SUCCESS:
      return fetchArticlesSuccess(state, action);
    case actionTypes.FETCH_ARTICLES_FAIL:
      return fetchArticlesFail(state, action);
    default:
      return state;
  }
};

export default reducer;
