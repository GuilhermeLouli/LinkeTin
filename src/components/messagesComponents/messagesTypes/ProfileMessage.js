import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";

export default function ProfileMessage({ item }) {
  return (
    <View style={styles.container}>

      <Text style={[styles.text, { textAlign: item.type === 'sent' ? 'right' : 'left' }]}>Shared a profile</Text>

      <ImageBackground style={styles.profile} source={{ uri: item.content.backgroundImage }} >

        <Image style={styles.profileImage} source={{ uri: item.content.profilePicture }} />

        <Text style={styles.profileName}>{item.content.name}</Text>

        <TouchableOpacity>
          <Text style={styles.button} >View profile</Text>
        </TouchableOpacity>
      </ImageBackground>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 145,
    height: 190,
    alignItems: 'center',
  },
  text: {
    marginBottom: 2,
    width: '100%',
    height: 17,
    color: '#5C5858'
  },
  profile: {
    width: 145,
    height: 170,
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'hidden'
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 60
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
  button: {
    width: 100,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
  image: {
    width: '100%',
    height: '100%'
  }
})
