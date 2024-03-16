import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 4: Splashscreen' }} />

      <Text>Today we will learn how to animate in react native.</Text>
      <Text>Click the button below to start the animation</Text>

      <Link href={'/day4/animation'} asChild>
        <Button title='Go to animation' />
      </Link>

      <Link href={'/day4/splash'} asChild>
        <Button title='Go to splah' />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
