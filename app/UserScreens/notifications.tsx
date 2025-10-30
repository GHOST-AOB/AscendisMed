import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';

export default function NotificationsScreen() {
  const [selectedTab, setSelectedTab] = useState('All');

  const tabs = ['All', 'Emergency', 'Membership'];

  const notifications = [
    {
      id: 1,
      type: 'emergency',
      avatar: 'https://via.placeholder.com/40',
      title: 'Dispatch en route to your location',
      subtitle: 'ETA 5 minutes • Track ambulance on the map',
      badge: 'Live',
      buttons: [
        { text: 'Open Map', primary: true },
        { text: 'Message Driver', primary: false }
      ]
    },
    {
      id: 2,
      type: 'appointment',
      avatar: 'https://via.placeholder.com/40',
      title: 'Appointment confirmed – Cardiology',
      subtitle: 'AscendiaMed • Oct 22, 10:30 AM',
      buttons: [
        { text: 'View Details', primary: true },
        { text: 'Add to Calendar', primary: false }
      ]
    },
    {
      id: 3,
      type: 'membership',
      avatar: 'https://via.placeholder.com/40',
      title: 'Gold Access – Executive Assurance approved',
      subtitle: 'Gold Access – Executive Assurance Your Executive team will contact you shortly.',
      buttons: [
        { text: 'View Membership', primary: true }
      ]
    },
    {
      id: 4,
      type: 'payment',
      avatar: 'https://via.placeholder.com/40',
      title: 'Payment received – Gold Access',
      subtitle: 'USD 250 • Receipt sent to',
      buttons: []
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Notifications</Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                selectedTab === tab && styles.selectedTab
              ]}
              onPress={() => setSelectedTab(tab)}
              activeOpacity={0.7}
            >
              <Text style={[
                styles.tabText,
                selectedTab === tab && styles.selectedTabText
              ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Notifications List */}
        <ScrollView 
          style={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {notifications.map((notification) => (
            <View key={notification.id} style={styles.notificationCard}>
              <View style={styles.notificationHeader}>
                <View style={styles.avatarContainer}>
                  <View style={styles.avatar} />
                </View>
                <View style={styles.notificationContent}>
                  <View style={styles.titleRow}>
                    <Text style={styles.notificationTitle} numberOfLines={2}>
                      {notification.title}
                    </Text>
                    {notification.badge && (
                      <View style={styles.liveBadge}>
                        <Text style={styles.liveBadgeText}>{notification.badge}</Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.notificationSubtitle} numberOfLines={2}>
                    {notification.subtitle}
                  </Text>
                </View>
              </View>

              {notification.buttons.length > 0 && (
                <View style={styles.buttonsContainer}>
                  {notification.buttons.map((button, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.actionButton,
                        button.primary && styles.primaryButton
                      ]}
                      activeOpacity={0.7}
                    >
                      <Text style={[
                        styles.actionButtonText,
                        button.primary && styles.primaryButtonText
                      ]}>
                        {button.text}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
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
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    gap: 8,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
  },
  selectedTab: {
    backgroundColor: '#E8DCC8',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
  },
  selectedTabText: {
    color: '#000000',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  notificationCard: {
    backgroundColor: '#D4A574',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  notificationHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  notificationContent: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  notificationTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
    lineHeight: 20,
  },
  liveBadge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  liveBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000000',
  },
  notificationSubtitle: {
    fontSize: 13,
    color: '#4A4A4A',
    lineHeight: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  actionButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  primaryButton: {
    backgroundColor: '#1E40AF',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  primaryButtonText: {
    color: '#FFFFFF',
  },
});