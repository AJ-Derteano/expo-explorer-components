import { View, StyleSheet, Button } from 'react-native';
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';

const Animation = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../../../assets/lottie/pikachu-animation.json')}
      />

      <View style={styles.buttonContainer}>
        <Button
          title='Play'
          onPress={() => {
            animation.current?.play();
          }}
        />
        <Button
          title='Pause'
          onPress={() => {
            animation.current?.pause();
          }}
        />
        <Button
          title='Reset'
          onPress={() => {
            animation.current?.reset();
          }}
        />
      </View>
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
