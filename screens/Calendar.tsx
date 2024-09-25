import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day: { dateString: React.SetStateAction<string>; }) => {
    setSelectedDate(day.dateString);
  };

  return (
    <ImageBackground 
      source={require('@/assets/99a145ebcbc96d9734d8.jpg')} 
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.header}>Your Calendar</Text>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#6A82FB' }, // Màu lựa chọn
        }}
        theme={{
          selectedDayBackgroundColor: '#6A82FB',
          todayTextColor: '#6A82FB',
          arrowColor: '#6A82FB',
          monthTextColor: '#6A82FB',
          textDayFontFamily: 'Arial',
          textMonthFontWeight: 'bold',
          textMonthFontSize: 16,
          textDayHeaderFontSize: 12,
          textDayFontSize: 14,
          textDisabledColor: '#CCCCCC',
        }}
      />
      {selectedDate ? (
        <Text style={styles.selectedDateText}>
          Selected date: {selectedDate}
        </Text>
      ) : (
        <Text style={styles.noDateText}>Select a day to view details.</Text>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFC0CB', 
    textAlign: 'center',
    marginBottom: 20,
  },
  selectedDateText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF', 
  },
  noDateText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default CalendarScreen;
