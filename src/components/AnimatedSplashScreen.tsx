import { View, StyleSheet } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import Animated, { FadeIn, FadeOut, ZoomOut } from 'react-native-reanimated';

type AnimatedSplashScreenProps = {
  onAnimationFinish: (isCancelled: boolean) => void;
};

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
  onAnimationFinish,
}: AnimatedSplashScreenProps) => {
  return (
    <View
      exiting={FadeOut.duration(300)}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
      }}
    >
      <AnimatedLottieView
        exiting={ZoomOut}
        autoPlay
        onAnimationFinish={onAnimationFinish}
        loop={false}
        style={{
          width: '80%',
          maxWidth: 400,
          flex: 1,
          // backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../assets/lottie/pikachu-animation.json')}
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

export default AnimatedSplashScreen;
