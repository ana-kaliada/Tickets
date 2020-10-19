const baseURL = 'https://aviasales-test-api.java-mentor.com';

export const getData = async (url, obj = null) => {
  const res = await fetch(`${baseURL}${url}`, obj);
  if (!res.ok) {
    throw res.status;
  }
  return res;
};

export const getSearchId = async () => {
  const res = await getData('/search');
  const result = (await res.json()).searchId;

  return result;
};

export const getTickets = async (token) => {
  const response = await getData(`/tickets?searchId=${token}`);

  return response;
};
