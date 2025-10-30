import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function JobDetailsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <FontAwesome name="arrow-left" size={12} style={styles.backArrow} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Job Details</Text>
        </View>

        <View style={styles.content}>
          {/* Patient Information Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Patient Information</Text>
            
            <View style={styles.patientHeader}>
              <View style={styles.patientNameRow}>
                <Text style={styles.patientLabel}>Name: </Text>
                <Text style={styles.patientName}>Keith</Text>
              </View>
              <View style={styles.criticalBadge}>
                <Text style={styles.criticalText}>Critical</Text>
              </View>
            </View>

            <Text style={styles.patientId}>ID: JD78901</Text>
            <Text style={styles.condition}>Condition: High fever, difficulty breathing.</Text>
          </View>

          {/* Location Details Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Location Details</Text>
            
            <View style={styles.locationSection}>
              <Text style={styles.locationLabel}>Pickup:</Text>
              <Text style={styles.locationAddress}>123 Main St, Anytown</Text>
            </View>

            <View style={styles.locationSection}>
              <Text style={styles.locationLabel}>Destination:</Text>
              <Text style={styles.locationAddress}>AscendisMed Medical Center</Text>
            </View>
          </View>

          {/* Actions Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Actions</Text>
            
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.actionButton}>
                <FontAwesome name="phone" size={16} style={styles.actionIcon} />
                <Text style={styles.actionButtonText}>Call Client</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton}>
                <FontAwesome name="user-plus" size={16} style={styles.actionIcon} />
                <Text style={styles.actionButtonText}>Chat</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
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
    marginBottom: 12,
  },
  patientHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  patientNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  patientLabel: {
    fontSize: 16,
    color: '#12185D',
    fontWeight: '600',
  },
  patientName: {
    fontSize: 16,
    color: '#12185D',
    fontWeight: '600',
  },
  criticalBadge: {
    backgroundColor: '#D3AF37',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  criticalText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  patientId: {
    fontSize: 14,
    color: '#1a1f5c',
    marginBottom: 8,
  },
  condition: {
    fontSize: 14,
    color: '#1a1f5c',
    lineHeight: 20,
  },
  locationSection: {
    marginBottom: 12,
  },
  locationLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1f5c',
    marginBottom: 4,
  },
  locationAddress: {
    fontSize: 14,
    color: '#1a1f5c',
    lineHeight: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#D3AF37',
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  actionButtonText: {
    color: '#1a1f5c',
    fontSize: 14,
    fontWeight: '600',
  },
  confirmButton: {
    backgroundColor: '#D3AF37',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});