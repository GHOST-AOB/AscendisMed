import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

export default function MembershipScreen() {
  const benefits = [
    { icon: '✨', text: '24/7 Case Facilitator' },
    { icon: '🏥', text: 'Annual Executive Health Check.' },
    { icon: '👨‍⚕️', text: 'Dedicated Physician Concierge' },
    { icon: '🛡️', text: 'Priority Specialist Access in Kampala.' },
    { icon: '🚁', text: 'Emergency Medical Evacuation' },
    { icon: '💳', text: 'Gold-Plated Membership Card' },
    { icon: '📅', text: 'Private Seminars & Networking Events.' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PriveCare Plans</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Premium Card */}
        <View style={styles.premiumCard}>
          <Text style={styles.premiumTitle}>Ascendis PriveCare</Text>
          <Text style={styles.premiumSubtitle}>
            Your Health. Your Legacy. Privately Secured.
          </Text>
        </View>

        {/* Plan Card */}
        <View style={styles.planCard}>
          <Text style={styles.planTitle}>Gold Access – Executive Assurance</Text>
          <Text style={styles.planPrice}>USD 250 per year</Text>

          {/* Benefits List */}
          <View style={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <View key={index} style={styles.benefitItem}>
                <Text style={styles.benefitIcon}>{benefit.icon}</Text>
                <Text style={styles.benefitText}>{benefit.text}</Text>
              </View>
            ))}
          </View>

          {/* Choose Button */}
          <TouchableOpacity style={styles.chooseButton}>
            <Text style={styles.chooseButtonText}>Choose Gold</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  premiumCard: {
    backgroundColor: '#F5C248',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  premiumTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  premiumSubtitle: {
    fontSize: 14,
    color: '#4a4a4a',
  },
  planCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 8,
  },
  planPrice: {
    fontSize: 14,
    color: '#1a237e',
    marginBottom: 20,
  },
  benefitsList: {
    marginBottom: 24,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  benefitIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  benefitText: {
    flex: 1,
    fontSize: 14,
    color: '#1a237e',
    lineHeight: 20,
  },
  chooseButton: {
    backgroundColor: '#1a237e',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  chooseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#F5C248',
    paddingVertical: 8,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navItemActive: {
    borderBottomWidth: 3,
    borderBottomColor: '#1a237e',
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    color: '#1a1a1a',
  },
  navLabelActive: {
    fontWeight: '600',
    color: '#1a237e',
  },
});