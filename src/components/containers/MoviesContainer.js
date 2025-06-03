import { useState } from 'react';
import { Text } from '@rneui/themed';
import MoviesSearchForm from '../forms/MoviesSearchForm';
import Loading from '../layout/Loading';

// MoviesContainer component that serves as a container for the movies list.
// It manages the state of the movies, handles input changes, and fetches movies based on the selection input.
const MoviesContainer = ({ navigation }) => {

  // State variables
  const [isLoading, setIsLoading] = useState(false); // State to track loading status ("Loading results")
  const [movies, setMovies] = useState([]); // State to hold the list of movies
  const [selection, setSelection] = useState('popular'); // State to hold the selected category (now_playing, popular, top_rated, upcoming)

  // Function to handle input changes
  const handleInputChange = (ingredient) => {
    setSelection(selection);
  }

  // Debugging output
  // console.log('selection', selection);

  // Function to fetch movies
  const fetchMovies = async () => {
    setIsLoading(true);

    // Get movies based on the selection
    // TODO: define API function to get movies based on selection
    // const movies = await getMovies(selection);
    const movies = [];
    setMovies(movies);

    setIsLoading(false);

    // Debugging output
    console.log('movies', movies);
  }

  return (
    <>
      {/* <MoviesSearchForm 
        onInputChange={handleInputChange} 
        onSubmit={fetchMovies}
      /> */}
      { isLoading 
        ? <Loading /> 
        : <>
            <Text>Hello!</Text>
            {/* <MoviesList navigation={navigation} movies={movies} />  */}
          </>
      }
    </>
  )
}

export default MoviesContainer;
