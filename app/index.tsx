/**
 * AscendisMed International - Login Screen
  */

import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';



const AscendisMedLogin = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        {/* Status Bar */}
        <View style={styles.statusBar}>
          
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              {[...Array(12)].map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.logoSegment,
                    {
                      transform: [
                        { rotate: `${i * 30}deg` },
                        { translateY: -30 },
                      ],
                    },
                  ]}
                />
              ))}
            </View>
          </View>

          {/* Brand Name */}
          <View style={styles.brandContainer}>
            <View style={styles.brandNameRow}>
              <Text style={styles.ascendis}>Ascendis</Text>
              <Text style={styles.med}>Med</Text>
            </View>
            <Text style={styles.brandSubtitle}>INTERNATIONAL</Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.createButton}
              activeOpacity={0.7}
            >
              <Text style={styles.createButtonText}>Create your account</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.loginButton}
              activeOpacity={0.8}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
  logoContainer: {
    marginBottom: 32,
  },
  logo: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoSegment: {
    position: 'absolute',
    width: 24,
    height: 8,
    backgroundColor: '#D4AF37',
    borderRadius: 4,
  },
  brandContainer: {
    alignItems: 'center',
    marginBottom: 64,
  },
  brandNameRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  ascendis: {
    fontSize: 34,
    fontWeight: '600',
    color: '#12185D',
    letterSpacing: 0.5,
  },
  med: {
    fontSize: 34,
    fontWeight: '600',
    color: '#12185D',
    letterSpacing: 0.5,
  },
  brandSubtitle: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 3,
    color: '#12185D',
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