import axios from 'axios';

export const nestRef = axios.create({
  baseURL: `http://localhost:${process.env.PORT}/api`,
});
