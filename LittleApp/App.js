import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LittleLemonHeader from './LittleLemonHeader';
import LittleLemonFooter from './LittleLemonFooter';
//import MenuScreen from "./MenuScreen";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from './LoginScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
    <View style={styles.container}>
          <LittleLemonHeader />
       
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerTitleAlign:'center'}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Home' }}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
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

