import { View, StyleSheet, Button } from 'react-native';
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import { Stack } from 'expo-router';

const Animation = () => {
  const animation = useRef<LottieView>();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
      }}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <LottieView
        autoPlay={false}
        loop={false}
        ref={animation}
        style={{
          width: '80%',
          maxWidth: 400,
          flex: 1,
          // backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../../../assets/lottie/pikachu-animation.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});

export default Animation;
