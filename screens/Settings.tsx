    import React from 'react';
    import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert } from 'react-native';
    import { Feather } from '@expo/vector-icons';
    import { useNavigation } from '@react-navigation/native';
    import { getAuth, signOut } from 'firebase/auth';
import { LinearGradient } from 'expo-linear-gradient';

    const SettingsScreen = () => {
      const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
      const [language, setLanguage] = React.useState('English');
      const auth = getAuth();
      const navigation = useNavigation();

      const handleLogout = async () => {
        try {
          await signOut(auth);
          navigation.navigate('Login' as never);
        } catch (error) {
          console.error('Error signing out: ', error);
        }
      };

      const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);

      const changeLanguage = () => {
        Alert.alert(
          'Choose Language',
          '',
          [
            { text: 'English', onPress: () => setLanguage('English') },
            { text: 'Tiếng Việt', onPress: () => setLanguage('Tiếng Việt') },
            { text: 'Cancel', style: 'cancel' },
          ],
          { cancelable: true }
        );
      };

      return (
        <LinearGradient colors={['#6A82FB', '#FFC0CB']} style={styles.gradient}>
        <View style={styles.gradient}>
          <TouchableOpacity style={styles.settingItem} onPress={changeLanguage}>
            <Feather name="globe" size={24} color="#000000" />
            <Text style={styles.settingText}>Language: {language}</Text>
          </TouchableOpacity>

          <View style={styles.settingItem}>
            <Feather name="bell" size={24} color="#000000" />
            <Text style={styles.settingText}>Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={toggleNotifications}
            />
          </View>

          <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('ChangePassword' as never)}>
            <Feather name="lock" size={24} color="#000000" />
            <Text style={styles.settingText}>Change your password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem} onPress={handleLogout}>
            <Feather name="log-out" size={24} color="#000000" />
            <Text style={styles.settingText}>Log out</Text>
          </TouchableOpacity>
        </View>
        </LinearGradient>
      );
    };

    const styles = StyleSheet.create({
      gradient: {
        flex: 1,
      },
      settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      settingText: {
        fontSize: 18,
        marginLeft: 15,
        color: '#333',
        flex: 1,
      },
    });

    export default SettingsScreen;
