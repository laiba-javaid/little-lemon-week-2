import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { Ionicons } from '@expo/vector-icons';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LittleLemonHeader from './LittleLemonHeader';
import LittleLemonFooter from './LittleLemonFooter';
import MenuScreen from "./MenuScreen";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from './LoginScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
    <View style={styles.container}>
    <LittleLemonHeader />
    
    <Drawer.Navigator useLegacyImplementation initialRouteName="Login">
            <Drawer.Screen name="Welcome" component={WelcomeScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
    </View>
    <View style={styles.footerContainer}>
          <LittleLemonFooter />
    </View>
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

