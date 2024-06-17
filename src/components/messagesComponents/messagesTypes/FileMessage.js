import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Feather } from 'react-native-vector-icons';

export default function FileMessage({ item, showOptions }) {
  return (
    <>
      <TouchableOpacity
        style={[
          item.type === 'sent' ? styles.messageSent : styles.messageReceived,
          item.type === 'sent' ? { borderTopRightRadius: item.showOptions ? 0 : 30 } : { borderTopLeftRadius: item.showOptions ? 0 : 30 }
        ]}
        onLongPress={() => showOptions()}
      >
        <MaterialCommunityIcons name="file-document" size={20} color={item.type === 'sent' ? 'white' : '#4D65E7'} />
        <Text style={item.type === 'sent' ? styles.messageSentText : styles.messageReceivedText}>File</Text>


      </TouchableOpacity>

      <TouchableOpacity style={styles.downloadButton}>
        <Feather name={'download'} size={15} color={'black'} />
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  messageSent: {
    flexDirection: 'row',
    width: '20%',
    backgroundColor: '#4D65E7',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10
  },
  messageReceived: {
    flexDirection: 'row',
    width: '20%',
    backgroundColor: '#E5E8FB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10
  },
  messageSentText: {
    fontSize: 16,
    color: 'white',
  },
  messageReceivedText: {
    fontSize: 16,
    color: '#4D65E7',
  },
  downloadButton: {
    margin: 10,
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)'
  }
})
