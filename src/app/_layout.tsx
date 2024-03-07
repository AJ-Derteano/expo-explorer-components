import { Slot, Stack } from 'expo-router';
import { theme } from '../theme/theme';

export default function RootLayout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name='index' options={{ title: 'Explorer component' }} />
    </Stack>
  );
}
