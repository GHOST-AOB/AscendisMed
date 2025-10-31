import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { UserType, useUser } from '../contexts/UserContext';

interface RouteGuardProps {
  children: ReactNode;
  requiredUserType: UserType;
  fallbackRoute?: string;
}

export function RouteGuard({ 
  children, 
  requiredUserType, 
  fallbackRoute = '/(tabs)/UserScreens/home' 
}: RouteGuardProps) {
  const { userType } = useUser();
  const router = useRouter();

  // If user type doesn't match required type, show access denied screen
  if (userType !== requiredUserType) {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Ionicons name="lock-closed" size={64} color="#EF4444" />
          <Text style={styles.title}>Access Denied</Text>
          <Text style={styles.message}>
            You don't have permission to access this area.
          </Text>
          <Text style={styles.subMessage}>
            This section is restricted to {requiredUserType}s only.
          </Text>
          
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.push(fallbackRoute as any)}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return <>{children}</>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 32,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    maxWidth: 350,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#EF4444',
    marginTop: 16,
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    color: '#12185D',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 22,
  },
  subMessage: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  backButton: {
    backgroundColor: '#D3AF37',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#12185D',
  },
});