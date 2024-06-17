import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Modal from 'react-native-modal';

import ReportOptionsList from './ReportOptionsList';
import ReportConfirmation from './ReportConfirmation';

export default function ReportModal({ isModalVisible, setModalVisible, variable }) {

  const [hasReported, setHasReported] = useState(false)

  const closeModal = () => {
    setModalVisible(false)
    setHasReported(false)
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={isModalVisible}
      onBackdropPress={() => closeModal()}
    >
      <View style={[styles.container, { height: hasReported ? '25%' : '60%' }]}>

        <View style={styles.dragButton} />
        {
          !hasReported
            ? <ReportOptionsList setHasReported={setHasReported} variable={variable} />
            : <ReportConfirmation />
        }
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end'
  },
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    backgroundColor: 'white'
  },
  dragButton: {
    marginTop: 10,
    width: 50,
    height: 8,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#DADADA'
  }
})
