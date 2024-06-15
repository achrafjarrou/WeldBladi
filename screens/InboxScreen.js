// screens/InboxScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function InboxScreen() {
  return (
    <View style={styles.container}>
      <Text>Inbox</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InboxScreen;
