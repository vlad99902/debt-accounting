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

    if (!response.ok) {
      throw new Error(response.message || 'Some server error!');
    }

    const res = await response;

    if (method !== 'DELETE' && method !== 'PUT') return res.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
