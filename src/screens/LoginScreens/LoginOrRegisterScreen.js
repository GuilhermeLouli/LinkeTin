import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function LoginOrRegisterScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#a1ffce', '#faffd1']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Pressable style={styles.backButton}>
          <Text style={styles.arrowIcon}>{'<'}</Text>
        </Pressable>
        <Text style={styles.logo}>LinkeTin</Text>
      </View>
      <Text style={styles.termsText}>
        By tapping Create Account or Sign in, you agree to our Terms. Learn how
        we process your data in our Privacy Policy and Cookies Policy.
      </Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </Pressable>
      <Text style={styles.linkText}>Trouble Signing In?</Text>
      <Text style={styles.linkText}>Forgot your Password?</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 60,
  },
  backButton: {
    marginRight: 20,
  },
  arrowIcon: {
    fontSize: 24,
    color: '#000',
  },
  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  termsText: {
    textAlign: 'center',
    color: '#333',
    marginVertical: 20,
  },
  button: {
    width: '80%',
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  linkText: {
    color: '#000',
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
});
