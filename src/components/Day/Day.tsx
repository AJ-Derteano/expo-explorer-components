import { View, Text, StyleSheet, Pressable } from 'react-native';
import { theme } from '../../theme/theme';
import { Link } from 'expo-router';

type DayProps = {
  day: number;
};

const Day = ({ day }: DayProps) => {
  return (
    <Link href={`day${day}`} asChild>
      <Pressable style={styles.container}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 180,
    borderWidth: 1,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.secondary,
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
  },
  text: {
    fontFamily: theme.fonts.family.AmaticBold,
    fontSize: theme.fonts.size.extraLarge,
    color: theme.colors.text,
  },
});

export default Day;
