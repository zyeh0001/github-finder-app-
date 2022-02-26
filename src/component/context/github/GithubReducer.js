const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, users: action.payload, isLoading: false };
    // case 'GET_USER': //get single user
    //   return { ...state, user: action.payload, isLoading: false };
    // case 'GET_REPOS': //get single user repo
    //   return { ...state, isLoading: false, repos: action.payload };
    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        isLoading: false,
      };
    case 'SET_LOADING':
      return { ...state, isLoading: true };
    case 'CLEAR_USERS':
      return { ...state, users: [], isLoading: false };
    default:
      return state;
  }
};

export default githubReducer;
