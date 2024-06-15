// screens/RegisterScreen.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Continue with Facebook" onPress={() => {}} />
      <Button title="Sign up with email" onPress={() => navigation.navigate('SignUpWithEmail')} />
      <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
        Already have an account? Log in
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  loginLink: {
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default RegisterScreen;
