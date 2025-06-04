import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { getMediaDetails } from '../../services/api'; 

// Importing constants for image URL and size
import { IMAGE_BASE_URL, IMAGE_WIDTH_DETAILS } from '../../config/mediaConfig'; 
// Helper methods for media details
import { getTitle, getReleaseDate, getReleaseDateLabel } from '../../utilities/mediaHelpers'; // Import utility methods for title and release date

const MediaContainer = ({ navigation, route }) => {

  const { mediaId, mediaType } = route.params; // Extract mediaId from route parameters

  const [media, setMedia] = useState(null); // State to hold media details

  useEffect(() => {
    
    // console.log('Fetching media details for mediaId:', mediaId);

    const fetchMediaDetails = async () => {
      try {


        const data = await getMediaDetails(mediaId, mediaType);  // Fetch media details using the provided mediaId
        setMedia(data);

        // console.log('Fetched media details:', data);

        // Set the navigation title with the media title obtained
        if (navigation) {
          navigation.setOptions({ title: getTitle(data, mediaType) });
        }

      } catch (error) {
        console.error('Failed to fetch media details:', error);
      }
    };

    if (mediaId) {
      fetchMediaDetails();
    }


  }, [mediaId]);

  if (!media) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{getTitle(media, mediaType)}</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `${IMAGE_BASE_URL}${IMAGE_WIDTH_DETAILS}${media.poster_path}` }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.overview}>{media.overview}</Text>
      <Text style={styles.meta}>
        Popularity: {media.popularity.toFixed(3)} | {getReleaseDateLabel(mediaType)}: {getReleaseDate(media, mediaType)} 
      </Text>
    </ScrollView>
  );
};

export default MediaContainer;


const styles = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 48,
    textAlign: 'center',
  },
  imageContainer: {
    width: '95%', 
    maxWidth: 500, 
    aspectRatio: 1, 
    marginBottom: 20,
  },
  image: {
    width: '100%', 
    height: '100%', 
    borderRadius: 5,
  },
  overview: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 40,
    color: '#666',
  },
  meta: {
    fontSize: 14,
    color: '#333',
  },
});

