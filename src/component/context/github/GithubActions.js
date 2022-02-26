import axios from 'axios';
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const header = {
  Authorization: `token ${GITHUB_TOKEN}`,
};

// const github = axios.create({
//   baseURL: GITHUB_URL,
//   headers: {
//     Authorization: `token ${GITHUB_TOKEN}`,
//   },
// });

//search users by input
export const searchUsers = async (user) => {
  console.log(user);
  const params = new URLSearchParams({
    q: user,
  });

  const response = await axios.get(
    `${GITHUB_URL}/search/users?${params}`,
    header
  );
  console.log(response.data.items);
  return response.data.items;
};

//get single user
// export const fetchUser = async (login) => {
//   const response = await github.get(`${GITHUB_URL}/users/${login}`);
//   console.log(response.data);
//   if (response.status === 404) {
//     window.location = '/notfound';
//   } else {
//     return response.data;
//   }
// };

//get user repo
// export const getUserRepo = async (login) => {
//   const params = new URLSearchParams({
//     sort: 'created',
//     per_page: 10,
//   });

//   const response = await axios.get(
//     `${GITHUB_URL}/users/${login}/repos?${params}`
//   );
//   console.log(response.data);
//   return response.data;
// };

//get user and repo at the same time
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    axios.get(`${GITHUB_URL}/users/${login}`),
    axios.get(`${GITHUB_URL}/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
