import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

export default function SelectMediaHeader({ onClick }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Select media</Text>
      <TouchableOpacity style={styles.sendButton} onPress={() => onClick()}>
        <Text style={styles.sendText}>Send</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  titleText: {
    marginTop: 10,
    height: 40,
    textAlignVertical: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: '#3E59E8'
  },
  sendButton: {
    marginTop: 14,
    width: 60,
    height: 32,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3E59E8'
  },
  sendText: {
    fontSize: 16,
    color: 'white'
  },
})
