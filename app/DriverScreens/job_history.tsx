import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Navigation } from 'lucide-react-native';

export default function JobHistoryScreen() {
  const jobHistory = [
    {
      id: 1,
      patient: 'Jane Doe',
      date: '2024-07-20',
      from: 'ICT Hub',
      to: 'AscendisMed Medical Center',
      status: 'Completed',
    },
    {
      id: 2,
      patient: 'Robert King',
      date: '2024-07-19',
      from: 'MUBS',
      to: 'AscendisMed Medical Center',
      status: 'Completed',
    },
    {
      id: 3,
      patient: 'Sarah Lee',
      date: '2024-07-18',
      from: 'Hostel',
      to: 'AscendisMed Medical Center',
      status: 'Completed',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Job History</Text>
        </View>

        <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
          {jobHistory.map((job) => (
            <View key={job.id} style={styles.jobCard}>
              <View style={styles.jobHeader}>
                <Text style={styles.patientName}>Patient: {job.patient}</Text>
                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>{job.status}</Text>
                </View>
              </View>

              <Text style={styles.jobDate}>Date: {job.date}</Text>

              <View style={styles.locationRow}>
                <MapPin size={16} color="#1a1f5c" style={styles.icon} />
                <Text style={styles.locationLabel}>From: </Text>
                <Text style={styles.locationValue}>{job.from}</Text>
              </View>

              <View style={styles.locationRow}>
                <Navigation size={16} color="#1a1f5c" style={styles.icon} />
                <Text style={styles.locationLabel}>To: </Text>
                <Text style={styles.locationValue}>{job.to}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
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
    backgroundColor: '#12185D',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#12185D',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  scrollContent: {
    flexGrow: 1,
  },
  jobCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
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
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  patientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#12185D',
    flex: 1,
  },
  statusBadge: {
    backgroundColor: '#D3AF37',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  jobDate: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  icon: {
    marginRight: 8,
  },
  locationLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#12185D',
  },
  locationValue: {
    fontSize: 14,
    color: '#12185D',
    flex: 1,
  },
});