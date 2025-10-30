import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);

  const messages = [
    {
      id: 1,
      text: "Hello, I'm John, your ambulance driver. I'm 8 minutes away.",
      isDriver: true,
    },
    {
      id: 2,
      text: "Okay, thank you! I'm waiting.",
      isDriver: false,
    },
    {
      id: 3,
      text: 'Traffic is clear, ETA remains 8 minutes.',
      isDriver: true,
    },
  ];

  const attachmentOptions = [
    { id: 'camera', label: 'Camera', icon: 'camera-outline', color: '#0052CC' },
    { id: 'library', label: 'Photo & Video Library', icon: 'images-outline', color: '#0052CC' },
    { id: 'document', label: 'Document', icon: 'document-outline', color: '#0052CC' },
    { id: 'location', label: 'Location', icon: 'location-outline', color: '#0052CC' },
    { id: 'contact', label: 'Contact', icon: 'person-outline', color: '#0052CC' },
  ];

  const handleAttachmentSelect = (optionId: string) => {
    console.log(`Selected: ${optionId}`);
    setShowAttachmentMenu(false);
    // Add your logic here for each attachment type
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="chevron-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat with Driver</Text>
        <TouchableOpacity style={styles.callButton}>
          <Icon name="call-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <ScrollView style={styles.messagesContainer}>
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.messageBubble,
              msg.isDriver ? styles.driverMessage : styles.userMessage,
            ]}
          >
            <Text style={[
              styles.messageText,
              !msg.isDriver && styles.userMessageText
            ]}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Input Bar */}
      <View style={styles.inputContainer}>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setShowAttachmentMenu(true)}
        >
          <Icon name="add" size={28} color="#0052CC" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#999"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.micButton}>
          <Icon name="mic-outline" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton}>
          <Icon name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      

      {/* Attachment Menu Modal */}
      <Modal
        visible={showAttachmentMenu}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowAttachmentMenu(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowAttachmentMenu(false)}
        >
          <TouchableOpacity 
            activeOpacity={1}
            style={styles.attachmentMenuContainer}
            onPress={(e) => e.stopPropagation()}
          >
            <View style={styles.attachmentMenu}>
              <View style={styles.attachmentHeader}>
                <Text style={styles.attachmentHeaderText}>
                  Hello, I'm John, your ambulance driver. I'm 8 minutes away.
                </Text>
              </View>

              <View style={styles.optionsContainer}>
                {attachmentOptions.map((option, index) => (
                  <TouchableOpacity
                    key={option.id}
                    style={[
                      styles.attachmentOption,
                      index === attachmentOptions.length - 1 && styles.lastOption
                    ]}
                    onPress={() => handleAttachmentSelect(option.id)}
                  >
                    <Icon 
                      name={option.icon} 
                      size={24} 
                      color={option.color}
                      style={styles.optionIcon}
                    />
                    <Text style={styles.attachmentLabel}>{option.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowAttachmentMenu(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  callButton: {
    padding: 4,
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#f8f8f8',
  },
  messageBubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 18,
    marginBottom: 12,
  },
  driverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F5C248',
    borderBottomLeftRadius: 4,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0052CC',
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 15,
    color: '#000',
    lineHeight: 20,
  },
  userMessageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  addButton: {
    padding: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    marginHorizontal: 8,
  },
  micButton: {
    padding: 8,
  },
  sendButton: {
    backgroundColor: '#0052CC',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#F5C248',
    paddingTop: 8,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navItemActive: {
    borderTopWidth: 3,
    borderTopColor: '#000',
  },
  navLabel: {
    fontSize: 11,
    color: '#000',
    marginTop: 4,
  },
  navLabelActive: {
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  attachmentMenuContainer: {
    backgroundColor: 'transparent',
  },
  attachmentMenu: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  attachmentHeader: {
    backgroundColor: '#F5C248',
    padding: 16,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  attachmentHeaderText: {
    fontSize: 15,
    color: '#000',
    lineHeight: 20,
  },
  optionsContainer: {
    backgroundColor: '#fff',
    paddingTop: 8,
  },
  attachmentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e5e5',
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  optionIcon: {
    marginRight: 16,
  },
  attachmentLabel: {
    fontSize: 17,
    color: '#000',
  },
  cancelButton: {
    paddingVertical: 18,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 8,
    borderTopColor: '#f5f5f5',
    marginBottom: 20,
  },
  cancelButtonText: {
    fontSize: 17,
    color: '#0052CC',
    fontWeight: '600',
  },
});