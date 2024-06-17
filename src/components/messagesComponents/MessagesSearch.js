import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from "react-native"
import { useState } from "react"
import { FontAwesome5, SimpleLineIcons, AntDesign } from 'react-native-vector-icons';

export default function MessagesSearch() {

  const [message, setMessage] = useState('')

  return (
    <>
      <View style={styles.container}>

        <View style={{ width: '90%' }}>

          <View style={[styles.bar, styles.inputBar]}>

            <TouchableOpacity style={styles.rightIcon}>
              <SimpleLineIcons name="magnifier" size={20} color={'#828282'} />
            </TouchableOpacity>

            <TextInput
              style={styles.input}
              placeholder="Search"
              placeholderTextColor={'#D9D9D9'}
              onChangeText={r => setMessage(r)}
              onSubmitEditing={() => { }}
              value={message}
            />

            <TouchableOpacity style={styles.sendIcon} >
              <AntDesign name="arrowright" size={20} color={'#828282'} />
            </TouchableOpacity>
          </View>

        </View>
      </View>
      <Text style={styles.matches}>18 matches</Text>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bar: {
    flexDirection: 'row',
    marginRight: 10,
    width: '95%',
    height: 45,
    alignItems: 'center',
    paddingHorizontal: 10
  },
  inputBar: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 40,
    backgroundColor: 'white'
  },
  rightIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    marginRight: 10,
    fontSize: 16
  },
  sendIcon: {
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  matches: {
    paddingBottom: 5,
    marginLeft: 20,
    color: '#5C71E6'
  }
})
