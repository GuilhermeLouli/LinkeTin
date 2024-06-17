import { View, Text, StyleSheet } from "react-native"

export default function MessageDateIndicator({ time }) {
  return (
    <View style={styles.date}>
      <Text style={styles.text}>{time}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    padding: 10,
  },
  date: {
    height: 40,
    width: 'auto',
    alignItems: 'center'
  },
  text: {
    width: 'auto',
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#E5E8FB'
  }
})
