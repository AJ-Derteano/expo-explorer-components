import { Text, View, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from '@expo-google-fonts/amatic-sc';
import { theme } from './theme/theme';
import DaysView from './components/DaysView/DaysView';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const Main = () => {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View>
      <DaysView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: theme.fonts.family.AmaticBold,
    fontSize: theme.fonts.size.extraLarge,
    // fontWeight: theme.fonts.weight.extraBold,
  },
});

export default Main;
