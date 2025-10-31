import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useUser } from '../../contexts/UserContext';

export default function ProfileScreen() {
  const router = useRouter();
  const { setUserType } = useUser();

  const profileOptions = [
    {
      id: 1,
      title: 'Personal Information',
      description: 'Update your profile details',
      icon: 'person-outline' as const,
    },
    {
      id: 2,
      title: 'Medical History',
      description: 'View and manage your medical records',
      icon: 'medical-outline' as const,
    },
    {
      id: 3,
      title: 'Insurance Information',
      description: 'Manage your insurance details',
      icon: 'card-outline' as const,
    },
    {
      id: 4,
      title: 'Emergency Contacts',
      description: 'Add or edit emergency contacts',
      icon: 'call-outline' as const,
    },
    {
      id: 5,
      title: 'Notifications',
      description: 'Manage notification preferences',
      icon: 'notifications-outline' as const,
    },
    {
      id: 6,
      title: 'Privacy & Security',
      description: 'Security settings and privacy options',
      icon: 'shield-outline' as const,
    },
    {
      id: 7,
      title: 'Help & Support',
      description: 'Get help and contact support',
      icon: 'help-circle-outline' as const,
    },
  ];

  const handleOptionPress = (option: string) => {
    console.log(`Navigating to ${option}`);
    // Add navigation logic here
  };

  const handleLogout = () => {
    console.log('Logging out...');
    // Reset user type to null
    setUserType(null);
    // Navigate back to index
    router.push('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100x100/D3AF37/12185D?text=KT' }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editAvatarButton}>
              <Ionicons name="camera" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>Keith Thompson</Text>
          <Text style={styles.userEmail}>keith.thompson@email.com</Text>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Options */}
        <View style={styles.optionsContainer}>
          {profileOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.optionCard}
              onPress={() => handleOptionPress(option.title)}
              activeOpacity={0.7}
            >
              <View style={styles.optionIcon}>
                <Ionicons name={option.icon} size={24} color="#12185D" />
              </View>
              <View style={styles.optionInfo}>
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.optionDescription}>{option.description}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Test Driver Access (for demonstration) */}
        <View style={styles.testContainer}>
          <Text style={styles.testTitle}>Access Test</Text>
          <TouchableOpacity
            style={styles.testButton}
            onPress={() => router.push('/DriverScreens/dashboard')}
            activeOpacity={0.7}
          >
            <Ionicons name="car" size={20} color="#12185D" />
            <Text style={styles.testButtonText}>Try Driver Dashboard (Should be blocked)</Text>
          </TouchableOpacity>
        </View>

        {/* App Information */}
        <View style={styles.appInfoContainer}>
          <Text style={styles.appInfoTitle}>App Information</Text>
          <View style={styles.appInfoCard}>
            <Text style={styles.appInfoText}>AscendisMed International</Text>
            <Text style={styles.appVersionText}>Version 1.0.0</Text>
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <Ionicons name="log-out-outline" size={20} color="#EF4444" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <View style={styles.bottomSpacing} />
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
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D3AF37',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#12185D',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#12185D',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 16,
  },
  editProfileButton: {
    backgroundColor: '#D3AF37',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editProfileText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#12185D',
  },
  optionsContainer: {
    marginBottom: 30,
  },
  optionCard: {
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
  optionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionInfo: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#12185D',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  appInfoContainer: {
    marginBottom: 30,
  },
  appInfoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#12185D',
    marginBottom: 16,
  },
  appInfoCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  appInfoText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#12185D',
    marginBottom: 4,
  },
  appVersionText: {
    fontSize: 14,
    color: '#6B7280',
  },
  testContainer: {
    marginBottom: 30,
  },
  testTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#12185D',
    marginBottom: 16,
  },
  testButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  testButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#12185D',
    marginLeft: 8,
    flex: 1,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FEE2E2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EF4444',
    marginLeft: 8,
  },
  bottomSpacing: {
    height: 20,
  },
});