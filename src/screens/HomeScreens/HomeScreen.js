import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-deck-swiper';

export default function HomeScreen({ navigation }) {

  const cards = [
    { id: 1, name: 'Ana', age: '26', job: 'Fullstack Software Engineer', address: 'Graça', skills: ['React', 'Bootstrap', 'CSS', 'Javascript', 'Node', 'Nest.js', 'Next.js'], image: 'https://images.pexels.com/photos/6976943/pexels-photo-6976943.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    { id: 2, name: 'Cleibson', age: '29', job: 'Data Scientist', address: 'New York', skills: ['Java', 'MySql', 'BigQuery', 'Firestore', 'Angular', 'PostgresSql'], image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: 'Ivan', age: '24', job: 'Front-end Developer', address: 'Mato Grosso', skills: ['React', 'React Native', 'Figma', 'Bootstrap', '3D modeling', 'Tree.js'], image: 'https://images.pexels.com/photos/7129611/pexels-photo-7129611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ]

  const handleSwipedLeft = (cardIndex) => {
    console.log(`Card ${cardIndex} swiped left`);
  };

  const handleSwipedRight = (cardIndex) => {
    console.log(`Card ${cardIndex} swiped right`);
  };

  return (
    <Swiper
      animateCardOpacity={true}
      cards={cards}
      renderCard={card => (
        <ImageBackground
          style={styles.backgroundImage}
          source={{ uri: card.image }}
        >
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.8)']}
            style={styles.gradient}
          />

          <View style={styles.content}>

            <View style={styles.nameAgeContainer}>
              <Text style={styles.name} >{card.name}</Text>
              <Text style={styles.age} >{card.age}</Text>
            </View>

            <Text style={styles.title} >{card.job}</Text>
            <Text style={styles.address} >Lives in {card.address}</Text>
            <View style={styles.skillsContainer} >
              {
                card.skills.map(i => (
                  <Text style={styles.skills}> {i}</Text>
                ))
              }
            </View>
          </View>

        </ImageBackground >
      )}
      onSwipedLeft={handleSwipedLeft}
      onSwipedRight={handleSwipedRight}
      cardIndex={0}
      backgroundColor={'white'}
      stackSize={3}
      infinite={true}
      verticalSwipe={false} // Disable vertical swipe
    />
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'relative',
    bottom: 60,
    right: 20,
    width: '112%',
    height: '102%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // borderRadius: 20,
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
    borderRadius: 20,
    textAlign: 'center',
    color: 'white'
  },
  button: {
    marginTop: '10px',
    width: '80px',
    height: '40px',
    borderRadius: 5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white'
  }
});
