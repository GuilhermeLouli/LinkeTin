import { TouchableOpacity, StyleSheet } from "react-native"

import { MaterialCommunityIcons } from 'react-native-vector-icons';

export default function MessagesOptions({ type, reportCallback, replyCallback, hideOptions }) {

  const report = () => {
    hideOptions()
    reportCallback()
  }

  const reply = () => {
    hideOptions()
    replyCallback()
  }

  return (
    <>
      {type === 'received' &&
        <TouchableOpacity style={styles.report} onPress={() => report()}>
          <MaterialCommunityIcons name={"block-helper"} size={30} color={'white'} />
        </TouchableOpacity>
      }

      <TouchableOpacity style={[styles.reply, { backgroundColor: type === 'sent' ? '#E5E8FB' : '#5C71E6' }]} onPress={() => reply()}>
        <MaterialCommunityIcons name={"arrow-u-left-top"} size={30} color={type === 'sent' ? '#030303' : 'white'} />
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  report: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#828282'
  },
  reply: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
