import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import LittleLemonHeader from './LittleLemonHeader';
//import LittleLemonFooter from './LittleLemonFooter';
import MenuScreen from "./MenuScreen";
import WelcomeScreen from "./WelcomeScreen";
//import LoginScreen from './LoginScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Menu') {
            iconName =  'ios-list';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Home" component={WelcomeScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Navigator>


      {/* <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View> */}
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

