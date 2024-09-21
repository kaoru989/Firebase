import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day: { dateString: React.SetStateAction<string>; }) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Calendar</Text>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#FF5E62' },
        }}
        theme={{
          selectedDayBackgroundColor: '#FF5E62',
          todayTextColor: '#FF5E62',
          arrowColor: '#FF5E62',
        }}
      />
      {selectedDate ? (
        <Text style={styles.selectedDateText}>
          Selected date: {selectedDate}
        </Text>
      ) : (
        <Text style={styles.noDateText}>Select a day to view details.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF5E62',
    textAlign: 'center',
    marginBottom: 20,
  },
  selectedDateText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
  noDateText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#999',
  },
});

export default CalendarScreen;
