import { Stack } from 'expo-router';

export default function DriverScreensLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="driver_chat" />
      <Stack.Screen name="driver_profile" />
      <Stack.Screen name="job_details" />
      <Stack.Screen name="job_history" />
      <Stack.Screen name="navigation" />
    </Stack>
  );
}
