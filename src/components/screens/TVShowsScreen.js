import MoviesContainer from "../containers/MoviesContainer"
import { CATEGORIES_TV, DEFAULT_CATEGORY_TV } from "../../config/mediaConfig";

const categories = CATEGORIES_TV;
const defaultCategory = DEFAULT_CATEGORY_TV;

// Rendering MoviesContainer with mediaType set to "tv" to display TV shows
const TVShowsScreen = ({ navigation }) => <MoviesContainer navigation={navigation} mediaType="tv" categories={categories} defaultCategory={defaultCategory} />;

export default TVShowsScreen;
