let initialState = {data: [], tags:[], user: { }, article: {} };

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case 'FETCH_ARTICLES':
      return {
        ...state,
        data: action.data
      }
    case 'FETCH_TAGS':
      return {
        ...state,
        tags: action.data
      }

    case 'FETCH_USER_DATA':
     return {
       ...state,
       user: action.userData
     }
     case 'CURRENT_ARTICLE':
      return {
        ...state,
        article: action.currentArticle
      }
    default :
      return state;
  }
}