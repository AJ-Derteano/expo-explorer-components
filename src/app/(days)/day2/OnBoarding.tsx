import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  StatusBar,
} from 'react-native';
import { Stack, router } from 'expo-router';
import { theme } from '../../../theme/theme';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  GestureDetector,
  Gesture,
  Directions,
} from 'react-native-gesture-handler';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft,
} from 'react-native-reanimated';

const onboardingSteps = [
  {
    title: 'Track every transction',
    description:
      "Monitor your spending and contribution, ensurring every penny aligns with your family's aspirations.",
    icon: 'people-arrows',
  },
  {
    title: 'Set your goals',
    description:
      "Set your goals and track your progress. Whether it's a family vacation or a new home, we'll help you get there.",
    icon: 'bullseye',
  },
  {
    title: 'Monitor your progress',
    description:
      'Stay on top of your finances and track your progress with our easy to use dashboard.',
    icon: 'chart-line',
  },
];

export default function OnBoarding() {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    if (screenIndex < onboardingSteps.length - 1) {
      setScreenIndex(screenIndex + 1);
    } else {
      endOnboarding();
    }
  };

  const onBack = () => {
    if (screenIndex > 0) {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <StatusBar barStyle='light-content' />

      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View
            key={`${step.icon}-step-indicator`}
            style={[
              styles.stepIndicator,
              index === screenIndex && styles.stepIndicatorActive,
            ]}
          />
        ))}
      </View>

      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent} key={screenIndex}>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={150}
              color='#CEF202'
            />
          </Animated.View>
          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight.delay(50)}
              exiting={SlideOutLeft}
              style={styles.description}
            >
              {data.description}
            </Animated.Text>

            <View style={styles.buttonRow}>
              <Text onPress={endOnboarding} style={styles.buttonText}>
                Skip
              </Text>

              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#15141A',
    paddingTop: 40,
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    marginTop: 30,
  },
  title: {
    color: '#FDFDFD',
    fontSize: 50,
    fontFamily: theme.fonts.family.InterBlack,
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  description: {
    color: 'gray',
    fontSize: theme.fonts.size.small,
    fontFamily: theme.fonts.family.Inter,
    lineHeight: 28,
  },
  footer: {
    marginTop: 'auto',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: '#302E38',
    borderRadius: 50,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: theme.colors.text,
    fontSize: theme.fonts.size.small,
    fontFamily: theme.fonts.family.InterMedium,
    padding: 15,
    paddingHorizontal: 25,
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 25,
    gap: 8,
  },
  stepIndicator: {
    flex: 1,
    height: 5,
    borderRadius: 10,
    backgroundColor: 'grey',
    margin: 5,
  },
  stepIndicatorActive: {
    backgroundColor: '#CEF202',
  },
});
