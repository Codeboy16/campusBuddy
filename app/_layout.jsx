// app/_layout.tsx
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="white" />
      <Stack initialRouteName='Login'>
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Signup" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
