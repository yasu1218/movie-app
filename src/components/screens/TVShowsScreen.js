import MediaListContainer from "../containers/MediaListContainer"
import { CATEGORIES_TV, DEFAULT_CATEGORY_TV } from "../../config/mediaConfig";

// Set the categories and default category for TV shows
const categories = CATEGORIES_TV;
const defaultCategory = DEFAULT_CATEGORY_TV;

// Rendering MediaListContainer with mediaType set to "tv" to display TV shows
const TVShowsScreen = ({ navigation }) => <MediaListContainer navigation={navigation} mediaType="tv" categories={categories} defaultCategory={defaultCategory} />;

export default TVShowsScreen;
