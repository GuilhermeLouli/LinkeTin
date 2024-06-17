import { View, StyleSheet } from "react-native"

export default function AudioWave({ theme }) {
  return (
    <View style={styles.container}>
      <View style={[styles.wave, { height: 2 }, { backgroundColor: theme === 'light' ? 'white' : '#4D65E7' }]} />
      <View style={[styles.wave, { height: 8 }, { backgroundColor: theme === 'light' ? 'white' : '#4D65E7' }]} />
      <View style={[styles.wave, { height: 14 }, { backgroundColor: theme === 'light' ? 'white' : '#4D65E7' }]} />
      <View style={[styles.wave, { height: 4 }, { backgroundColor: theme === 'light' ? 'white' : '#4D65E7' }]} />
      <View style={[styles.wave, { height: 16 }, { backgroundColor: theme === 'light' ? 'white' : '#4D65E7' }]} />
      <View style={[styles.wave, { height: 14 }, { backgroundColor: theme === 'light' ? 'white' : '#4D65E7' }]} />
      <View style={[styles.wave, { height: 10 }, { backgroundColor: theme === 'light' ? 'white' : '#4D65E7' }]} />
      <View style={[styles.wave, { height: 10 }, { backgroundColor: theme === 'light' ? 'white' : '#4D65E7' }]} />
      <View style={[styles.wave, { height: 10 }, { backgroundColor: theme === 'light' ? 'white' : '#4D65E7' }]} />
      <View style={[styles.wave, { height: 14 }, { backgroundColor: theme === 'light' ? 'white' : '#4D65E7' }]} />
      <View style={[styles.wave, { height: 10 }, { backgroundColor: theme === 'light' ? 'white' : '#4D65E7' }]} />
      <View style={[styles.wave, { height: 16 }, { backgroundColor: theme === 'light' ? 'white' : '#4D65E7' }]} />
      <View style={[styles.wave, { height: 10 }, { backgroundColor: theme === 'light' ? 'white' : '#4D65E7' }]} />
      <View style={[styles.wave, { height: 4 }, { backgroundColor: theme === 'light' ? 'white' : '#4D65E7' }]} />
      <View style={[styles.wave, { height: 2 }, { backgroundColor: theme === 'light' ? 'white' : '#4D65E7' }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 4,
    width: 86,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wave: {
    width: 2,
    borderRadius: 2,
    opacity: .66,
  }
})