import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TextMessage({ item, showOptions }) {
  return (
    <TouchableOpacity
      style={[
        item.type === 'sent' ? styles.messageSent : styles.messageReceived,
        item.type === 'sent' ? { borderTopRightRadius: item.showOptions ? 0 : 30 } : { borderTopLeftRadius: item.showOptions ? 0 : 30 }
      ]}
      onLongPress={() => showOptions()}
    >
      <Text style={item.type === 'sent' ? styles.messageSentText : styles.messageReceivedText}>{item.content}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  messageSent: {
    width: '75%',
    backgroundColor: '#4D65E7',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 15
  },
  messageReceived: {
    width: '75%',
    backgroundColor: '#E5E8FB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    padding: 15
  },
  messageSentText: {
    fontSize: 16,
    lineHeight: 20,
    color: 'white',
  },
  messageReceivedText: {
    fontSize: 16,
    lineHeight: 20,
    color: 'black',
  }
})
