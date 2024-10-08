import {useFavorites, useFavoriteMutation} from '../hooks';
import {View, FlatList, StyleSheet} from 'react-native';
import {Movie} from '../types';
import {MovieCard} from '../components';

export const FavoritesScreen = () => {
  const {
    data: favoritesData,
    fetchNextPage: fetchNextFavoritePage,
    refetch,
  } = useFavorites();

  const {mutateAsync} = useFavoriteMutation();

  const allFavoritesResult =
    favoritesData?.pages.map(page => page.results).flat() || [];

  const onToggleFavorite = async (movieId: number) => {
    await mutateAsync({movieId, favorite: false});
    refetch();
  };

  const renderMovieCard = ({item}: {item: Movie}) => {
    return (
      <MovieCard
        title={item.title}
        posterPath={item.poster_path}
        vote_average={item.vote_average}
        onPress={() => {}}
        onToggleFavorite={() => onToggleFavorite(item.id)}
        favorited={true}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        extraData={allFavoritesResult.length}
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={styles.movieCardsColumnWrapperStyle}
        onEndReached={() => {
          fetchNextFavoritePage();
        }}
        contentContainerStyle={styles.movieCardsContentContainerStyle}
        onEndReachedThreshold={0.5}
        data={allFavoritesResult}
        renderItem={renderMovieCard}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111111',
    paddingHorizontal: 16,
    paddingTop: 16,
    flex: 1,
    gap: 16,
    flexDirection: 'column',
  },
  genresContentContainerStyle: {
    gap: 8,
  },
  genresContainerStyle: {
    paddingBottom: 16,
  },
  movieCardsColumnWrapperStyle: {
    justifyContent: 'space-between',
  },
  movieCardsContentContainerStyle: {
    gap: 16,
  },
});
