import { Stack } from 'expo-router';
import { RouteGuard } from '../components/RouteGuard';

export default function DriverScreensLayout() {
  return (
    <RouteGuard requiredUserType="driver">
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="dashboard" />
        <Stack.Screen name="driver_chat" />
        <Stack.Screen name="driver_profile" />
        <Stack.Screen name="job_details" />
        <Stack.Screen name="job_history" />
        <Stack.Screen name="navigation" />
      </Stack>
    </RouteGuard>
  );
}
