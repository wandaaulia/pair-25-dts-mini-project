import axios from 'axios';

const API_KEY = 'dc5ccb94e96da9e2ca80888a86e032a3';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
