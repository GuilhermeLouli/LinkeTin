import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from 'react-native-vector-icons';

import ChatPicture from "../chatPictures/ChatPicture";

export default function MessagesHeader({ user }) {

  const navigation = useNavigation()

  return (
    <View style={styles.imageBackground}>

      {user.backgroundPicture && <ImageBackground style={{ position: 'absolute', width: '100%', height: '75%', top: 0 }} source={{ uri: user.backgroundPicture }} />}

      <View style={styles.profileData}>

        <ChatPicture hasNewStory={user.hasNewStory} chatPictures={user.pictures} size={70} />

        <Text style={styles.profileName} >{user.name}</Text>

        <View style={styles.actionsContainer} >

          <TouchableOpacity style={styles.call} onPress={() => navigation.navigate('Call', { user: user, callType: 'voice', callStatus: 'Calling' })} >
            <Ionicons name="call-outline" size={18} color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.call} onPress={() => navigation.navigate('Call', { user: user, callType: 'video', callStatus: 'Calling' })} >
            <Ionicons name="videocam-outline" size={18} color={'white'} />
          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D65E7'
  },
  profileData: {
    position: 'absolute',
    top: '12%',
    width: 150,
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profileName: {
    height: 40,
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
  actionsContainer: {
    flexDirection: 'row',
    width: '80%',
    height: 35,
    justifyContent: 'space-evenly'
  },
  call: {
    width: 35,
    height: 35,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5C71E6'
  }
})
