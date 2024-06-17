import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <ImageBackground
        style={styles.backgroundImage}
        source={{ uri: 'https://images.pexels.com/photos/6976943/pexels-photo-6976943.jpeg?auto=compress&cs=tinysrgb&w=1200' }}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.8)']}
          style={styles.gradient}
        />


        <View style={styles.content}>

          <View style={styles.nameAgeContainer}>
            <Text style={styles.name} >Ana</Text>
            <Text style={styles.age} >27</Text>
          </View>

          <Text style={styles.title} >Fullstack Software Engineer</Text>
          <Text style={styles.address} >Lives in Graça</Text>
          <View style={styles.skillsContainer} >
            {
              ['React', 'Bootstrap', 'CSS', 'Javascript', 'Node', 'ASDNASJK', 'Andkasbndjkasnjkd'].map(i => (
                <Text style={styles.skills}> {i}</Text>
              ))
            }
          </View>
        </View>

      </ImageBackground >


      {/* 

      <Pressable style={styles.button} onPress={() => navigation.navigate('Profile')} >
        <Text style={styles.buttonText}>Profile</Text>
      </Pressable> */}

    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '50%',
  },
  content: {
    width: '95%',
    height: '30%',
    color: 'purple'
  },
  nameAgeContainer: {
    width: '100%',
    height: '40px',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  name: {
    height: '40px',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginRight: '10px',
  },
  age: {
    height: '30px',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  title: {
    fontSize: 15,
    color: 'white'
  },
  address: {
    fontSize: 15,
    color: 'white'
  },
  skillsContainer: {
    marginTop: '5px',
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  skills: {
    paddingRight: '8px',
    paddingLeft: '4px',
    paddingTop: '6px',
    paddingBottom: '6px',
    margin: '2px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
    borderColor: 'white',
    borderWidth: '0.1px',
    borderRadius: '20px',
    textAlign: 'center',
    color: 'white'
  },
  button: {
    marginTop: '10px',
    width: '80px',
    height: '40px',
    borderRadius: '5px',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white'
  }
});
