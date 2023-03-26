import axios from 'axios';
import getConfig from 'next/config';
const conf = getConfig();

export const nestRef = axios.create({
  baseURL: `http://localhost:${conf.publicRuntimeConfig.port}/api/`,
});
