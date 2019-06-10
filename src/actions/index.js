export const fecthArticles = (currentPage, callBack) => {
  return async (dispatch) => {
    const res = await fetch(`https://conduit.productionready.io/api/articles?limit=10&offset=${currentPage * 10}`);
    const articlesData = await res.json();

    dispatch({
      type: 'FETCH_ARTICLES',
      data: articlesData.articles,
    });

    callBack(true);
  };
};

export const fetchTags = () => {
  return async (dispatch) => {
    const res = await fetch('https://conduit.productionready.io/api/tags');
    const tagsData = await res.json();
    dispatch({
      type: 'FETCH_TAGS',
      data: tagsData.tags,
    });
  };
};

export const fetchUser = (username, callBack) => {
  return async (dispatch) => {
    const profiles = await fetch(`https://conduit.productionready.io/api/profiles/${username}`);
    const userProfile = await profiles.json();

    const favourites = await fetch(`https://conduit.productionready.io/api/articles?favorited=${username}`);
    const favouriteArticles = await favourites.json();

    const author = await fetch(`https://conduit.productionready.io/api/articles?author=${username}`);
    const ownArticles = await author.json();

    dispatch({
      type: 'FETCH_USER_DATA',
      userData: {
        userProfile,
        favouriteArticles: favouriteArticles.articles,
        ownArticles: ownArticles.articles,
      },
    });

    callBack(true);
  };
};
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
        articleComments,
      },
    });
    callBack(true);
  };
};

export const fetchSignUpDetails = (username, email, password) => {
  const data = {
    user: {
      username,
      email,
      password,
    },
  };
  // console.log(JSON.stringify(data));

  return async (dispatch) => {
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify(data),
    };
    const signUp = await fetch('https://conduit.productionready.io/api/users', config);
    const signUpDetails = await signUp.json();
    // console.log(signUpDetails);

    dispatch({
      type: 'SIGNUP_RESPONSE',
      signUpDetails,
    });
  };
};

export const fetchSignInDetails = (email, password, callbackResponse) => {
  const data = {
    user: {
      email,
      password,
    },
  };

  return async () => {
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify(data),
    };
    const signIn = await fetch('https://conduit.productionready.io/api/users/login', config);
    callbackResponse(signIn);
  };
};

export const storeSignInDetails = (response) => {
  return async (dispatch) => {
    const signInDetails = await response.json();
    sessionStorage.setItem('jwtToken', signInDetails.user.token);

    dispatch({
      type: 'SIGNIN_RESPONSE',
      signInDetails,
    });
  };
};

export const fetchError = (response) => {
  return async (dispatch) => {
    const errorDetails = await response.json();

    dispatch({
      type: 'ERROR_RESPONSE',
      errorDetails,
    });
  };
};

export const setSessionToken = () => {
  let token = sessionStorage.getItem('jwtToken');

  if(!token || token === '') {
    return;
  } else {
    return({
      type: 'SET_LOG_STATUS_TRUE',
      status: true,
    });
  }
}