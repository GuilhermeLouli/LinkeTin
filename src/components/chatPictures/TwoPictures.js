import { View, Image, StyleSheet } from "react-native"

export default function TwoPictures({ chatPictures }) {
  return (
    <View style={styles.container} >
      <Image style={styles.picture1} source={{ uri: chatPictures[0] }} />
      <Image style={styles.picture2} source={{ uri: chatPictures[1] }} />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 45,
    height: 45,
    borderRadius: 45,
    alignItems: 'center',
    backgroundColor: '#E5E8FB'
  },
  picture1: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 30
  },
  picture2: {
    position: 'absolute',
    left: 15,
    width: 30,
    height: 30,
    borderRadius: 30
  }
})
