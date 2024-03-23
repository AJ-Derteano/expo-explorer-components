import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Marker } from 'react-native-maps';

type CustomMarkerProps = {
  onPress: () => void;
  apartment: any;
};

const CustomMarker = ({ onPress, apartment }: CustomMarkerProps) => {
  return (
    <Marker
      key={apartment.id}
      onPress={onPress}
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
      title={apartment.title}
      // description={apartment.description}
    >
      <View
        style={{
          backgroundColor: 'white',
          padding: 5,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontFamily: 'InterBold',
          }}
        >
          $ {apartment.price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({});
