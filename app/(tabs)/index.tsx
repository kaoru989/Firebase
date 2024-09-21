import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screens/LoginScreens';
import SignupScreen from '@/screens/SignUp';
import ForgotPasswordScreen from '@/screens/ForgotPassword';
import HomeScreen from '@/screens/Home';
import SettingsScreen from '@/screens/Settings';
import CalendarScreen from '@/screens/Calendar';
import Tasks from '@/screens/Tasks';
import TasksScreen from '@/screens/Tasks';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }}
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen} 
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
          options={{ title: 'Forgot Password' }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{ title: 'Setting' }} 
        />
         <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{ title: 'Calendar' }} 
         />
         <Stack.Screen
          name="Tasks"
          component={TasksScreen}
          options={{ title: 'Tasks' }} 
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;