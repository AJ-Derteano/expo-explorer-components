import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';

const DayDetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 4: Splashscreen' }} />

      <Text>Today we will learn how to animate in react native.</Text>
      <Text>Click the button below to start the animation</Text>

      <Link href={'/day4/animation'} asChild>
        <Button title='Go to animation' />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;
