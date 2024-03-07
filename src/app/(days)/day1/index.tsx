import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { theme } from '../../../theme/theme';

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 1' }} />
      <Text
        style={{
          fontFamily: theme.fonts.family.AmaticBold,
          fontSize: theme.fonts.size.extraLarge,
        }}
      >
        DayDetailsScreen
      </Text>
    </View>
  );
};

export default DayDetailsScreen;
