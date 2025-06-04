// Configuration for media-related constants

// The base URL for fetching media images from TMDB
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

// The width of the images to be fetched for thumbnails
export const IMAGE_WIDTH_THUMBNAIL = 'w185';

// The width of the images to be fetched for media details
export const IMAGE_WIDTH_DETAILS = 'w500';

// Categories for Movies
export const CATEGORIES_MOVIE = [
    { label: 'Now Playing', value: 'now_playing' },
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];
// Default category for Movies
export const DEFAULT_CATEGORY_MOVIE = 'popular';

// Categories for TV shows
export const CATEGORIES_TV = [
    { label: 'Airing Today', value: 'airing_today' },
    { label: 'On the Air', value: 'on_the_air' },
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
  ];
// Default category for TV shows
export const DEFAULT_CATEGORY_TV = 'popular';

// Labels for different media types
export const MEDIA_LABELS = {
  movie: {
    releaseDate: 'Release Date',
  },
  tv: {
    releaseDate: 'First Air Date',
  },
};
