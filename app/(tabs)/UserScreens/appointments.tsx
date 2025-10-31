import React, { JSX, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function BookAppointmentScreen() {
  const [selectedDate, setSelectedDate] = useState(8);
  const [selectedTime, setSelectedTime] = useState('11:00 AM');

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  
  const calendarDays = [
    [29, 30, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31]
  ];

  const timeSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '1:00 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: true }
  ];

  const renderCalendarDay = (day: number, weekIndex: number): JSX.Element => {
    const isCurrentMonth = !(weekIndex === 0 && day > 20) && !(weekIndex === 4 && day < 20);
    const isSelected = day === selectedDate && isCurrentMonth;
    
    return (
      <TouchableOpacity
        key={`${weekIndex}-${day}`}
        style={[
          styles.dayCell,
          isSelected && styles.selectedDay
        ]}
        onPress={() => isCurrentMonth && setSelectedDate(day)}
        activeOpacity={0.7}
      >
        <Text style={[
          styles.dayText,
          !isCurrentMonth && styles.inactiveDay,
          isSelected && styles.selectedDayText
        ]}>
          {day}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Book Appointment</Text>
        </View>

        <ScrollView 
          style={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Calendar Header */}
          <View style={styles.calendarHeader}>
            <Text style={styles.monthYear}>October 2024</Text>
            <View style={styles.monthNavigation}>
              <TouchableOpacity style={styles.navButton}>
                <Text style={styles.navText}>‹</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navButton}>
                <Text style={styles.navText}>›</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Calendar */}
          <View style={styles.calendar}>
            {/* Week Days Header */}
            <View style={styles.weekDaysRow}>
              {daysOfWeek.map((day, index) => (
                <View key={index} style={styles.dayHeader}>
                  <Text style={styles.dayHeaderText}>{day}</Text>
                </View>
              ))}
            </View>

            {/* Calendar Days */}
            {calendarDays.map((week, weekIndex) => (
              <View key={weekIndex} style={styles.weekRow}>
                {week.map((day) => renderCalendarDay(day, weekIndex))}
              </View>
            ))}
          </View>

          {/* Available Time Slots Section */}
          <Text style={styles.sectionTitle}>Available Time Slots</Text>

          <View style={styles.timeSlotsContainer}>
            {timeSlots.map((slot, index) => {
              const isSelected = slot.time === selectedTime;
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.timeSlot,
                    isSelected && styles.selectedTimeSlot
                  ]}
                  onPress={() => setSelectedTime(slot.time)}
                  activeOpacity={0.7}
                >
                  <Text style={[
                    styles.timeSlotText,
                    isSelected && styles.selectedTimeSlotText
                  ]}>
                    {slot.time}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
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
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  backArrow: {
    fontSize: 24,
    color: '#000000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 20,
  },
  monthYear: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  monthNavigation: {
    flexDirection: 'row',
    gap: 12,
  },
  navButton: {
    padding: 4,
  },
  navText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '400',
  },
  calendar: {
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
  },
  weekDaysRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  dayHeader: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  dayHeaderText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666666',
  },
  weekRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  dayCell: {
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 2,
  },
  selectedDay: {
    backgroundColor: '#D4A574',
  },
  dayText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '400',
  },
  inactiveDay: {
    color: '#CCCCCC',
  },
  selectedDayText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4169E1',
    marginTop: 24,
    marginBottom: 16,
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 32,
  },
  timeSlot: {
    width: '48%',
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  selectedTimeSlot: {
    backgroundColor: '#D4A574',
  },
  timeSlotText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
  },
  selectedTimeSlotText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});