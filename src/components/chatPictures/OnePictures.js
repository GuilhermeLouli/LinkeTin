import { View, Image, StyleSheet } from "react-native"

export default function OnePicture({ chatPictures, hasNewStory, size }) {
  return (
    <View style={[
      styles.container,
      !hasNewStory && { borderWidth: 0, backgroundColor: 'rgba(0,0,0,0)' },
      size && { width: size, height: size, borderRadius: size }
    ]} >
      <Image style={[styles.picture, size && { width: size - 5, height: size - 5, borderRadius: size - 5 }]} source={{ uri: chatPictures[0] }} />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4D65E7',
    backgroundColor: 'white'
  },
  picture: {
    width: 40,
    height: 40,
    borderRadius: 40
  }
})
