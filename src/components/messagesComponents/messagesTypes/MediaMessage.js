import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Feather } from 'react-native-vector-icons';

export default function MediaMessage({ item, setMediaModal }) {

  const openMedia = () => {
    setMediaModal(item.content)
  }

  return (
    <View style={[styles.container, { flexDirection: item.type === 'sent' ? 'row-reverse' : 'row' }, { justifyContent: item.type === 'sent' ? 'flex-start' : 'flex-end' }]}>
      <TouchableOpacity style={styles.imageSize} onPress={() => openMedia()}>
        {item.content.length >= 3 && <Image style={[styles.image, styles.thirdImage]} source={{ uri: item.content[2].url }} />}
        {item.content.length >= 2 && <Image style={[styles.image, styles.secondImage]} source={{ uri: item.content[1].url }} />}
        <Image style={[styles.image, styles.firstImage]} source={{ uri: item.content[0].url }} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.downloadButton, { margin: item.type === 'sent' ? 20 : 10 }]}>
        <Feather name={'download'} size={15} color={'black'} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 200,
    alignItems: 'center'
  },
  imageSize: {
    width: 160,
    height: 170
  },
  image: {
    width: 145,
    height: 170,
    borderRadius: 15,
    backgroundColor: 'blue',
    position: 'absolute',
  },
  thirdImage: {
    transform: [{ rotate: '-12deg' }],
  },
  secondImage: {
    transform: [{ rotate: '-6deg' }],
  },
  firstImage: {
    transform: [{ rotate: '6deg' }],
  },
  downloadButton: {
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)'
  }
})
