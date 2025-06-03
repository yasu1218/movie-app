import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';

// How to build image URL: 
// https://developer.themoviedb.org/docs/image-basics
// base_url, a file_size and a file_path
// Example: https://image.tmdb.org/t/p/w500/your_image_path.jpg

// These should be stored somewhere else in a config file.. but I will keep these here for the moment. 
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/'; // Base URL for images
const IMAGE_SIZE = 'w185'; // Image size to use (ideally this should be dynamic based on device size)

const MovieCard = props => {

  const { movie_id, image, title, popularity, release_date, navigation, onPress, mediaType } = props;
  // console.log('Image url: ', `${IMAGE_BASE_URL}${IMAGE_SIZE}/${image}`);

  return (
    <View style={styles.card}>
      {/* Left column – Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `${IMAGE_BASE_URL}${IMAGE_SIZE}/${image}` }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Right column – Text + Button */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>Popularity: {popularity.toFixed(3)}</Text>
        <Text style={styles.text}>Release Date: {release_date}</Text>

        <TouchableHighlight 
          style={styles.button} 
          underlayColor="#06c"
          activeOpacity={0.85}
          onPress={ () => {
            navigation.navigate('MediaDetails', { mediaId: movie_id, mediaType: mediaType }) 
          }}
        >
          <Text style={styles.buttonText}>More Details</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    marginVertical: 8,
    marginHorizontal: 16,
    // borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  imageContainer: {
    width: '30%',
    maxWidth: 185,
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    padding: 10,
    width: '70%',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#00bfff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default MovieCard;
