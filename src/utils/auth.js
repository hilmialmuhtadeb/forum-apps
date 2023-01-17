function getAccessToken() {
  return localStorage.getItem('access_token');
}

function putAccessToken(token) {
  localStorage.setItem('access_token', token);
}

function isAccessTokenExist() {
  return !!getAccessToken();
}

export {
  getAccessToken,
  putAccessToken,
  isAccessTokenExist,
};
