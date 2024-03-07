import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme/theme';

type DayProps = {
  day: number;
};

const Day = ({ day }: DayProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{day}</Text>
    </View>
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
    fontFamily: theme.fonts.family.Patrick,
    fontSize: theme.fonts.size.extraLarge,
    fontWeight: theme.fonts.weight.extraBold,
  },
});

export default Day;
