export default async function request(url, method = 'GET', token, data = null) {
  try {
    const headers = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    let body = null;

    if (data) {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(data);
    }

    const response = await fetch(url, {
      method,
      headers,
      body,
    });

    const res = await response.json();

    if (!response.ok) {
      throw new Error(res.message || 'Some server error!');
    }

    return res;
  } catch (error) {
    throw new Error(error.message);
  }
}
