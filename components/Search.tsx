import SearchIcon from '../assets/searchIcon/searchIcon.png';
import {
  View,
  TextInput,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export const Search = ({searchTerm, setSearchTerm}: SearchProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.searchIcon}
        source={SearchIcon as ImageSourcePropType}
      />
      <TextInput
        style={styles.input}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search"
        placeholderTextColor={'#FFFFFF33'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#2B2B2B',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 25,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    fontWeight: 500,
    fontSize: 18,
    flex: 1,
    color: 'white',
  },
  searchIcon: {
    marginRight: 8,
  },
});
