import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function MyMembership() {
  const benefits = [
    { icon: '📞', text: '24/7 Case Facilitator Access' },
    { icon: '🏥', text: 'Annual Executive Health Check' },
    { icon: '👨‍⚕️', text: 'Dedicated Physician Concierge' },
    { icon: '⭐', text: 'Priority Specialist Access' },
    { icon: '🚁', text: 'Emergency Medical Evacuation (East Africa)' },
    { icon: '💳', text: 'Gold-Plated Membership Card' },
    { icon: '📅', text: 'Private Seminars & Networking Events' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Membership</Text>
        </View>

        {/* Membership Card */}
        <View style={styles.cardContainer}>
          <View style={styles.membershipCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTier}>GOLD</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardLeft}>
                <Text style={styles.memberName}>CLAUDIA J.</Text>
                <Text style={styles.memberNameLast}>BENET</Text>
                <Text style={styles.cardLogo}>◇ AssuredCare</Text>
              </View>
              <View style={styles.cardRight}>
                <View style={styles.qrCode}>
                  <View style={styles.qrGrid}>
                    {[...Array(49)].map((_, i) => (
                      <View 
                        key={i} 
                        style={[
                          styles.qrPixel,
                          { backgroundColor: Math.random() > 0.5 ? '#F4C542' : '#000' }
                        ]}
                      />
                    ))}
                  </View>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardInfoText}>Valid thru</Text>
                  <Text style={styles.cardInfoText}>Nov 2025</Text>
                  <Text style={styles.cardInfoText}>Member since 2021</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Included Benefits */}
        <View style={styles.benefitsSection}>
          <Text style={styles.sectionTitle}>Included Benefits</Text>
          {benefits.map((benefit, index) => (
            <View key={index} style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>{benefit.icon}</Text>
              <Text style={styles.benefitText}>{benefit.text}</Text>
            </View>
          ))}
        </View>

        {/* Care Team */}
        <View style={styles.careTeamSection}>
          <View style={styles.careTeamHeader}>
            <View>
              <Text style={styles.careTeamTitle}>Care Team</Text>
              <Text style={styles.careTeamSubtitle}>Your dedicated coordinators</Text>
            </View>
            <TouchableOpacity style={styles.contactButton}>
              <Text style={styles.contactButtonText}>Contact</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.physicianRow}>
            <Text style={styles.physicianLabel}>Physician Concierge</Text>
            <TouchableOpacity style={styles.messageButton}>
              <Text style={styles.messageButtonText}>Message</Text>
            </TouchableOpacity>
          </View>
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
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  cardContainer: {
    padding: 16,
  },
  membershipCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  cardHeader: {
    marginBottom: 20,
  },
  cardTier: {
    fontSize: 14,
    fontWeight: '700',
    color: '#F4C542',
    letterSpacing: 2,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLeft: {
    flex: 1,
  },
  memberName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#F4C542',
    letterSpacing: 1,
  },
  memberNameLast: {
    fontSize: 20,
    fontWeight: '700',
    color: '#F4C542',
    letterSpacing: 1,
    marginBottom: 40,
  },
  cardLogo: {
    fontSize: 11,
    color: '#F4C542',
  },
  cardRight: {
    alignItems: 'flex-end',
  },
  qrCode: {
    backgroundColor: '#F4C542',
    padding: 8,
    borderRadius: 8,
    marginBottom: 12,
  },
  qrGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 70,
    height: 70,
  },
  qrPixel: {
    width: 8,
    height: 8,
    margin: 1,
    borderRadius: 1,
  },
  cardInfo: {
    alignItems: 'flex-end',
  },
  cardInfoText: {
    fontSize: 10,
    color: '#F4C542',
    lineHeight: 14,
  },
  benefitsSection: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  benefitIcon: {
    fontSize: 20,
    marginRight: 12,
    width: 24,
  },
  benefitText: {
    fontSize: 15,
    color: '#333',
    flex: 1,
  },
  careTeamSection: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 8,
    marginBottom: 100,
  },
  careTeamHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  careTeamTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  careTeamSubtitle: {
    fontSize: 13,
    color: '#666',
  },
  contactButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  contactButtonText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
  physicianRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  physicianLabel: {
    fontSize: 15,
    color: '#333',
  },
  messageButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  messageButtonText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
});