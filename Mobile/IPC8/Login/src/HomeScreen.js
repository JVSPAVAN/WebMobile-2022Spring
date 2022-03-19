import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity,Image } from "react-native";
import Toast from 'react-native-simple-toast';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Image style={styles.image} resizeMode='contain' source={require("../assets/welcome.jpg")} />
      <Text style={styles.welcomeText}>Welcome to Mobile Development</Text>
      <TouchableOpacity style={styles.logoutBtn} onPress={() => {
          navigation.navigate("Login");
          Toast.show('Logged-out', Toast.SHORT);
      }}>
        <Text style={styles.logoutText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
      },
  text: {
    fontSize: 30,
    textAlign:'center',
    justifyContent:'space-around',
  },
  welcomeText: {
    textAlign:'center'
  },
  image: {
    alignItems:'center',
    width:"100%",
  },
  logoutBtn: {
    width: "50%",
    borderRadius: 25,
    height: 30,
    marginTop:5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1D5B6B",
    textAlign:'center'
  },
});

export default HomeScreen;
