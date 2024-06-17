import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <View style={styles.backgroundCircle} />

      <View style={styles.profileContainer}>
        <View style={styles.profileNegativeContainer}>
          <ImageBackground
            style={styles.profileImage}
            source={{ uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
          />
        </View>
      </View>

      <Text style={styles.name}>
        Rachel, 33
      </Text>

      <View style={styles.buttonsContainer}>

        <View style={{ alignItems: 'center' }}>
          <Pressable style={styles.smallButton}>
            <FontAwesome name='cog' size={'25px'} color={'#A7AFBB'} />
          </Pressable>
          <Text style={styles.buttonsText}>
            SETTINGS
          </Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Pressable style={styles.largeButton}>
            <MaterialCommunityIcons name='pencil' size={'40px'} color={'#A7AFBB'} />
          </Pressable>
          <Text style={styles.buttonsText}>
            EDIT PROFILE
          </Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Pressable style={styles.smallButton}>
            <Ionicons name='shield' size={'20px'} color={'#A7AFBB'} />
          </Pressable>
          <Text style={styles.buttonsText}>
            SAFETY
          </Text>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8ebf1',
    alignItems: 'center',
  },
  profileContainer: {
    marginTop: '40px',
    width: '200px',
    height: '200px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '300px',
    backgroundColor: '#E5E5E5',
  },
  profileNegativeContainer: {
    width: '190px',
    height: '190px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '300px',
    backgroundColor: 'white',
  },
  profileImage: {
    width: '180px',
    height: '180px',
    borderRadius: '300px',
    overflow: 'hidden'
  },
  name: {
    marginTop: '10px',
    fontSize: 25,
    fontWeight: '500',
  },
  backgroundCircle: {
    position: 'absolute',
    width: '250%',
    height: '250%',
    borderRadius: '999px',
    bottom: 100,
    backgroundColor: 'white'
  },
  buttonsContainer: {
    marginTop: '30px',
    width: '100%',
    height: '100px',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  smallButton: {
    width: '50px',
    height: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  largeButton: {
    marginTop: '10px',
    width: '70px',
    height: '70px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '70px',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonsText: {
    marginTop: '5px',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    color: '#68707E'
  }
});
