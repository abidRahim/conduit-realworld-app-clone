export const fecthArticles = () => {
  return async (dispatch) => {
    const res = await fetch('https://conduit.productionready.io/api/articles?limit=20&offset=0');
    const articlesData = await res.json();
       
    dispatch({
      type: 'FETCH_ARTICLES',
      data: articlesData.articles
    })
  }
};

export const fetchTags = () => {
  return async (dispatch) => {
    const res = await fetch('https://conduit.productionready.io/api/tags');
    const tagsData = await res.json();
    dispatch({
      type: 'FETCH_TAGS',
      data: tagsData.tags
    })
  }
}

export const fetchUser = (username , callBack) => {
  return async (dispatch) => {
    const profiles = await fetch(`https://conduit.productionready.io/api/profiles/${username}`);
    const userProfile = await profiles.json();

    const favourites = await fetch(`https://conduit.productionready.io/api/articles?favorited=${username}`);
    const favouriteArticles = await favourites.json();

    const author = await fetch(`https://conduit.productionready.io/api/articles?author=${username}`)
    const ownArticles = await author.json();

    dispatch({
      type: 'FETCH_USER_DATA',
      userData: {
        userProfile,
        favouriteArticles: favouriteArticles.articles,
        ownArticles: ownArticles.articles
      }
    });

    callBack(true);
  }
}

export const fetchCurrentArticle = (slug, callBack) => {
  return async (dispatch) => {
    const slugArticle = await fetch(`https://conduit.productionready.io/api/articles/${slug}`);
    const currentArticle = await slugArticle.json();

    const slugComments = await fetch(`https://conduit.productionready.io/api/articles/${slug}/comments`);
    const articleComments = await slugComments.json();

    dispatch({
      type: 'CURRENT_ARTICLE',
      currentArticle: {
        currentArticle: currentArticle.article,
        articleComments
      }
    });

    callBack(true);
  }
}