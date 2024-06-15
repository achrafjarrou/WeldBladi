// screens/PublishRideScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { firebase } from '../firebaseConfig';

function PublishRideScreen() {
  const [ride, setRide] = useState({ from: '', to: '', time: '', price: '', driver: '', car: '' });

  const handlePublish = async () => {
    try {
      await firebase.firestore().collection('rides').add(ride);
      alert('Ride published successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="From"
        value={ride.from}
        onChangeText={(text) => setRide({ ...ride, from: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="To"
        value={ride.to}
        onChangeText={(text) => setRide({ ...ride, to: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Time"
        value={ride.time}
        onChangeText={(text) => setRide({ ...ride, time: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={ride.price}
        onChangeText={(text) => setRide({ ...ride, price: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Driver"
        value={ride.driver}
        onChangeText={(text) => setRide({ ...ride, driver: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Car"
        value={ride.car}
        onChangeText={(text) => setRide({ ...ride, car: text })}
      />
      <Button title="Publish" onPress={handlePublish} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default PublishRideScreen;
