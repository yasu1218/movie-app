import axios from 'axios';
import qs from 'qs';

import { API_KEY, API_URL } from '../config/apiConfig';

/* 
 * getMovies(selection)
 * Fetches a list of movies based on the selection criteria.
 *   selection: 'popular', 'top_rated', 'now_playing', 'upcoming'. 
 */
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

/* 
 * getMediaDetails(media_id)
 * Fetches details of one media (movie or TV) based on the media ID provided.
 */
export const getMediaDetails = async (media_id) => {

  // console.log('getMediaDetails media_id', media_id);

  // Validate media_id
  if (!media_id || typeof media_id !== 'number') {
    throw new Error('Invalid media_id provided.');
  }

  try {

    // console.log('Fetching media details for media_id:', media_id);
    // console.log('Request URL:', `${API_URL}/movie/${media_id}?api_key=${API_KEY}`);

    const response = await axios.get(`${API_URL}/movie/${media_id}`, {
      params: {
        api_key: API_KEY, 
      }
    });

    // console.log('Fetched media details:', response.data);

    return response.data;

  } catch (error) {
    console.error('Error fetching media details:', error);
    throw error;
  } 
}
