import { useState, useEffect } from 'react';
import { Text } from '@rneui/themed';
import MediaCategorySelectionForm from '../forms/MediaCategorySelectionForm';
import Loading from '../layout/Loading';
import { getMovies } from '../../services/api'; // Import the API function to fetch movies
import MediaList from '../lists/MediaList'; // Import the MediaList component

// MediaListContainer component that serves as a container for the movies list.
// It manages the state of the movies, handles input changes, and fetches movies based on the selection input.
const MediaListContainer = ({ navigation, mediaType, categories, defaultCategory }) => {

  // State variables
  const [isLoading, setIsLoading] = useState(false); // State to track loading status ("Loading results")
  const [movies, setMovies] = useState([]); // State to hold the list of movies
  const [selection, setSelection] = useState(defaultCategory); // State to hold the selected category.

  // Function to handle input changes
  const handleInputChange = (newSelection) => {
    // console.log('handleInputChange', newSelection);
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

  // Test method for testing purposes:
  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
  const DELAY_TIME = 0; // Delay for testing purposes to check loading state. Set to e.g., 3000 when testing. 

  // Debugging output
  // console.log('selection', selection);

  // Function to fetch movies
  const fetchMovies = async () => {

    setIsLoading(true);

    try {
      // Get movies based on the selection
      //const movies = await getMovies(selection, mediaType);
      const [movies] = await Promise.all([
        getMovies(selection, mediaType), // Fetch movies from the API
        sleep(DELAY_TIME) // Simulate a delay for testing purposes
      ]);

      setMovies(movies);

      // Debugging output
      // console.log('movies', movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <>
      <MediaCategorySelectionForm 
        onInputChange={handleInputChange} 
        categories={categories} 
        defaultCategory={defaultCategory}
      />
      { isLoading 
        ? <Loading /> 
        : <>
            <MediaList navigation={navigation} movies={movies} mediaType={mediaType} /> 
          </>
      }
    </>
  )
}

export default MediaListContainer;
