import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { theme } from '../../../theme/theme';

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: `Day 2: Onboarding` }} />

      <Text
        style={{
          fontFamily: theme.fonts.family.AmaticBold,
          fontSize: theme.fonts.size.large,
        }}
      >
        DayDetailsScreen
      </Text>

      <Link href={'/day2/OnBoarding'} asChild>
        <Button title='Go to onboarding' />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;
