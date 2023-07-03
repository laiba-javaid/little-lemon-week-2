import React from 'react';
import { View, Image, StyleSheet, Text, Pressable  } from 'react-native';



const Welcome = ({navigation}) => {
    
    return (
        <View style={styles.container}>
  
        <Image style={styles.logoImage} 
        source={require('./img/LittleLemonLogo.png')}
        // resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}     
          />

      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      

      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>

      <Pressable onPress={() => navigation.navigate('Menu')}> 
      <Text style={styles.buttonText}>View Menu</Text> 
      </Pressable> 
      </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor:'white',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 40,
    paddingBottom: 10,
    fontSize: 30,
    color: 'green',
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
  regularText: {
    fontSize: 18,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  logoHeader: {
     height: 100,
     width: 300,
     resizeMode: 'contain',
     
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 12
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
    color: 'green',
  },
  logoImage:{
    width: 100,
    height: 100,
    borderRadius: 20,
    resizeMode: 'cover',
    alignSelf:'center',
  },
  image: {
    width: 360,
    height: 440,
    borderRadius: 30,
    borderWidth:6,
    borderColor:'white',
    
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: '#fff',
  },

  title: {
    marginTop: 20,
    paddingVertical: 20,
    color: '#013220',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Welcome;