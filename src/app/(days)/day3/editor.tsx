import React, { useState } from 'react';
import { MarkdownDisplay } from '../../../components/MarkdownDisplay';
import { View, StyleSheet, TextInput, Text, Pressable } from 'react-native';
import { theme } from '../../../theme/theme';

const template = `# Markdown Editor`;

const EditorScreen = () => {
  const [content, setContent] = useState(template);
  const [tab, setTab] = useState('edit');

  return (
    <View style={styles.page}>
      <View style={styles.tabsContainer}>
        <Pressable
          onPress={() => setTab('edit')}
          style={[
            styles.tab,
            { borderColor: tab === 'edit' ? 'mediumorchid' : 'grey' },
          ]}
        >
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>

        <Pressable
          onPress={() => setTab('preview')}
          style={[
            styles.tab,
            {
              borderColor: tab === 'preview' ? 'mediumorchid' : 'grey',
            },
          ]}
        >
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>

      {tab === 'edit' ? (
        <TextInput
          value={content}
          onChangeText={setContent}
          multiline
          numberOfLines={50}
          style={styles.input}
        />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'whitesmoke',
    flex: 1,
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
    backgroundColor: 'white',
    fontSize: 16,
    borderRadius: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    alignItems: 'center',
  },
  tabText: {
    fontFamily: theme.fonts.family.InterBold,
  },
});

export default EditorScreen;
