import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';

const HomeScreen = () => {
  const navigation = useNavigation();
  const auth = getAuth(); 

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      navigation.navigate('Login' as never);
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <LinearGradient
      colors={['#6A82FB', '#FFC0CB']} 
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome Home!</Text>
      </View>
      <Text style={styles.subtitle}>What would you like to do?</Text>
      <View style={styles.cardsContainer}>
        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('Tasks' as never)} 
        >
          <Feather name="list" size={24} color="#6A82FB" />
          <Text style={styles.cardText}>Manage Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('Calendar' as never)} 
        >
          <Feather name="calendar" size={24} color="#6A82FB" />
          <Text style={styles.cardText}>View Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('Notes' as never)} 
        >
          <Feather name="file-text" size={24} color="#6A82FB" />
          <Text style={styles.cardText}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('Time' as never)} 
        >
          <Feather name="clock" size={24} color="#6A82FB" />
          <Text style={styles.cardText}>Time</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('Settings' as never)}
        >
          <Feather name="settings" size={24} color="#6A82FB" />
          <Text style={styles.cardText}>App Settings</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: 'space-between', // Đẩy nút Log Out xuống dưới
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%', 
    height: 100, 
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  cardText: {
    fontSize: 16,
    color: '#6A82FB',
    marginTop: 5,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#6A82FB',
    padding: 15,
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 30,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
