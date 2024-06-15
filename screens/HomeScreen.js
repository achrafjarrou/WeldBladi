// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>CarPool</Text>
      <Text style={styles.tagline}>Your ride, Your Choice</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate('Register')} />
      <Button title="Log In" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default HomeScreen;
