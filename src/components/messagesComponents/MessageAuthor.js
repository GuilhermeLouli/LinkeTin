import { View, Text, Image, StyleSheet } from "react-native";

export default function MessageAuthor({ author }) {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: author.picture }} />
      <Text style={styles.text}>{author.name}:</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '30%',
    height: 30,
    alignItems: 'center'
  },
  image: {
    marginRight: 5,
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'red'
  },
  text: {
    fontSize: 12,
    color: '#4D65E7'
  }
})
