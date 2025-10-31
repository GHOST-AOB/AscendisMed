import React from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MedicalApp = () => {
  const handleSOSPress = () => {
    Alert.alert(
      'Emergency SOS',
      'Contacting emergency services...',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Call', onPress: () => console.log('Emergency call initiated') },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#12185D" />
      
      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Hello Keith, Welcome</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* SOS Button */}
        <TouchableOpacity 
          style={styles.sosButton}
          onPress={handleSOSPress}
          activeOpacity={0.8}
        >
          <Text style={styles.sosText}>SOS</Text>
        </TouchableOpacity>

        {/* Emergency Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Need an ambulance?</Text>
            <Text style={styles.cardSubtitle}>
              Tap the SOS button for immediate help.
            </Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  welcomeSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#12185D',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#12185D',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  sosButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#D3AF37',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  sosText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#12185D',
    letterSpacing: 4,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 350,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#12185D',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#12185D',
    lineHeight: 18,
  },
  arrow: {
    fontSize: 24,
    color: '#12185D',
    marginLeft: 10,
  },
});

export default MedicalApp;