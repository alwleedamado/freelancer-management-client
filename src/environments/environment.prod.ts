import { endpoints } from "./endpoints";

export const environment = {
  production: true,
  baseUrl: 'https://localhost:44390/api/',
  ...endpoints
};
