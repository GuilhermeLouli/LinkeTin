import { View, TouchableOpacity, StyleSheet } from "react-native"

import MessageDateIndicator from "./MessageDateIndicator"
import TextMessage from "./messagesTypes/TextMessage"
import AudioMessage from "./messagesTypes/AudioMessage"
import MediaMessage from "./messagesTypes/MediaMessage"
import FileMessage from "./messagesTypes/FileMessage"
import PostMessage from "./messagesTypes/PostMessage"
import ProfileMessage from "./messagesTypes/ProfileMessage"
import MessagesOptions from "./MessagesOptions"
import MessageDetails from "./MessageDetails"
import AudioCallMessage from "./messagesTypes/AudioCallMessage"
import MessageReply from "./MessageReply"
import MessageAuthor from "./MessageAuthor"

export default function MessagesTypes({ name, item, index, data, setData, setReportMessageModalVisible, setReply, setMediaModal }) {

  const shouldRenderMessageDateIndicator = time => {
    if (data[index + 1] === undefined) return false
    if (new Date(time) > new Date(data[index + 1].time)) return true
    return false
  }

  const getType = item => {
    switch (item.contentType) {
      case 'text': return <TextMessage item={item} showOptions={showOptions} />
      case 'audio': return <AudioMessage item={item} showOptions={showOptions} />
      case 'media': return <MediaMessage item={item} setMediaModal={setMediaModal} />
      case 'file': return <FileMessage item={item} showOptions={showOptions} />
      case 'post': return <PostMessage item={item} showOptions={showOptions} />
      case 'profile': return <ProfileMessage item={item} showOptions={showOptions} />
      case 'audiocall': return <AudioCallMessage item={item} />
    }
  }

  const showOptions = () => {
    data[index].showOptions = true
    setData(data)
  }

  const hideOptions = () => {
    data[index].showOptions = false
    setData(data)
  }

  return (
    <>
      <View style={[styles.container, { alignItems: item.type === 'sent' ? 'flex-end' : 'flex-start' }]}>

        {item.author !== undefined && <MessageAuthor author={item.author} />}

        {!(item.reply === null || item.reply === undefined || (typeof item.reply === 'object' && Object.keys(item.reply).length === 0)) && <MessageReply reply={item.reply} type={item.type} />}
        <View style={{ flexDirection: item.type === 'sent' ? 'row-reverse' : 'row' }}>

          {item.showOptions && <MessagesOptions type={item.type} reportCallback={() => setReportMessageModalVisible(true)} replyCallback={() => setReply(item)} hideOptions={hideOptions} />}

          {getType(item)}

        </View>

        <MessageDetails item={item} />

      </View>

      {shouldRenderMessageDateIndicator(item.time) && <MessageDateIndicator time={item.time} />}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    padding: 5
  }
})
