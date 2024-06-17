import { View, TextInput, StyleSheet } from "react-native"
import { SimpleLineIcons } from 'react-native-vector-icons';

export default function SearchBar({ query, setQuery }) {

  return (
    <View style={styles.container}>

      <View style={styles.searchBar}>

        <View style={styles.searchIcon} >
          <SimpleLineIcons name="magnifier" size={20} color={'#828282'} />
        </View>

        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={r => setQuery(r)}
          value={query}
        />

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  searchBar: {
    flexDirection: 'row',
    height: 40,
    borderWidth: 1,
    borderColor: '#828282',
    borderRadius: 40,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4
  },
  searchInput: {
    fontSize: 20
  }
})
