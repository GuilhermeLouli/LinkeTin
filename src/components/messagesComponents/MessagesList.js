import { View, StyleSheet, FlatList } from "react-native"
import MessagesTypes from "./MessagesTypes"

export default function MessagesList({ data, setData, setReportMessageModalVisible, setReply, setMediaModal }) {

  const renderItem = ({ item, index }) => {
    return <MessagesTypes
      item={item}
      index={index}
      data={data}
      setData={setData}
      setReportMessageModalVisible={setReportMessageModalVisible}
      setReply={setReply}
      setMediaModal={setMediaModal}
    />
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        inverted={true}
        data={data}
        renderItem={renderItem}
        overScrollMode="never"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center'
  }
})
