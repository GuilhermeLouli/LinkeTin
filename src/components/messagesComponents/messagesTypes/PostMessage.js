import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function PostMessage({ item }) {

  const mentioned = false

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { textAlign: item.type === 'sent' ? 'right' : 'left' }]}>{mentioned ? 'Mentioned you' : 'Shared a post'}</Text>
      <TouchableOpacity style={[styles.post, styles.firstImage]} >
        <Image style={styles.image} source={{ uri: item.content }} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 145,
    height: 190,
    alignItems: 'center'
  },
  text: {
    marginBottom: 2,
    width: '100%',
    height: 17,
    color: '#5C5858'
  },
  post: {
    width: 145,
    height: 170,
    borderRadius: 15,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})
