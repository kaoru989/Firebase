import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const TimeScreen = () => {
  const [currentTime, setCurrentTime] = useState('');
  const navigation = useNavigation(); // Sử dụng useNavigation để lấy đối tượng navigation

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString(); 
      setCurrentTime(timeString);
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <LinearGradient
      colors={['#6A82FB', '#FFC0CB']}
      style={styles.container}
    >
      <Text style={styles.headerText}>Current Time</Text>
      <Text style={styles.timeText}>{currentTime}</Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
  },
  backButton: {
    backgroundColor: '#6A82FB',
    padding: 15,
    alignItems: 'center',
    borderRadius: 25,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TimeScreen;
