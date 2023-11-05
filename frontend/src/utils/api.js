```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchAgents = () => api.get('/agents');
export const fetchTasks = () => api.get('/tasks');
export const fetchPersonas = () => api.get('/personas');
export const fetchMarketplaceTransactions = () => api.get('/transactions');

export const createUser = (userData) => api.post('/users', userData);
export const createAgent = (agentData) => api.post('/agents', agentData);
export const createTask = (taskData) => api.post('/tasks', taskData);
export const createPersona = (personaData) => api.post('/personas', personaData);
export const createTransaction = (transactionData) => api.post('/transactions', transactionData);

export const updateUser = (id, updatedData) => api.put(`/users/${id}`, updatedData);
export const updateAgent = (id, updatedData) => api.put(`/agents/${id}`, updatedData);
export const updateTask = (id, updatedData) => api.put(`/tasks/${id}`, updatedData);
export const updatePersona = (id, updatedData) => api.put(`/personas/${id}`, updatedData);
export const updateTransaction = (id, updatedData) => api.put(`/transactions/${id}`, updatedData);

export const deleteUser = (id) => api.delete(`/users/${id}`);
export const deleteAgent = (id) => api.delete(`/agents/${id}`);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);
export const deletePersona = (id) => api.delete(`/personas/${id}`);
export const deleteTransaction = (id) => api.delete(`/transactions/${id}`);

export default api;
```