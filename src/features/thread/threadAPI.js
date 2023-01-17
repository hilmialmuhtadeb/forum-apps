import { BASE_URL, fetchWithToken } from '../../utils/network';

async function getAllThreads() {
  const response = await fetch(`${BASE_URL}/threads`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getDetailThread(id) {
  const response = await fetch(`${BASE_URL}/threads/${id}`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function addCommentToThread({ id, comment }) {
  const response = await fetchWithToken(`${BASE_URL}/threads/${id}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: comment,
    }),
  });
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

export {
  getAllThreads,
  getDetailThread,
  addCommentToThread,
};
