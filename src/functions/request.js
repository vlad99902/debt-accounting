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
      throw new Error(data.message || 'Something wrong in fetch');
    }

    if (method !== 'DELETE' && method !== 'PUT') return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
