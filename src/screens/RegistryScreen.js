import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function RegistryScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Text style={styles.content} >
        Bananasso
      </Text>

      <Pressable style={styles.button} onPress={() => navigation.goBack()} >
        <Text style={styles.buttonText}>Voltar</Text>
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
    color: 'purple'
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
