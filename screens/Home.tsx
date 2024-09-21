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
      colors={['#6A82FB', '#FFC0CB']} // Thay đổi màu gradient
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome Home!</Text>
      </View>
      <View style={styles.content}>
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    padding: 25,
    marginVertical: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Nền trong suốt
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  cardText: {
    fontSize: 20,
    color: '#6A82FB',
    marginTop: 10,
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
