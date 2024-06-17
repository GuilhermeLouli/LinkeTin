import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function OnlineList({ data }) {

  const navigation = useNavigation()

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>

        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.picture} source={{ uri: item.pictures[0] }} />
          <Text style={styles.text}>{item.name}</Text>
        </View >

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Messages', { user: item.name })} >
          <Text style={styles.buttonText}>Start chat</Text>
        </TouchableOpacity>

      </View>
    )
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      overScrollMode="never"
    />
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 10,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  picture: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  text: {
    paddingLeft: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    width: 90,
    height: 35,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D65E7'
  },
  buttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    color: 'white'
  }
})
