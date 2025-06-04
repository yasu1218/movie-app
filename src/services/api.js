import axios from 'axios';
import qs from 'qs';

import { API_KEY, API_URL } from '../config/apiConfig';

/* 
 * getMovies(selection)
 * Fetches a list of movies based on the selection criteria.
 *   selection: 'popular', 'top_rated', 'now_playing', 'upcoming'. 
 */
export const getMovies = async (selection = 'popular', mediaType = 'movie') => {

  const page = 1; // Hardcoded for the moment. 
  
  // console.log('getMovies selection', selection);
  // console.log('getMovies URL: ', `${API_URL}/${mediaType}/${selection}`);

  try {
    const response = await axios.get(`${API_URL}/${mediaType}/${selection}`, {
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
export const getMediaDetails = async (mediaId, mediaType) => {

  // console.log('getMediaDetails mediaType', mediaId);

  // Validate mediaId
  if (!mediaId || typeof mediaId !== 'number') {
    throw new Error('Invalid media_id provided.');
  }

  try {

    // console.log('Fetching media details for media_id:', media_id);
    // console.log('Request URL:', `${API_URL}/movie/${media_id}?api_key=${API_KEY}`);

    const response = await axios.get(`${API_URL}/${mediaType}/${mediaId}`, {
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

/* 
 * searchMedia(searchTerm, searchType)
 * Searches for media (movies, multi or TV shows) based on the search term and type.
 */
export const searchMedia = async (searchTerm, searchType = 'multi') => {

  const page = 1; // Hardcoded for the moment. 
  
  // console.log('getMovies selection', selection);
  // console.log('getMovies URL: ', `${API_URL}/${mediaType}/${selection}`);

  try {
    const response = await axios.get(`${API_URL}/search/${searchType}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        query: searchTerm,
        page: page,
      }
    });

    // Filter out 'person' type if using multi as search type.
    if (searchType === 'multi') {
      // new filtered results with only movies and TV shows
      const filteredResults = response.data?.results?.filter(
        item => item.media_type === 'movie' || item.media_type === 'tv');
      // replace the results with filtered ones and return the response
      return { ...response.data, results: filteredResults };
    }

    // console.log('Search results:', response.data);
    
    return response.data;

  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
}
