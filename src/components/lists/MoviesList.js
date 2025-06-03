import { FlatList } from "react-native";
import MovieCard from "../listItems/MovieCard";

import { getTitle, getReleaseDate } from '../../utilities/mediaHelpers'; // Import utility methods for title and release date

// Movie List component that renders a list of movies using FlatList.
// It takes in props including navigation and movies, and renders each movie record using the MovieCard component.
const MoviesList = props => {
  const { navigation, movies, mediaType } = props;

  return (
    <FlatList
     data={movies}
     renderItem={({ item }) => (
      <MovieCard 
        movie_id={item.id}
        image={item.poster_path}
        title={getTitle(item, mediaType)}
        popularity={item.popularity}
        release_date={getReleaseDate(item, mediaType)}
        navigation={navigation}
        mediaType={mediaType}
      />
     )}
    >  
    </FlatList>
  )
}

export default MoviesList;
