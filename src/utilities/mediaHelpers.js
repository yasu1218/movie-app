// Media helper methods

// getTitle: Returns the title of the media based on its type
export const getTitle = (media, mediaType) => {
  if (mediaType === 'movie') {
    return media.title || 'N/A';
  }
  else if (mediaType === 'tv') {
    return media.name || 'N/A';
  }
  return media.title || media.name || 'Untitled';
};

// getReleaseDate: Returns the release date of the media based on its type
export const getReleaseDate = (media, mediaType) => {
  if (mediaType === 'movie') {  
    return media.release_date || 'N/A';
  }
  else if (mediaType === 'tv') {
    return media.first_air_date || 'N/A';
  }
  return media.release_date || media.first_air_date || 'N/A';
}

// getReleaseDateLabel: Returns the release date label of the media based on its type
import { MEDIA_LABELS } from '../config/mediaConfig';
export const getReleaseDateLabel = (mediaType) => MEDIA_LABELS[mediaType]?.releaseDate || 'Release Date';
