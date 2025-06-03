import MoviesContainer from "../containers/MoviesContainer"

// MoviesScreen component that serves as the main entry point for the "Index" screen of the app.
// It renders the RecipesContainer component which is responsible for displaying a list of recipes.
const MoviesScreen = ({ navigation }) => <MoviesContainer navigation={navigation} />;

export default MoviesScreen;
