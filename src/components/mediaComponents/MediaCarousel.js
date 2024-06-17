import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from 'react-native-vector-icons';
import Modal from 'react-native-modal';
import Swiper from 'react-native-swiper';

export default function MediaCarousel({ pictures, setMediaModal }) {
  return (
    <View>
      <Modal isVisible={true} backdropOpacity={.9}>
        <View style={styles.container}>

          <View style={styles.header}>
            <TouchableOpacity onPress={() => setMediaModal(null)}>
              <Feather name="x" size={40} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity >
              <Feather name={'download'} size={40} color={'white'} />
            </TouchableOpacity>
          </View>

          <Swiper
            loop={false}
            showsPagination={false}
            loadMinimal={true}
            loadMinimalSize={1}
          >
            {pictures.map((media, index) => (
              <View key={index} style={styles.imageContainer} >
                <Image source={{ uri: media.url }} style={styles.image} />
              </View>
            ))}
          </Swiper>

        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between'
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 520,
    borderRadius: 16
  }
})
