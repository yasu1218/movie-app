import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MediaSearchForm from '../forms/MediaSearchForm';
import MoviesList from '../lists/MoviesList';
import Loading from '../layout/Loading';
import { searchMedia } from '../../services/api';

const SearchContainer = ({ navigation }) => {
  // States
  const [searchResults, setSearchResults] = useState(null); // State to hold search results
  const [isLoading, setIsLoading] = useState(false);  // State to manage loading state

  // Method to handle search input and type
  const handleSearch = async (searchTerm, searchType) => {
    // Validate search term
    if (!searchTerm.trim()) {
      alert('Please enter a search keyword.');
      return;
    }
    // Search media based on the search term and type
    setIsLoading(true);
    try {
      const data = await searchMedia(searchTerm, searchType);
      // console.log("searchResults", searchResults);
      setSearchResults(data?.results || []);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Search form for input and type selection */}
      <MediaSearchForm onSearch={handleSearch} />

      {/* Display loading indicator or search results */}
      {isLoading ? (
        <Loading />
      ) : searchResults === null ? (
        <Text style={styles.defaultText}>
          Please initiate a search
        </Text>
      ) : (
        <MoviesList navigation={navigation} movies={searchResults} mediaType={"multi"}  />
      )}
    </View>
  );
};

export default SearchContainer;

// Styles for SearchContainer
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  defaultText: {
    marginTop: 100,
    textAlign: 'center',
    color: '#333',
    fontSize: 24,
    fontWeight: '600',
  },
});