import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function UserScreensLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor="#FFFFFF" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#12185D',
          tabBarInactiveTintColor: '#6B7280',
          tabBarStyle: {
            backgroundColor: '#D3AF37',
            borderTopWidth: 0,
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            height: 70,
            paddingBottom: 10,
            paddingTop: 10,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginTop: 4,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="appointments"
          options={{
            title: 'Appointments',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="memberships"
          options={{
            title: 'Membership',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="card" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        
        {/* Hidden screens - not shown in tab bar */}
        <Tabs.Screen
          name="emergencies"
          options={{
            href: null, // This hides the tab
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            href: null, // This hides the tab
          }}
        />
        <Tabs.Screen
          name="map"
          options={{
            href: null, // This hides the tab
          }}
        />
        <Tabs.Screen
          name="membership_checkout"
          options={{
            href: null, // This hides the tab
          }}
        />

        <Tabs.Screen
          name="my_membership"
          options={{
            href: null, // This hides the tab
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            href: null, // This hides the tab
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}



