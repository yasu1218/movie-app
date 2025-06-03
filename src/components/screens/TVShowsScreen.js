import MoviesContainer from "../containers/MoviesContainer"

// Categories for TV shows
const categories = [
    { label: 'Airing Today', value: 'airing_today' },
    { label: 'On the Air', value: 'on_the_air' },
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
  ];
const defaultCategory = 'popular';

// Rendering MoviesContainer with mediaType set to "tv" to display TV shows
const TVShowsScreen = ({ navigation }) => <MoviesContainer navigation={navigation} mediaType="tv" categories={categories} defaultCategory={defaultCategory} />;

export default TVShowsScreen;
