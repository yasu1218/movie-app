import { useState, useEffect } from 'react';
import { Text } from '@rneui/themed';
import MoviesSearchForm from '../forms/MoviesSearchForm';
import Loading from '../layout/Loading';
import { getMovies } from '../../services/api'; // Import the API function to fetch movies

// MoviesContainer component that serves as a container for the movies list.
// It manages the state of the movies, handles input changes, and fetches movies based on the selection input.
const MoviesContainer = ({ navigation }) => {

  // State variables
  const [isLoading, setIsLoading] = useState(false); // State to track loading status ("Loading results")
  const [movies, setMovies] = useState([]); // State to hold the list of movies
  const [selection, setSelection] = useState('popular'); // State to hold the selected category (now_playing, popular, top_rated, upcoming)

  // Function to handle input changes
  const handleInputChange = (newSelection) => {
    console.log('handleInputChange', newSelection);
    setSelection(newSelection); // Update the selection state with the new value -> will trigger effect 
  };

  // Use effect #1: Fetch on initial render
  // useEffect(() => {
  //   fetchMovies();
  // }, []);

  // Use effect: Fetch on selection change
  useEffect(() => {
    if (selection) {
      fetchMovies();
    }
  }, [selection]);

  // Debugging output
  // console.log('selection', selection);

  // Function to fetch movies
  const fetchMovies = async () => {

    setIsLoading(true);

    try {
      // Get movies based on the selection
      const movies = await getMovies(selection);
      setMovies(movies);

      // Debugging output
      console.log('movies', movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <>
      <MoviesSearchForm 
        onInputChange={handleInputChange} 
      />
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
