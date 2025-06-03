import MoviesContainer from "../containers/MoviesContainer"

// Categories for Movies
const categories = [
    { label: 'Now Playing', value: 'now_playing' },
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];
const defaultCategory = 'popular';

// Rendering MoviesContainer component with mediaType set to "movie" to display movies.
const MoviesScreen = ({ navigation }) => <MoviesContainer navigation={navigation}  mediaType="movie" categories={categories} defaultCategory={defaultCategory} />;

export default MoviesScreen;
