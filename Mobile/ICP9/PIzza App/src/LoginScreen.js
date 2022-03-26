import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity, ImageBackground
} from "react-native";
import Toast from 'react-native-simple-toast';
 
export default function App({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validation = () => {
      if(email.length > 0 && password.length > 0){
        setEmail('');
        setPassword('');
        navigation.navigate("Home",{email:email});
        Toast.show('Logged-in Succesfully', Toast.SHORT);
      }else{
        Toast.show('Please enter the correct credentials', Toast.SHORT);
      }
      // setEmail('');
      //   setPassword('');
      //   navigation.navigate("Home",{email:email});
      //   Toast.show('Logged-in Succesfully', Toast.SHORT);
  }

 
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode='contain' source={require("../assets/pizza.png")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={validation}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
      width: "60%",
    },
   
    inputView: {
      backgroundColor: "#1292B3",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,   
      alignItems: "center",
    },
    loginText:{
      color: "white",
    fontSize: 18,
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      textAlign:'center',
      color:'black'
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },

    button:{
        width: "80%",
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#1D5B6B",
    },
  });