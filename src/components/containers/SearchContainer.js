import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MediaSearchForm from '../forms/MediaSearchForm';
import MediaList from '../lists/MediaList';
import Loading from '../layout/Loading';
import { searchMedia } from '../../services/api';

const SearchContainer = ({ navigation }) => {
  // States
  const [searchResults, setSearchResults] = useState(null); // State to hold search results
  const [isLoading, setIsLoading] = useState(false);  // State to manage loading state
  const [searchType, setSearchType] = useState('multi');  // State to hold the selected search type, default is 'multi'
  const [displaySearchType, setDisplaySearchType] = useState('multi');  // State to hold the type of search results to display
  const [isError, setIsError] = useState(false); // State to manage error state

  // Method to handle search input and type
  const handleSearch = async (searchTerm) => {
    // Validate search term
    if (!searchTerm.trim()) {
      setIsError(true);
      // alert('Please enter a search keyword.');
      return;
    }
    // Search media based on the search term and type
    setIsError(false);
    setIsLoading(true);
    try {
      const data = await searchMedia(searchTerm, searchType);
      // console.log("searchResults", searchResults);
      setSearchResults(data?.results || []);
      setDisplaySearchType(searchType); // Update display type to match search type
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Search form for input and type selection */}
      <MediaSearchForm
        searchType={searchType}
        setSearchType={setSearchType} 
        onSearch={handleSearch} 
        isError={isError}
      />

      {/* Display loading indicator or search results */}
      {isLoading ? (
        <Loading />
      ) : searchResults === null ? (
        <Text style={styles.defaultText}>
          Please initiate a search
        </Text>
      ) : searchResults.length === 0 ? (
        <Text style={styles.defaultText}>
          No results found
        </Text>
      ) : (
        <MediaList navigation={navigation} movies={searchResults} mediaType={displaySearchType}  />
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