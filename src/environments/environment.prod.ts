import { endpoints } from "./endpoints";

export const environment = {
  production: true,
  baseUrl: 'https://api.bmanager.tk/',
  ...endpoints
};
