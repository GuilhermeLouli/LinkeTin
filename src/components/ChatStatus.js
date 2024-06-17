import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from 'react-native-vector-icons';

export default function MessageDetails({ status, sender }) {
  return (
    <View style={styles.container}>

      {
        sender !== undefined &&
        <Text style={styles.chatStatusBlack}>
          {sender + ': '}
        </Text>
      }

      {(() => {
        switch (status) {
          case 'typing': return <Text style={styles.chatStatus}>Typing...</Text>

          case 'read': return <Text style={styles.chatStatus}>Read</Text>

          case 'sent': return <Text style={styles.chatStatusGray}>Sent</Text>

          case 'audio':
            return <>
              <View style={styles.icon}>
                <FontAwesome5 style={{ marginRight: 2 }} name="microphone-alt" size={12} color={'#4D65E7'} />
              </View>
              <Text style={styles.chatStatus}>Audio message</Text>
            </>

          case 'media':
            return <>
              <View style={styles.icon}>
                <Ionicons style={{ marginRight: 2 }} name="image" size={12} color={'#4D65E7'} />
              </View>
              <Text style={styles.chatStatus}>Media</Text>
            </>

          case 'file':
            return <>
              <View style={styles.icon}>
                <MaterialCommunityIcons style={{ marginRight: 2 }} name="file-document" size={12} color={'#4D65E7'} />
              </View>
              <Text style={styles.chatStatus}>File</Text>
            </>

          default: return <Text style={styles.chatStatusBlack} numberOfLines={1} ellipsizeMode="tail">{status}</Text>
        }
      })()}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 4,
    paddingLeft: 10,
    width: 210
  },
  chatStatus: {
    textAlignVertical: 'center',
    fontSize: 14,
    color: '#4D65E7'
  },
  chatStatusGray: {
    textAlignVertical: 'center',
    fontSize: 14,
    color: '#5C5858'
  },
  chatStatusBlack: {
    textAlignVertical: 'center',
    fontSize: 14,
    color: '#49454F'
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
