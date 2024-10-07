import {useState} from 'react';
import {
  usePopularMovies,
  useNetworkConnectivity,
  useSearchMovies,
} from '../hooks';
import {View, FlatList, StyleSheet} from 'react-native';
import {Genre as IGenre, Movie} from '../types';
import {GENRES} from '../constants';
import {GenreID} from '../types';
import {Search, MovieCard, Genre} from '../components';

export const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedGenres, setSelectedGenres] = useState<GenreID[]>([]);

  const {data: popularData, fetchNextPage: fetchNextPopularPage} =
    usePopularMovies();
  const {data: searchData, fetchNextPage: fetchNextSearchPage} =
    useSearchMovies(searchTerm);

  const allPopularResults =
    popularData?.pages.map(page => page.results).flat() || [];
  const allSearchResults =
    searchData?.pages.map(page => page.results).flat() || [];

  const filteredPopularResultsByGenre =
    selectedGenres.length > 0
      ? allPopularResults.filter(movie =>
          selectedGenres.every(genre => movie.genre_ids.includes(genre)),
        )
      : allPopularResults;
  const filteredSearchResultsByGenre =
    selectedGenres.length > 0
      ? allSearchResults.filter(movie =>
          selectedGenres.every(genre => movie.genre_ids.includes(genre)),
        )
      : allSearchResults;

  useNetworkConnectivity();

  const renderMovieCard = ({item}: {item: Movie}) => {
    return (
      <MovieCard
        title={item.title}
        posterPath={item.poster_path}
        vote_average={item.vote_average}
        onPress={() => {}}
        onToggleFavorite={() => {}}
        favorited={false}
      />
    );
  };

  const renderGenre = ({item}: {item: IGenre}) => {
    const referenceData = searchTerm
      ? filteredSearchResultsByGenre
      : filteredPopularResultsByGenre;
    const count = referenceData.filter(movie =>
      movie.genre_ids.includes(item.id),
    ).length;
    return (
      <Genre
        genre={item}
        count={count}
        isActivated={selectedGenres.includes(item.id)}
        onPress={() => {
          setSelectedGenres(prev => {
            if (prev.includes(item.id)) {
              return prev.filter(genre => genre !== item.id);
            }
            return [...prev, item.id];
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FlatList
        contentContainerStyle={styles.genresContentContainerStyle}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={GENRES}
        renderItem={renderGenre}
      />
      <FlatList
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={styles.movieCardsColumnWrapperStyle}
        style={styles.movieCardsListStyle}
        onEndReached={() => {
          searchTerm ? fetchNextSearchPage() : fetchNextPopularPage();
        }}
        contentContainerStyle={styles.movieCardsContentContainerStyle}
        onEndReachedThreshold={0.5}
        data={
          searchTerm
            ? filteredSearchResultsByGenre
            : filteredPopularResultsByGenre
        }
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
  },
  genresContentContainerStyle: {
    gap: 8,
  },
  movieCardsListStyle: {
    marginTop: 16,
  },
  movieCardsColumnWrapperStyle: {
    justifyContent: 'space-between',
  },
  movieCardsContentContainerStyle: {
    gap: 16,
  },
});
