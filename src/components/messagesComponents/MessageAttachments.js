import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';

export default function MessageAttachments({ setSelectMediaModalVisible }) {
  return (
    <View style={styles.menu}>

      <TouchableOpacity style={styles.option} onPress={() => setSelectMediaModalVisible(true)}>
        <Ionicons style={styles.icon} name="image" size={20} color={'#4D65E7'} />
        <Text style={styles.text}>Media</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <MaterialCommunityIcons style={styles.icon} name="file-outline" size={20} color={'#4D65E7'} />
        <Text style={styles.text}>Files</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    zIndex: 5,
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 5,
  },
  option: {
    flexDirection: 'row',
    width: 120,
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  icon: {
    marginLeft: 25,
    marginRight: 5
  },
  text: {
    fontSize: 16,
    color: '#4D65E7'
  }
})
