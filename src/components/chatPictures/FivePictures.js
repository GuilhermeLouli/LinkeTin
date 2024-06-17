import { View, Image, StyleSheet } from "react-native"

export default function FivePictures({ chatPictures }) {
  return (
    <View style={styles.container} >
      <Image style={styles.picture1} source={{ uri: chatPictures[0] }} />
      <Image style={styles.picture2} source={{ uri: chatPictures[1] }} />
      <Image style={styles.picture3} source={{ uri: chatPictures[2] }} />
      <Image style={styles.picture4} source={{ uri: chatPictures[3] }} />
      <Image style={styles.picture5} source={{ uri: chatPictures[4] }} />
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
    width: 25,
    height: 25,
    borderRadius: 25
  },
  picture2: {
    position: 'absolute',
    top: 2,
    left: 10,
    width: 22,
    height: 22,
    borderRadius: 22
  },
  picture3: {
    position: 'absolute',
    top: 20,
    left: 10,
    width: 22,
    height: 22,
    borderRadius: 22
  },
  picture4: {
    position: 'absolute',
    top: 8,
    left: 15,
    width: 28,
    height: 28,
    borderRadius: 28
  },
  picture5: {
    position: 'absolute',
    top: 3,
    left: 25,
    width: 22,
    height: 22,
    borderRadius: 22
  }
})
