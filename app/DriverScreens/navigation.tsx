import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NavigationScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <FontAwesome name="arrow-left" size={12} style={styles.backArrow} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Navigation</Text>
        </View>

        <View style={styles.content}>
          {/* Map Container */}
          <View style={styles.mapContainer}>
            <View style={styles.mapPlaceholder}>
              <Text style={styles.mapText}>Map View</Text>
              <Text style={styles.mapSubtext}>(Route displayed here)</Text>
            </View>
          </View>

          {/* Destination Card */}
          <View style={styles.destinationCard}>
            <Text style={styles.destinationTitle}>To: AscendisMed</Text>
            <Text style={styles.destinationAddress}>Destination: 456 Elm Ave</Text>
            <Text style={styles.estimatedTime}>Estimated arrival in 12 min (5.2 miles)</Text>
          </View>

          {/* Arrived Button */}
          <TouchableOpacity style={styles.arrivedButton}>
            <Text style={styles.arrivedButtonText}>✓ Arrived at Destination</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#1a1f5c',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 12,
  },
  backArrow: {
    fontSize: 12,
    color: '#12185D',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#12185D',
  },
  content: {
    padding: 16,
  },
  mapContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    height: 180,
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0f2',
  },
  mapText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#12185D',
    marginBottom: 4,
  },
  mapSubtext: {
    fontSize: 14,
    color: '#666666',
  },
  destinationCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  destinationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#12185D',
    marginBottom: 8,
  },
  destinationAddress: {
    fontSize: 16,
    color: '#12185D',
    marginBottom: 6,
  },
  estimatedTime: {
    fontSize: 14,
    color: '#666666',
  },
  arrivedButton: {
    backgroundColor: '#D3AF37',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  arrivedButtonText: {
    color: '#12185D',
    fontSize: 16,
    fontWeight: '600',
  },
});