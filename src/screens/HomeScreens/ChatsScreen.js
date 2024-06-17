import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Feather } from 'react-native-vector-icons';

// import Header from '../components/Header';
import ChatsListMock from '../../mocks/ChatsListMock';
import SearchBar from '../../components/SearchBar';
import ChatsList from '../../components/ChatsList';
import OnlineList from '../../components/OnlineList';
// import { useNavigation } from '@react-navigation/native';

export default function ChatsScreen() {

  // const navigation = useNavigation()

  const [data, setData] = useState(ChatsListMock)

  const [query, setQuery] = useState('')

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>

      {/* <Header
        screenName={'Chats'}
        left={
          <TouchableOpacity style={styles.headerIcon} >
            <FontAwesome name={"angle-left"} size={30} color={'#5C5858'} />
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.navigate('NewChat')} >
            <Feather name={"edit"} size={25} color={'#5C5858'} />
          </TouchableOpacity>
        }
      /> */}

      <View style={styles.container}>

        <SearchBar query={query} setQuery={setQuery} />

        {data.length === 0 && <Text style={styles.centerText} >You do not have any chats</Text>}
        {data.length === 0 && <Text style={styles.bottomText}>See who`s online</Text>}

        <View style={styles.list} >
          {data.length !== 0 ? <ChatsList data={data} setData={setData} /> : <OnlineList data={OnlineListMock} />}
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  headerIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    bottom: 0,
    paddingLeft: 25,
    paddingRight: 25
  },
  text: {
    marginBottom: 20,
    fontSize: 20
  },
  list: {
    flex: 1,
    marginTop: 10
  },
  centerText: {
    width: '100%',
    height: 200,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    opacity: 0.5
  },
  bottomText: {
    width: '100%',
    height: 50,
    textAlign: 'left',
    textAlignVertical: 'bottom',
    fontSize: 22,
    color: '#4D65E7'
  }
})
