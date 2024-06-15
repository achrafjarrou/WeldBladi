// screens/RideDetailsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function RideDetailsScreen({ route }) {
  const { ride } = route.params;

  return (
    <View style={styles.container}>
      <Text>{ride.time}</Text>
      <Text>{ride.driver}</Text>
      <Text>{ride.price}</Text>
      <Text>{ride.car}</Text>
      <Button title="Request for ride" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default RideDetailsScreen;
