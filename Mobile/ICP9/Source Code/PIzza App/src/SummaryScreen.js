import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";

const SummaryScreen = ({ navigation }) => {
  const newOrder = navigation.getParam("newData");
  console.log(newOrder);

  return (
    <View style={styles.viewStyle}>
        <Text style={{justifyContent:'center', fontSize:20, alignSelf:'center',margin:5}}>Order Summary</Text>
        <View style={{flexDirection:'row',margin:3}}>
      <Text style={styles.textHead}>Pizza Type : </Text>
      <Text style={styles.textStyle}>{newOrder.finalType}</Text>
      </View>
      <View style={{flexDirection:'row',margin:3}}>
      <Text style={styles.textHead}>Pizza Quantity : </Text>
      <Text style={styles.textStyle}>{newOrder.finalQuantity}</Text>
      </View>
      <Text style={styles.textHead}>Toppings :</Text>
      <View style={{flexDirection:'row',margin:3}}>
      <FlatList
        keyExtractor={(Friend) => Friend.id}
        data={newOrder.finalToppings}
        horizontal
        renderItem={({ item }) => {
          return (
            <Card  style={{margin:3}}>
              <Text style={styles.textStyle}>{item.txt}</Text>
            </Card>
          );
        }}
      />
      </View>
      <Text style={styles.textHead}>Beverages :</Text>
      <View style={{flexDirection:'row',margin:3}}>
      <FlatList
        keyExtractor={(Friend) => Friend.id}
        data={newOrder.finalBeverages}
        horizontal
        renderItem={({ item }) => {
          return (
            <Card style={{margin:3}}>
              <Text style={styles.textStyle}>{item.txt}</Text>
            </Card>
          );
        }}
      />
      </View>
      <View style={{flexDirection:'row',margin:3}}>
      <Text style={styles.textStyle}>Total : </Text>
      <Text style={styles.textStyle1}> $ {newOrder.totalPrice}</Text>
      </View>
      <TouchableOpacity
        style={styles.SumBtn}
        onPress={() => {
          navigation.navigate("Home", { newData: newOrder });
        }}
      >
        <Text style={styles.logoutText}>Go To Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    padding: 5,
    fontSize:16,
    fontWeight:'bold',
    justifyContent: "space-around",
    alignSelf:'center',
    color:'black'
  },
  textStyle1: {
    padding: 5,
    fontSize:18,
    fontWeight:'bold',
    justifyContent: "space-around",
    alignSelf:'center',
    color:'green'
  },
  textHead: {
      fontSize:16,
    padding: 5,
  },
  viewStyle: {
    alignItems: "flex-start",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoutText: {
    color: "white",
    fontSize: 18,
  },
  SumBtn: {
    width: "30%",
    borderRadius: 25,
    height: 30,
    margin: 15,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#1D5B6B",
    textAlign: "center",
    alignSelf:'center',
  },
});

export default SummaryScreen;
