// screens/SearchResultsScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { firebase } from '../firebaseConfig';

function SearchResultsScreen({ route, navigation }) {
  const { from, to, date, seats } = route.params;
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const snapshot = await firebase.firestore().collection('rides')
          .where('from', '==', from)
          .where('to', '==', to)
          .get();
        setRides(snapshot.docs.map(doc => doc.data()));
      } catch (error) {
        console.error(error);
      }
    };
    fetchRides();
  }, [from, to]);

  return (
    <FlatList
      data={rides}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.rideItem}>
          <Text>{item.time}</Text>
          <Text>{item.driver}</Text>
          <Text>{item.price}</Text>
          <Button title="Details" onPress={() => navigation.navigate('RideDetails', { ride: item })} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  rideItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default SearchResultsScreen;
