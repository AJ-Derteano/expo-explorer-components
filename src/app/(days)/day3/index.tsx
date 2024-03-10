import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { theme } from '../../../theme/theme';
import { MarkdownDisplay } from '../../../components/MarkdownDisplay';

const description = `
# Day 3: Render markdown

Today we will render markdown in our app. We will use the library react-native-markdown-display to render markdown in our app.

**React Native Markdown Display** is a library that allows you to render markdown in your app. It is a wrapper around the library react-native-markdown-renderer.
`;

const DayDetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 3: Render markdown' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href={'/day3/editor'} asChild>
        <Button title='Go to editor' />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;
