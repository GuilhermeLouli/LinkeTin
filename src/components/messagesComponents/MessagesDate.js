import { View, Text, StyleSheet } from "react-native"

export default function MessagesDate({ isSearching }) {
  return (
    <View style={[styles.container, isSearching && { top: 100 }]}>
      <Text style={styles.text}>Today</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    top: 10,
    width: '100%',
    height: 30,
    alignItems: 'center'
  },
  text: {
    width: 60,
    height: 30,
    borderRadius: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '600',
    color: '#404040',
    backgroundColor: '#E5E8FB'
  }
})
