import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { theme } from '../../../theme/theme';

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 5: Maps' }} />
      <Text
        style={{
          fontFamily: theme.fonts.family.AmaticBold,
          fontSize: theme.fonts.size.extraLarge,
        }}
      >
        DayDetailsScreen
      </Text>

      <Link href={'/day5/airbnb'} asChild>
        <Button title='Go to AirBNB Map' />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;
