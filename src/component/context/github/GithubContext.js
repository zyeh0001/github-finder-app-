import React, { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';
import axios from 'axios';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //get initial user (testing purposes)
  // const fetchData = async () => {
  //   setLoading();
  //   const header = {
  //     Authorization: `token ${GITHUB_TOKEN}`,
  //   };
  //   const response = await axios.get(`${GITHUB_URL}/users`, header);
  //   console.log(response.data);
  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: response.data,
  //   });
  // };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
