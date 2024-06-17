import { View, Text, StyleSheet } from "react-native";
import { Feather } from 'react-native-vector-icons';

export default function AudioCallMessage({ item }) {
  return (
    <View style={[
      item.type === 'sent' ? styles.messageSent : styles.messageReceived,
      item.type === 'sent' ? { borderTopRightRadius: item.showOptions ? 0 : 30 } : { borderTopLeftRadius: item.showOptions ? 0 : 30 }
    ]}
    >
      <Feather name={'phone-call'} size={18} color={item.type === 'sent' ? 'white' : '#EF2536'} />

      <Text style={item.type === 'sent' ? styles.textSent : styles.textReceived} >{item.type === 'sent' ? 'Audio call ended' : 'Missed audio call'}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  messageSent: {
    flexDirection: 'row',
    width: '42%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D65E7',
    padding: 10
  },
  messageReceived: {
    flexDirection: 'row',
    width: '42%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E8FB',
    padding: 10
  },
  textSent: {
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 20,
    color: 'white'
  },
  textReceived: {
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 20,
    color: '#4D65E7'
  }
})
