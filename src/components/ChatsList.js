import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { Feather } from 'react-native-vector-icons';

import MessageDetails from "./ChatStatus";
import ChatPicture from "./chatPictures/ChatPicture";

export default function ChatsList({ data, setData }) {

  const navigation = useNavigation()

  const deleteChat = index => {
    const newData = data.filter((item, i) => i !== index)
    setData(newData)
  }

  const showOptions = index => {
    if (data[index].showOptions) data[index].showOptions = false
    else data[index].showOptions = true
    setData([...data])
  }

  const renderItem = ({ item, index }) => {
    return (
      <>

        <View style={{ flexDirection: 'row-reverse' }}>

          {item.showOptions &&
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteChat(index)}>
              <Feather name={"trash-2"} size={25} color={'white'} />
            </TouchableOpacity>
          }

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Messages', { user: item })} onLongPress={() => showOptions(index)}>

            <View style={{ alignItems: 'center' }}>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={[styles.unreadMessagesCounter, { opacity: item.unreadMessages ? 1 : 0 }]}>{item.unreadMessages}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>

              <ChatPicture hasNewStory={item.hasNewStory} chatPictures={item.pictures} />

              <View>
                <Text style={styles.text}>{item.name}</Text>
                <MessageDetails status={item.status} sender={item.sender} />
              </View>

            </View >

          </TouchableOpacity>

        </View>
      </>
    )
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      overScrollMode="never"
    />
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row-reverse',
    marginTop: 10,
    padding: 10,
    width: '100%',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 1
  },
  text: {
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: '600'
  },
  time: {
    fontSize: 14,
    opacity: 0.5
  },
  unreadMessagesCounter: {
    marginTop: 5,
    width: 20,
    height: 20,
    borderRadius: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
    color: 'white',
    backgroundColor: '#4D65E7'
  },
  deleteButton: {
    marginTop: 10,
    width: 50,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF2536'
  }
})
