const initialState = {
  data: [],
  tags: [],
  user: {},
  article: {},
  userAuth: { logStatus: false },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ARTICLES':
      return {
        ...state,
        data: action.data,
      };
    case 'FETCH_TAGS':
      return {
        ...state,
        tags: action.data,
      };
    case 'FETCH_USER_DATA':
      return {
        ...state,
        user: action.userData,
      };
    case 'CURRENT_ARTICLE':
      return {
        ...state,
        article: action.currentArticle,
      };
    case 'SIGNUP_RESPONSE':
      return {
        ...state,
        userAuth: {
          ...state.userAuth,
          loggedUser: action.signUpDetails.user,
          error: {},
        },
      };
    case 'SIGNIN_RESPONSE':
      return {
        ...state,
        userAuth: {
          ...state.userAuth,
          loggedUser: action.signInDetails.user,
          error: {},
        },
      };
    case 'ERROR_RESPONSE':
      return {
        ...state,
        userAuth: {
          ...state.userAuth,
          error: action.errorDetails,
        },
      };

    case 'SET_LOG_STATUS_TRUE':
      return {
        ...state,
        userAuth: {
          ...state.userAuth,
          logStatus: true,
        }
      }
    default:
      return state;
  }
}
