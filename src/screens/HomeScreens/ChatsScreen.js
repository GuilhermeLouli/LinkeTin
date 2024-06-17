import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ChatScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Text style={styles.content} >
        Chat
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    color: '#a0b911'
  },
  button: {
    marginTop: '10px',
    width: '80px',
    height: '40px',
    borderRadius: '5px',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white'
  }
});
