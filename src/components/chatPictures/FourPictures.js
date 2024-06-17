import { View, Image, StyleSheet } from "react-native"

export default function FourPictures({ chatPictures }) {
  return (
    <View style={styles.container} >
      <Image style={styles.picture1} source={{ uri: chatPictures[0] }} />
      <Image style={styles.picture2} source={{ uri: chatPictures[1] }} />
      <Image style={styles.picture3} source={{ uri: chatPictures[2] }} />
      <Image style={styles.picture4} source={{ uri: chatPictures[3] }} />
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
    top: 5,
    width: 28,
    height: 28,
    borderRadius: 28
  },
  picture2: {
    position: 'absolute',
    top: 5,
    left: 20,
    width: 28,
    height: 28,
    borderRadius: 28
  },
  picture3: {
    position: 'absolute',
    top: 22,
    width: 25,
    height: 25,
    borderRadius: 25
  },
  picture4: {
    position: 'absolute',
    top: 25,
    left: 24,
    width: 22,
    height: 22,
    borderRadius: 22
  }
})
