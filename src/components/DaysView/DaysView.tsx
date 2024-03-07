import { View, FlatList, StyleSheet } from 'react-native';
import Day from '../Day/Day';

const days = [...Array(24)].map((_, i) => i + 1);

const DaysView = () => {
  return (
    <View>
      <FlatList
        data={days}
        contentContainerStyle={[styles.container, styles.space]}
        columnWrapperStyle={styles.space}
        numColumns={2}
        renderItem={({ item }) => <Day day={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  space: {
    gap: 10,
  },
});

export default DaysView;
