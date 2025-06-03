import { FlatList } from "react-native";
import MovieCard from "../listItems/MovieCard";

// Movie List component that renders a list of movies using FlatList.
// It takes in props including navigation and movies, and renders each movie record using the MovieCard component.
const MoviesList = props => {
  const { navigation, movies } = props;

  return (
    <FlatList
     data={movies}
     renderItem={({ item }) => (
      <MovieCard 
        movie_id={item.id}
        image={item.poster_path}
        title={item.title}
        popularity={item.popularity}
        release_date={item.release_date}
        navigation={navigation}
      />
     )}
    >  
    </FlatList>
  )
}

export default MoviesList;
