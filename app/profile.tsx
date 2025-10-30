import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const ProfileScreen = () => {
  const menuItems = [
    { id: 1, title: 'My Medical Info', hasArrow: true },
    { id: 2, title: 'Notifications', hasArrow: true },
    { id: 3, title: 'Wallet', hasArrow: true },
    { id: 4, title: 'SOS History', hasArrow: true },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400' }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Claudia J. Benet</Text>
          <Text style={styles.profileEmail}>claudia-benet@gmail.com</Text>
          
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <Text style={styles.menuItemText}>{item.title}</Text>
              {item.hasArrow && <Text style={styles.arrow}>›</Text>}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a4d',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a1a4d',
    marginBottom: 8,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 25,
  },
  editButton: {
    backgroundColor: '#F4C430',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a4d',
  },
  menuContainer: {
    gap: 12,
    paddingBottom: 100,
  },
  menuItem: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a4d',
  },
  arrow: {
    fontSize: 24,
    color: '#999',
    fontWeight: '300',
  },
});

export default ProfileScreen;