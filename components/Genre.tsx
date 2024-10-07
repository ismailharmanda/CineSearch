import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Genre as IGengre} from '../types';

interface GenreProps {
  genre: IGengre;
  onPress: () => void;
  count: number;
  isActivated: boolean;
}

export const Genre = ({genre, onPress, count, isActivated}: GenreProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, isActivated && styles.activeBackground]}>
        <Text style={styles.text}>
          {genre.name.toUpperCase()} ({count})
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 16,
    borderRadius: 28,
    paddingVertical: 4,
  },
  activeBackground: {
    backgroundColor: '#FFC700',
  },
  text: {
    color: 'white',
    paddingBottom: 8,
  },
});
