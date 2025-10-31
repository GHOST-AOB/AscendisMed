import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type TabName = 'Home' | 'Appointments' | 'Membership' | 'Profile';

interface LayoutProps {
  activeTab?: TabName;
  onTabPress?: (tab: TabName) => void;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  activeTab = 'Home',
  onTabPress,
  children,
}) => {
  const tabs: { name: TabName; icon: keyof typeof Ionicons.glyphMap }[] = [
    { name: 'Home', icon: 'home-outline' },
    { name: 'Appointments', icon: 'calendar-outline' },
    { name: 'Membership', icon: 'card-outline' },
    { name: 'Profile', icon: 'person-outline' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1E3A8A" />
      
      {/* SOS Banner */}
      <View style={styles.sosBanner}>
        <Text style={styles.sosText}>
          Tap the SOS button for immediate help.
        </Text>
      </View>

      {/* Navigation Bar */}
      <View style={styles.navigationBar}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.name}
            style={styles.tabButton}
            onPress={() => onTabPress?.(tab.name)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={tab.icon}
              size={28}
              color={activeTab === tab.name ? '#1E3A8A' : '#3B4F8A'}
            />
            <Text
              style={[
                styles.tabLabel,
                activeTab === tab.name && styles.tabLabelActive,
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content Area */}
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  sosBanner: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  sosText: {
    fontSize: 16,
    color: '#1E3A8A',
    fontWeight: '500',
    textAlign: 'center',
  },
  navigationBar: {
    flexDirection: 'row',
    backgroundColor: '#EAB308',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  tabLabel: {
    fontSize: 12,
    color: '#3B4F8A',
    marginTop: 4,
    fontWeight: '600',
  },
  tabLabelActive: {
    color: '#1E3A8A',
    fontWeight: '700',
  },
  content: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
});

export default Layout;

