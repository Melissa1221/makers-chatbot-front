const BASE_URL = 'http://localhost:8000/api/v1';

export const api = {
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },

  async post<T, D = Record<string, unknown>>(endpoint: string, data?: D): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },

  async put<T, D = Record<string, unknown>>(endpoint: string, data: D): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },

  async delete(endpoint: string): Promise<void> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Network response was not ok');
  }
}; 