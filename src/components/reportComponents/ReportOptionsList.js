import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native"
import { useState } from "react";
import { FontAwesome } from 'react-native-vector-icons';

import ReportMessageMock from '../../mocks/ReportMessageMock';

export default function ReportOptionsList({ setHasReported, variable }) {

  const [data] = useState(ReportMessageMock)

  const renderItem = ({ item }) => (
    <>
      <TouchableOpacity style={styles.content} onPress={() => setHasReported(true)}>

        <Text style={styles.text}>{item}</Text>

        <View style={styles.icon}>
          <FontAwesome name="angle-right" size={30} color={'#666666'} />
        </View>

      </TouchableOpacity>

      <View style={styles.horizontalLine} />
    </>
  )

  return (
    <>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.titleText}>Report {variable}</Text>
        <Text style={styles.subtitleText}>Why are you reporting this {variable}?</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        overScrollMode="never"
      />
    </>
  )
}

const styles = StyleSheet.create({
  titleText: {
    marginTop: 10,
    height: 40,
    textAlignVertical: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#3E59E8'
  },
  subtitleText: {
    height: 30,
    fontSize: 16,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    width: 30,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'rgba(217, 217, 217, 0.5)',
    marginVertical: 10,
  }
})
