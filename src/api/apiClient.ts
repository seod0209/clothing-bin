import axios, { type AxiosInstance } from 'axios';

export const GO_DATA_BASE_URL = process.env.NEXT_PUBLIC_GO_DATA_BASE_URL;

function createApi(): AxiosInstance {
  const api = axios.create({
    baseURL: GO_DATA_BASE_URL,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return api;
}

export const API = createApi();
