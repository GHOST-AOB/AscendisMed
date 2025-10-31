/**
 * AscendisMed International - Login Screen
 */

import { useRouter } from 'expo-router';
import * as React from 'react';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function AscendisMedLogin() {
  const router = useRouter();
  const handleCreateAccount = () => {
    // Navigate to CreateAccount screen
    router.push('/create_account');
  };

  const handleLogin = () => {
    // Navigate to Login screen
    router.push('/login_screen');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        {/* Status Bar */}
        <View style={styles.statusBar}>

        </View>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Project Logo/Brand Image */}
          <View style={styles.brandContainer}>
            <Image
              source={require('../assets/images/white_background_logo.png')}
              style={styles.brandImage}
              resizeMode="contain" />
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.createButton}
              activeOpacity={0.7}
              onPress={handleCreateAccount}
            >
              <Text style={styles.createButtonText}>Create your account</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginButton}
              activeOpacity={0.8}
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'ios' ? 0 : 12,
    paddingBottom: 8,
  },
  time: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  iconText: {
    fontSize: 12,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  brandContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  brandImage: {
    width: 350,
    height: 150,
    marginBottom: 16,
  },
  buttonContainer: {
    width: '100%',
  },
  createButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#1a3a5c',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  createButtonText: {
    color: '#1a3a5c',
    fontSize: 16,
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#D4AF37',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AscendisMedLogin;