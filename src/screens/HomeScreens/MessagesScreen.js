import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FontAwesome, Ionicons } from 'react-native-vector-icons';

import MessagesHeader from '../../components/messagesComponents/MessagesHeader';
import MessagesList from '../../components/messagesComponents/MessagesList';
import MessagesMock from '../../mocks/MessagesMock';
import NoMessages from '../../components/messagesComponents/NoMessages';
// import Header from '../../components/Header';
import MessagesInput from '../../components/messagesComponents/MessagesInput';
import MessagesDate from '../../components/messagesComponents/MessagesDate';
import SelectMediaModal from '../../components/mediaComponents/SelectMediaModal';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import MediaCarousel from '../../components/mediaComponents/MediaCarousel';
import ReportModal from '../../components/reportComponents/ReportModal';
import MessagesSearch from '../../components/messagesComponents/MessagesSearch';

export default function MessagesScreen({ route }) {

  const navigation = useNavigation()

  const [data, setData] = useState(MessagesMock[route.params.user.id])

  const [reply, setReply] = useState(null)
  const [isSearching, setIsSearching] = useState(false)

  const [isReportMessageModalVisible, setReportMessageModalVisible] = useState(false)
  const [isSelectMediaModalVisible, setSelectMediaModalVisible] = useState(false)
  const [mediaModal, setMediaModal] = useState(null)

  const sendMessage = r => {
    const saveReply = { ...reply }
    delete saveReply.reply

    const payload = {
      type: 'sent',
      contentType: 'text',
      reply: saveReply,
      time: '2023-08-11',
      content: r
    }

    setReply(null)
    setData([payload, ...data])
  }

  const sendMedia = r => {

    const payload = {
      type: 'sent',
      contentType: 'media',
      time: '2023-08-11',
      content: r
    }
    setReply(null)
    setData([payload, ...data])
  }

  const navigateToMenu = () => {
    if (route.params.user.users?.length > 1) navigation.navigate('GroupMenu', { config: route.params.user })
    else navigation.navigate('ChatMenu', { user: route.params.user })
  }

  return (
    <>
      {/* <Header
        left={
          <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
            <FontAwesome name={"angle-left"} size={30} color={'white'} />
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity style={styles.headerIcon} onPress={() => navigateToMenu()}>
            <Ionicons name={"ellipsis-horizontal"} size={30} color={'white'} />
          </TouchableOpacity>
        }
      /> */}

      <MessagesHeader user={route.params.user} />

      <View style={styles.container}>
        <View style={styles.chat}>

          {isSearching && <MessagesSearch />}

          <MessagesDate isSearching={isSearching} />

          {data.length > 0
            ? <MessagesList data={data} setData={data => setData([...data])} setReportMessageModalVisible={setReportMessageModalVisible} setReply={setReply} setMediaModal={setMediaModal} />
            : <NoMessages name={route.params.user.name} />
          }

          <MessagesInput sendMessage={sendMessage} user={route.params.user} reply={reply} setReply={setReply} setSelectMediaModalVisible={setSelectMediaModalVisible} />

        </View>
      </View>

      <ReportModal isModalVisible={isReportMessageModalVisible} setModalVisible={setReportMessageModalVisible} variable={'Message'} />
      {isSelectMediaModalVisible && <SelectMediaModal sendMedia={i => sendMedia(i)} isModalVisible={isSelectMediaModalVisible} setModalVisible={setSelectMediaModalVisible} />}
      {mediaModal !== null && <MediaCarousel pictures={mediaModal} setMediaModal={setMediaModal} />}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  chat: {
    height: '70%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  }
})
