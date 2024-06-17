import { View, Text, StyleSheet } from "react-native"

export default function NoMessages({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Say 'Hi' to {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    width: 'auto',
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    color: '#828282',
    backgroundColor: '#E5E8FB'
  }
})
