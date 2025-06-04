import MoviesContainer from "../containers/MoviesContainer"
import { CATEGORIES_MOVIE, DEFAULT_CATEGORY_MOVIE } from "../../config/mediaConfig";

const categories = CATEGORIES_MOVIE; // Importing movie categories from config
const defaultCategory = DEFAULT_CATEGORY_MOVIE; // Importing default movie category from config

// Rendering MoviesContainer component with mediaType set to "movie" to display movies.
const MoviesScreen = ({ navigation }) => <MoviesContainer navigation={navigation}  mediaType="movie" categories={categories} defaultCategory={defaultCategory} />;

export default MoviesScreen;
