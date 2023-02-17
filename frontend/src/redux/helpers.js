import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://myportfolio-be.onrender.com' : 'http://localhost:3001';

export const request = async ({ subdirectory = "", token = "", method = "GET", data = {} }) => {
  try {
    const options = {
      url: `${BASE_URL}/${subdirectory}`,
      headers: { authorization: token },
      params: (method === "GET") ? data : {},
      method: method,
      data: data,
    };

    const res = await axios(options);

    return res;
  } catch (err) {
    let message = err.response.data.error.message;
    throw Array.isArray(message) ? message : [message];
  }
};

export function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (m, p1) => p1.toUpperCase())
};
