import { View, TextInput, TouchableOpacity, StyleSheet, Keyboard } from "react-native"
import { useState } from "react"
import { FontAwesome5, Feather, AntDesign } from 'react-native-vector-icons';

import MessageInputReply from "./MessageInputReply";
import MessageAttachments from "./MessageAttachments";
import AudioWave from "../AudioWave";

export default function MessagesInput({ sendMessage, user, reply, setReply, setSelectMediaModalVisible }) {

  const [message, setMessage] = useState('')

  const [isAudioMessage, setIsAudioMessage] = useState(false)

  const [openAttachments, setOpenAttachments] = useState(false)

  const onMessageSent = () => {
    if (message === '') return
    Keyboard.dismiss()
    sendMessage(message)
    setMessage('')
  }

  return (
    <View style={styles.container}>

      <View style={{ width: '75%' }}>

        {reply && <MessageInputReply name={user.name} reply={reply} setReply={setReply} />}

        {openAttachments && <MessageAttachments setSelectMediaModalVisible={r => { setOpenAttachments(false); setSelectMediaModalVisible(r) }} />}

        <View style={[styles.bar, isAudioMessage ? styles.audioBar : styles.inputBar]}>
          {
            isAudioMessage ?
              <View style={styles.rightIcon}>
                <FontAwesome5 name="microphone-alt" size={25} color={'#4D65E7'} />
              </View>
              :
              <TouchableOpacity style={styles.rightIcon} onPress={() => setOpenAttachments(s => !s)}>
                <Feather name="paperclip" size={20} color={'#374957'} />
              </TouchableOpacity>
          }

          {
            isAudioMessage
              ?
              <View style={styles.waveform}>
                <AudioWave />
                <AudioWave />
              </View>
              :
              <TextInput
                style={styles.input}
                placeholder="Write a message"
                placeholderTextColor={'#D9D9D9'}
                onChangeText={r => setMessage(r)}
                onSubmitEditing={onMessageSent}
                value={message}
              />
          }

          <TouchableOpacity style={[styles.sendIcon, { backgroundColor: isAudioMessage ? '#4D65E7' : 'rgba(0, 0, 0, 0.1)' }]} onPress={() => onMessageSent()} >
            <AntDesign name="arrowright" size={20} color={isAudioMessage ? 'white' : '#030303'} />
          </TouchableOpacity>
        </View>

      </View>

      <TouchableOpacity style={styles.leftIcon} onPress={() => setIsAudioMessage(s => !s)}>
        {
          isAudioMessage
            ?
            <View style={{ width: 30, height: 30, borderRadius: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EF2536' }}>
              <Feather name={"trash-2"} size={18} color={'white'} />
            </View>
            :
            <FontAwesome5 name={"microphone-alt"} size={30} color={'#4D65E7'} />
        }
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 50
  },
  bar: {
    zIndex: 2,
    position: 'relative',
    flexDirection: 'row',
    marginRight: 10,
    width: '95%',
    height: 45,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputBar: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 40,
    backgroundColor: 'white'
  },
  audioBar: {
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: '#E5E8FB'
  },
  rightIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  waveform: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'center'
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
  }
})
