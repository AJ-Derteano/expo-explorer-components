import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Stack } from 'expo-router';

import appatments from '../../../../assets/data/day5/appartments.json';
import CustomMarker from '../../../components/CustomMarker';

const AirbnbScreen = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -12.090697,
          longitude: -77.023208,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {appatments.map((apartment, index) => {
          return <CustomMarker key={apartment.id} apartment={apartment} />;
        })}
      </MapView>
    </View>
  );
};

export default AirbnbScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
