import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import FavoritesIcon from '../assets/favoritesIcon/favoritesIcon.png';
import FavoritedIcon from '../assets/favoritedIcon/favoritedIcon.png';

interface MovieCardProps {
  onPress: () => void;
  title: string;
  posterPath: string;
  vote_average: number;
  onToggleFavorite: () => void;
  favorited: boolean;
}

export const MovieCard = ({
  onPress,
  title,
  posterPath,
  vote_average,
  onToggleFavorite,
  favorited,
}: MovieCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onToggleFavorite}
          style={styles.favoriteIcon}>
          <Image
            source={
              favorited
                ? (FavoritedIcon as ImageSourcePropType)
                : (FavoritesIcon as ImageSourcePropType)
            }
          />
        </TouchableOpacity>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${posterPath}`}}
          style={styles.imageContainer}
        />
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.vote}>{vote_average.toFixed(1)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 4,
    width: 160,
  },
  imageContainer: {
    height: 250,
    width: 160,
    borderRadius: 15,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    flexWrap: 'wrap',
  },
  vote: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
  },
});
