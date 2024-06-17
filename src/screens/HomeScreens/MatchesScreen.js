import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function MatchesScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Text style={styles.content} >
        You have no matches
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
    padding: '10px',
    backgroundColor: '#A7AFBB',
    borderRadius: '10px',
    color: 'white'
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
