// app/api/config.js

export const BASE_URL = "https://s3ga-front.nomoredomainswork.ru/api";

export const endpoints = {
  games: `${BASE_URL}/games`,
  login: `${BASE_URL}/auth/login`,
  signup: `${BASE_URL}/auth/signup`,
  me: `${BASE_URL}/auth/me`,
};

export default endpoints;
