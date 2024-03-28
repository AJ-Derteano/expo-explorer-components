import { StyleSheet, View, Text } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Stack } from 'expo-router';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import apartments from '../../../../assets/data/day5/appartments.json';
import CustomMarker from '../../../components/CustomMarker';
import ApartmentListItem from '../../../components/ApartmentListItem';

const AirbnbScreen = () => {
  const [selectedApartment, setSelectedApartment] = useState(null);

  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const snapPoints = useMemo(() => ['5%', '50%', '90%'], []);

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
        {apartments.map((apartment, index) => {
          return (
            <CustomMarker
              key={apartment.id}
              apartment={apartment}
              onPress={() => {
                setSelectedApartment(apartment);
              }}
            />
          );
        })}
      </MapView>

      {selectedApartment && <ApartmentListItem apartment={selectedApartment} />}

      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={snapPoints}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
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
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
});
