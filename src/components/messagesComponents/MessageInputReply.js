import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Ionicons } from 'react-native-vector-icons';

export default function MessageInputReply({ name, reply, setReply }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.bar}></View>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
          Replying to <Text style={styles.highlightedText}>{reply.type === 'sent' ? 'You' : name}</Text> : {reply.content}
        </Text>
      </View>
      <TouchableOpacity style={styles.close} onPress={() => setReply(null)} >
        <Ionicons name="close" size={10} color={'white'} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 25,
    marginRight: 10,
    width: '95%',
    height: 65,
    borderRadius: 21,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    elevation: 4,
    backgroundColor: 'white'
  },
  bar: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 5,
    width: 2,
    height: 18,
    backgroundColor: '#5C71E6'
  },
  text: {
    marginTop: 15,
    width: '80%',
    height: 22,
    textAlignVertical: 'center',
    color: '#030303'
  },
  highlightedText: {
    marginTop: 15,
    height: 22,
    textAlignVertical: 'center',
    color: '#5C71E6'
  },
  close: {
    width: 18,
    height: 18,
    borderRadius: 18,
    backgroundColor: '#5C71E6',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
