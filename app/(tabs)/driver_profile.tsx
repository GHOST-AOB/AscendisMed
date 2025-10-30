import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <FontAwesome5 name="cog" size={24} color="#1a1f5c" solid={false} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/* Profile Picture and Name */}
          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>DN</Text>
              </View>
            </View>
            <Text style={styles.driverName}>Driver Name</Text>
            <Text style={styles.driverId}>ID: D-00123</Text>
          </View>

          {/* Contact Information Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Contact Information</Text>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Phone:</Text>
              <Text style={styles.infoValue}>+1 (555) 123-4567</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Email:</Text>
              <Text style={styles.infoValue}>driver.name@example.com</Text>
            </View>
          </View>

          {/* Vehicle Information Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Vehicle Information</Text>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Make & Model:</Text>
              <Text style={styles.infoValue}>Mercedes-Benz Sprinter</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>License Plate:</Text>
              <Text style={styles.infoValue}>ABC-1234</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#12185D',
  },
  settingsButton: {
    padding: 4,
  },
  settingsIcon: {
    fontSize: 22,
  },
  content: {
    padding: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 8,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D3AF37',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: '600',
    color: '#1a1f5c',
  },
  driverName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a1f5c',
    marginBottom: 4,
  },
  driverId: {
    fontSize: 14,
    color: '#1a1f5c',
  },
  card: {
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
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1f5c',
    marginBottom: 16,
  },
  infoRow: {
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1f5c',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
    color: '#1a1f5c',
  },
});