import axios from 'axios';
import qs from 'qs';

import { API_KEY, API_URL } from '../config/apiConfig';


export const getMovies = async (selection = 'popular') => {

  const page = 1; // Hardcoded for the moment. 
  console.log('getMovies selection', selection);

  try {
    const response = await axios.get(`${API_URL}/movie/${selection}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: page,
      }
    });

    return response.data.results;

  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
}

