import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_300Light,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from '@expo-google-fonts/amatic-sc';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import AnimatedSplashScreen from '../components/AnimatedSplashScreen';
import Animated, { FadeIn } from 'react-native-reanimated';

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    InterLight: Inter_300Light,
    Inter: Inter_400Regular,
    InterMedium: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterBlack: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontsLoaded, fontError]);

  const showAnimatedSplash = !appReady || !splashAnimationFinished;

  if (!appReady || !splashAnimationFinished) {
    return (
      <AnimatedSplashScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View style={{ flex: 1 }} entering={FadeIn}>
        <Stack screenOptions={{}}>
          <Stack.Screen
            name='index'
            options={{ title: 'Explorer component' }}
          />
        </Stack>
      </Animated.View>
    </GestureHandlerRootView>
  );
}
