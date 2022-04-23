import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, Button, Text,TextInput,Image } from 'react-native';
import * as Speech from 'expo-speech';
export default function App() {
  const [text, setText] = useState("");
  const speak = () => {
    Speech.speak(text);
  };
return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.image} source={require("./assets/5256064.png")} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Text"
          placeholderTextColor="#003f5c"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </View>
      <Button title="Start listening" onPress={speak} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: "center",
  },
  image: {
    marginBottom: 100,
    height:250,
    width:250
  },
  Texts: {
    marginTop: 10,
    color: 'black',
    padding:10,
  },
  inputView: {
    borderWidth:2,
    borderColor:"#3BD8FF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    textAlign:'center'
  },
});