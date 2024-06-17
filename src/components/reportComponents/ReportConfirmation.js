import { View, Text, StyleSheet } from "react-native";
import { Feather } from 'react-native-vector-icons';

export default function ReportConfirmation() {
  return (
    <>
      <View style={styles.check} >
        <Feather name={"check"} size={50} color={'white'} />
      </View>
      <Text style={styles.text}>Thank you for being an active participant in creating a positive space!</Text>
    </>
  )
}

const styles = StyleSheet.create({
  check: {
    marginTop: 20,
    width: 70,
    height: 70,
    borderRadius: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5C71E6'
  },
  text: {
    marginTop: 10,
    width: '80%',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center'
  }
})
