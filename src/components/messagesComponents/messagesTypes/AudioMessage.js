import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from 'react-native-vector-icons';
import AudioWave from "../../AudioWave";

export default function AudioMessage({ item, showOptions }) {

  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <TouchableOpacity style={[
      item.type === 'sent' ? styles.messageSent : styles.messageReceived,
      item.type === 'sent' ? { borderTopRightRadius: item.showOptions ? 0 : 30 } : { borderTopLeftRadius: item.showOptions ? 0 : 30 }
    ]}
      onLongPress={() => showOptions()}
    >

      <TouchableOpacity onPress={() => setIsPlaying(s => !s)} >
        <Ionicons name={'ellipse-outline'} size={35} color={item.type === 'sent' ? 'white' : '#4D65E7'} />
        <Ionicons style={styles.icon} name={isPlaying ? 'pause' : 'play'} size={20} color={item.type === 'sent' ? 'white' : '#4D65E7'} />
      </TouchableOpacity>

      <AudioWave theme={item.type === 'sent' ? 'light' : 'dark'} />

      <Text style={item.type === 'sent' ? styles.textSent : styles.textReceived} >{item.content}</Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  messageSent: {
    flexDirection: 'row',
    width: '55%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#4D65E7',
    padding: 10
  },
  messageReceived: {
    flexDirection: 'row',
    width: '55%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#E5E8FB',
    padding: 10
  },
  icon: {
    position: 'absolute',
    marginLeft: 7,
    marginTop: 8
  },
  textSent: {
    marginLeft: 5,
    fontSize: 14,
    lineHeight: 20,
    color: 'white'
  },
  textReceived: {
    marginLeft: 5,
    fontSize: 14,
    lineHeight: 20,
  }
})
