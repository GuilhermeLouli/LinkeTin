import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function LoginScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Text style={styles.content} >
        Banana
      </Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate('Registry')} >
        <Text style={styles.buttonText}>Navegar</Text>
      </Pressable>

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
    color: 'pink'
  },
  button: {
    marginTop: '10px',
    width: '80px',
    height: '40px',
    borderRadius: '5px',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white'
  }
});
