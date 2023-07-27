import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL || 'https://api.github.com';

export const api = axios.create({ baseURL });
