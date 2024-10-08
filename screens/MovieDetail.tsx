import {Genre, Movie} from '../types';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useMovieDetails} from '../hooks';
import {RouteProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const renderGenre = (genres: Genre[]) => {
  return genres.map(genre => genre.name).join(', ');
};

const unicodeLeftArrow = '\u2190';
export const MovieDetailScreen = ({
  route,
}: {
  route: RouteProp<{params: {movieId: Movie['id']}}, 'params'>;
}) => {
  const {movieId} = route.params;
  const {data: movie} = useMovieDetails(movieId);
  const navigation = useNavigation();

  if (!movie) {
    return null;
  }
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
      />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Text style={styles.leftArrow}>{unicodeLeftArrow}</Text>
      </TouchableOpacity>
      <View style={styles.detailContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {movie.title}
        </Text>
        <Text style={styles.rating}>
          Rating: {movie.vote_average.toFixed(1)}
        </Text>
        <Text style={styles.genre}>{renderGenre(movie.genres)}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111111',
    flex: 1,
  },
  detailContainer: {width: '100%', gap: 8, paddingHorizontal: 8},
  back: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
  leftArrow: {fontSize: 32, color: 'white'},
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '700',
  },
  overview: {
    color: '#888888',
    fontSize: 16,
    marginBottom: 16,
  },
  rating: {
    fontSize: 22,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  genre: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});
