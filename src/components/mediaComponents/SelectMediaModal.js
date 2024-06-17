import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import { Feather } from 'react-native-vector-icons';
import SelectMediaHeader from './SelectMediaHeader';

import MediaMock from '../../mocks/MediaMock';
import useForceUpdate from '../../customHooks/forceUpdate';

export default function SelectMediaModal({ sendMedia, isModalVisible, setModalVisible }) {
  const forceUpdate = useForceUpdate()

  const [selectedMedia, setSelectedMedia] = useState([...MediaMock]);

  const toggleSelection = (index) => {
    setSelectedMedia((prevMedia) => {
      const updatedMedia = [...prevMedia];
      updatedMedia[index].selected = !updatedMedia[index].selected;
      return updatedMedia;
    });
  };

  const prepareMedia = () => {
    const selectedItems = selectedMedia.filter(item => item.selected)
    selectedMedia.forEach(item => {
      if (item.selected) {
        item.selected = false
      }
    })

    sendMedia(selectedItems)
    forceUpdate()
    setModalVisible(false)
  }

  const renderItem = ({ item, index }) => (
    <TouchableOpacity style={styles.image} onPress={() => toggleSelection(index)}>

      <ImageBackground style={styles.backgroundImage} source={{ uri: item.url }}>
        <View style={[styles.check, item.selected ? styles.selected : styles.notSelected]}>
          {item.selected && <Feather name={'check'} size={15} color={'white'} />}
        </View>
      </ImageBackground>

    </TouchableOpacity>
  );

  return (
    <Modal
      style={styles.modal}
      isVisible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}
    >
      <View style={styles.container}>

        <View style={styles.dragButton} />

        <SelectMediaHeader onClick={() => prepareMedia()} />

        <FlatList
          data={selectedMedia}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          renderItem={renderItem}
          overScrollMode="never"
        />

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  dragButton: {
    marginTop: 10,
    width: 50,
    height: 8,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#DADADA',
  },
  image: {
    margin: 5,
    width: 90,
    height: 120,
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  check: {
    margin: 5,
    width: 15,
    height: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#4D65E7'
  },
  notSelected: {
    borderWidth: 1,
    borderColor: '#4D65E7'
  }
});
