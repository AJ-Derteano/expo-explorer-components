import { StyleSheet, ScrollView } from 'react-native';
import React, { PropsWithChildren } from 'react';
import Markdown from 'react-native-markdown-display';
import { theme } from '../../theme/theme';

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior='automatic'>
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
  },
});

const markdownStyles = {
  heading1: {
    fontFamily: theme.fonts.family.InterBlack,
    color: '#212020',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 40,
  },
  heading2: {
    fontFamily: theme.fonts.family.InterBlack,
    color: '#404040',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
  },
};

export default MarkdownDisplay;
