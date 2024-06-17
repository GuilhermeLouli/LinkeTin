import { View, Text, StyleSheet } from "react-native"

export default function MessageReply({ reply, type }) {
  return (
    <View style={styles.container}>
      <View style={[styles.content, { backgroundColor: type === 'sent' ? '#E5E8FB' : '#5C71E6' }]}>
        <View style={[styles.bar, { backgroundColor: type === 'sent' ? '#5C71E6' : '#E5E8FB' }]}></View>
        <Text style={[styles.text, { color: type === 'sent' ? '#030303' : 'white' }]} numberOfLines={1} ellipsizeMode="tail">
          Replying to
          <Text style={[styles.highlightedText, { color: type === 'sent' ? '#5C71E6' : '#E5E8FB' }]}>{type === 'sent' ? ' You' : ' ' + reply.sender}</Text>
          : {reply.content}
        </Text>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    width: '75%',
    height: 40
  },
  content: {
    flexDirection: 'row',
    width: '100%',
    height: 65,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    elevation: 4
  },
  bar: {
    marginTop: 12,
    marginHorizontal: 5,
    width: 2,
    height: 22
  },
  text: {
    marginTop: 12,
    width: '90%',
    height: 22,
    textAlignVertical: 'center'
  },
  highlightedText: {
    marginTop: 12,
    height: 22,
    textAlignVertical: 'center'
  }
})
