import * as actionTypes from "../actions/actionTypes";

const initialState = {
  status: "ok",
  totalResults: 36591,
  articles: [
    {
      source: {
        id: null,
        name: "Lifehacker.com",
      },
      author: "Elizabeth Yuko",
      title: "How to Read a Trail Map",
      description:
        "Going on walks and hikes in uncrowded parks is one of the few activities that we can still do without having to worry too much about spreading COVID-19 (assuming that you’re either by yourself, with the people you’ve been quarantining with, or with other peop…",
      url: "https://lifehacker.com/how-to-read-a-trail-map-1844344804",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/xynvcf94yciusntl6uly.jpg",
      publishedAt: "2020-07-11T14:00:00Z",
      content:
        "Going on walks and hikes in uncrowded parks is one of the few activities that we can still do without having to worry too much about spreading COVID-19 (assuming that youre either by yourself, with t… [+3605 chars]",
    },
  ],
};

const fetchArticlesStart = (state, action) => ({
  ...state,
  loading: true,
});

const fetchArticlesSuccess = (state, action) => ({
  ...state,
  loading: true,
  articles: action.articles,
});

const fetchArticlesFail = (state, action) => ({
  ...state,
  loading: true,
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
