import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MembershipScreen() {
  const router = useRouter();

  const handleChooseGold = () => {
    router.push('/(tabs)/UserScreens/membership_checkout');
  };

  const benefits = [
    { iconType: 'MaterialIcons', iconName: 'support-agent', text: '24/7 Case Facilitator' },
    { iconType: 'FontAwesome5', iconName: 'heartbeat', text: 'Annual Executive Health Check.' },
    { iconType: 'FontAwesome5', iconName: 'user-md', text: 'Dedicated Physician Concierge' },
    { iconType: 'MaterialIcons', iconName: 'location-on', text: 'Priority Specialist Access in Kampala.' },
    { iconType: 'FontAwesome5', iconName: 'helicopter', text: 'Emergency Medical Evacuation' },
    { iconType: 'Ionicons', iconName: 'card', text: 'Gold-Plated Membership Card' },
    { iconType: 'MaterialIcons', iconName: 'event', text: 'Private Seminars & Networking Events.' },
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
                <View style={styles.benefitIconContainer}>
                  {benefit.iconType === 'Ionicons' && (
                    <Ionicons name={benefit.iconName as any} size={20} color="#12185D" />
                  )}
                  {benefit.iconType === 'MaterialIcons' && (
                    <MaterialIcons name={benefit.iconName as any} size={20} color="#12185D" />
                  )}
                  {benefit.iconType === 'FontAwesome5' && (
                    <FontAwesome5 name={benefit.iconName as any} size={20} color="#12185D" />
                  )}
                </View>
                <Text style={styles.benefitText}>{benefit.text}</Text>
              </View>
            ))}
          </View>

          {/* Choose Button */}
          <TouchableOpacity style={styles.chooseButton} onPress={handleChooseGold}>
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
    backgroundColor: '#D3AF37',
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
    color: '#12185D',
    marginBottom: 8,
  },
  planPrice: {
    fontSize: 14,
    color: '#12185D',
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
  benefitIconContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  benefitText: {
    flex: 1,
    fontSize: 14,
    color: '#12185D',
    lineHeight: 20,
  },
  chooseButton: {
    backgroundColor: '#12185D',
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
    backgroundColor: '#D3AF37',
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
    borderBottomColor: '#12185D',
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
    color: '#12185D',
  },
});