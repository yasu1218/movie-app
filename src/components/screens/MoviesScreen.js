import MediaListContainer from "../containers/MediaListContainer"
import { CATEGORIES_MOVIE, DEFAULT_CATEGORY_MOVIE } from "../../config/mediaConfig";

// Set categories and default category for movies
const categories = CATEGORIES_MOVIE; 
const defaultCategory = DEFAULT_CATEGORY_MOVIE; 

// Rendering MediaListContainer component with mediaType set to "movie" to display movies.
const MoviesScreen = ({ navigation }) => <MediaListContainer navigation={navigation}  mediaType="movie" categories={categories} defaultCategory={defaultCategory} />;

export default MoviesScreen;
