import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EmergenciesScreen() {
  const emergencyServices = [
    {
      id: 1,
      title: 'Call Ambulance',
      description: 'Emergency medical transport',
      icon: 'medical' as const,
      color: '#EF4444',
    },
    {
      id: 2,
      title: 'Fire Department',
      description: 'Fire emergency services',
      icon: 'flame' as const,
      color: '#F97316',
    },
    {
      id: 3,
      title: 'Police',
      description: 'Law enforcement emergency',
      icon: 'shield' as const,
      color: '#3B82F6',
    },
    {
      id: 4,
      title: 'Poison Control',
      description: '24/7 poison emergency hotline',
      icon: 'warning' as const,
      color: '#8B5CF6',
    },
  ];

  const handleEmergencyCall = (service: string) => {
    console.log(`Calling ${service} emergency service`);
    // Add emergency call logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Emergency Services</Text>
          <Text style={styles.subtitle}>
            Quick access to emergency services when you need them most
          </Text>
        </View>

        {/* SOS Button */}
        <TouchableOpacity
          style={styles.sosButton}
          onPress={() => handleEmergencyCall('SOS')}
          activeOpacity={0.8}
        >
          <View style={styles.sosCircle}>
            <Text style={styles.sosText}>SOS</Text>
          </View>
          <Text style={styles.sosLabel}>Emergency SOS</Text>
          <Text style={styles.sosDescription}>
            Tap for immediate emergency assistance
          </Text>
        </TouchableOpacity>

        {/* Emergency Services */}
        <View style={styles.servicesContainer}>
          <Text style={styles.servicesTitle}>Emergency Services</Text>
          {emergencyServices.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={styles.serviceCard}
              onPress={() => handleEmergencyCall(service.title)}
              activeOpacity={0.7}
            >
              <View style={[styles.serviceIcon, { backgroundColor: service.color }]}>
                <Ionicons name={service.icon} size={24} color="#FFFFFF" />
              </View>
              <View style={styles.serviceInfo}>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDescription}>{service.description}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Emergency Contacts */}
        <View style={styles.contactsContainer}>
          <Text style={styles.contactsTitle}>Emergency Contacts</Text>
          <View style={styles.contactCard}>
            <Ionicons name="call" size={20} color="#12185D" />
            <Text style={styles.contactText}>Emergency Hotline: 911</Text>
          </View>
          <View style={styles.contactCard}>
            <Ionicons name="medical" size={20} color="#12185D" />
            <Text style={styles.contactText}>AscendisMed: +1 (555) 123-4567</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#12185D',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },
  sosButton: {
    alignItems: 'center',
    marginVertical: 30,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  sosCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#D3AF37',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  sosText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#12185D',
  },
  sosLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#12185D',
    marginBottom: 4,
  },
  sosDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  servicesContainer: {
    marginBottom: 30,
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#12185D',
    marginBottom: 16,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  serviceIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#12185D',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  contactsContainer: {
    marginBottom: 30,
  },
  contactsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#12185D',
    marginBottom: 16,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  contactText: {
    fontSize: 16,
    color: '#12185D',
    fontWeight: '500',
    marginLeft: 12,
  },
});