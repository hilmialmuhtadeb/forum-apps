import { getAccessToken } from './auth';

const BASE_URL = 'https://forum-api.dicoding.dev/v1';

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

export {
  BASE_URL,
  fetchWithToken,
};
