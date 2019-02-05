const initialState = {
  data: [],
  tags: [],
  user: {},
  article: {},
  userAuth: {},
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
          signup: action.signUpDetails.user,
        },
      };
    case 'SIGNIN_RESPONSE':
      return {
        ...state,
        userAuth: {
          ...state.userAuth,
          signin: action.signInDetails.user,
        },
      };
    default:
      return state;
  }
}
