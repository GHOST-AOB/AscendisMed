import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Svg, { Path, Line, Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export default function LiveSOSMapScreen() {
  const [eta] = useState(8);
  const [driverName] = useState('George');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Mockup Map */}
      <View style={styles.mapContainer}>
        <Svg width="100%" height="100%" viewBox="0 0 400 400">
          {/* Background */}
          <Path
            d="M0 0 h400 v400 h-400 Z"
            fill="#f0f4f8"
          />
          
          {/* Streets/Roads */}
          <Line x1="50" y1="80" x2="350" y2="100" stroke="#d1d5db" strokeWidth="3" />
          <Line x1="100" y1="150" x2="320" y2="170" stroke="#d1d5db" strokeWidth="3" />
          <Line x1="80" y1="220" x2="300" y2="240" stroke="#d1d5db" strokeWidth="3" />
          <Line x1="120" y1="50" x2="140" y2="350" stroke="#d1d5db" strokeWidth="3" />
          <Line x1="250" y1="30" x2="270" y2="370" stroke="#d1d5db" strokeWidth="3" />
          
          {/* Route Path (Blue) */}
          <Path
            d="M 100 280 Q 150 250, 200 220 T 280 160"
            stroke="#3b82f6"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* User Location (Green Pin) */}
          <Circle cx="100" cy="280" r="12" fill="#22c55e" stroke="#fff" strokeWidth="3" />
          <Path
            d="M 100 268 L 100 285"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Ambulance Location (Orange/Yellow Pin) */}
          <Circle cx="280" cy="160" r="14" fill="#f59e0b" stroke="#fff" strokeWidth="3" />
          <Path
            d="M 275 160 L 280 155 L 285 160 L 280 168 Z"
            fill="#fff"
          />
        </Svg>
      </View>

      {/* Info Card */}
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <View style={styles.infoColumn}>
            <Text style={styles.label}>Ambulance ETA</Text>
            <View style={styles.etaBadge}>
              <Text style={styles.etaText}> <MaterialCommunityIcons name="car-side" color="#000" size={24} />Arriving in {eta} mins</Text>
            </View>
          </View>
          
          <View style={styles.infoColumn}>
            <Text style={styles.label}>Driver Name</Text>
            <Text style={styles.driverName}>{driverName}</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.buttonText}>Message Driver</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancel SOS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    width: width,
    height: height * 0.3,
    backgroundColor: '#f0f4f8',
  },
  infoCard: {
    position: 'absolute',
    bottom: 200,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoColumn: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  etaBadge: {
    backgroundColor: '#D3AF37',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  etaText: {
    color: '#12185D',
    fontSize: 14,
    fontWeight: '600',
  },
  driverName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#12185D',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  messageButton: {
    flex: 1,
    backgroundColor: '#D3AF37',
    paddingVertical: 5,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#D3AF37',
    paddingVertical: 5,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#12185D',fontSize: 16,
    fontWeight: '600',
  },
});