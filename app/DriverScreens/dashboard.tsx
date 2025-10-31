import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DriverDashboard() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Dashboard</Text>
        </View>

        <View style={styles.content}>
          {/* Upcoming Jobs Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Upcoming Jobs</Text>
            
            <View style={styles.jobItem}>
              <View style={styles.jobInfo}>
                <Text style={styles.patientName}>Patient: John Smith</Text>
                <Text style={styles.jobTime}>Tomorrow, 10:00 AM</Text>
              </View>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.viewButtonText}>→ View</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.jobItem}>
              <View style={styles.jobInfo}>
                <Text style={styles.patientName}>Patient: Alice Brown</Text>
                <Text style={styles.jobTime}>Tomorrow, 2:30 PM</Text>
              </View>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.viewButtonText}>→ View</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Driver Status Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Driver Status</Text>
            
            <View style={styles.statusRow}>
              <Text style={styles.statusLabel}>Availability:</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusBadgeText}>Online</Text>
              </View>
            </View>

            <View style={styles.lastJobSection}>
              <Text style={styles.statusLabel}>Last Job:</Text>
              <Text style={styles.lastJobDate}>2024-07-20 (Completed)</Text>
            </View>

            <TouchableOpacity style={styles.offlineButton}>
              <Text style={styles.offlineButtonText}>Go Offline</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#12185D',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#12185D',
  },
  content: {
    padding: 16,
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
    color: '#12185D',
    marginBottom: 16,
  },
  jobItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  jobInfo: {
    flex: 1,
  },
  patientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#12185D',
    marginBottom: 4,
  },
  jobTime: {
    fontSize: 14,
    color: '#666666',
  },
  viewButton: {
    backgroundColor: '#D3AF37',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
  },
  viewButtonText: {
    color: '#12185D',
    fontSize: 14,
    fontWeight: '600',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusLabel: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
    marginRight: 12,
  },
  statusBadge: {
    backgroundColor: '#D3AF37',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
  },
  statusBadgeText: {
    color: '#12185D',
    fontSize: 14,
    fontWeight: '600',
  },
  lastJobSection: {
    marginBottom: 20,
  },
  lastJobDate: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  offlineButton: {
    backgroundColor: '#D3AF37',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  offlineButtonText: {
    color: '#12185D',
    fontSize: 16,
    fontWeight: '600',
  },
});