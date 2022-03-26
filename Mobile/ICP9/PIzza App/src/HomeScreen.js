import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  Picker,
  FlatList,
} from "react-native";
import Toast from "react-native-simple-toast";
import emailjs from "emailjs-com";
import { sendEmail } from "./send-email";
import { Card } from "react-native-paper";
//import CheckBox from "@react-native-community/checkbox";
import { Checkbox } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  //const form = useRef();
  const email = navigation.getParam("email");
  const data = { email: email, message: "hello world" };
  const [quantity, setQuantity] = useState(0);
  const [type, setType] = useState("Margherita");
  const [selectedValue, setSelectedValue] = useState("java");
  let drinks = 0;
  const [finalPrice, setFinalPrice] = useState(0);
  const toppings = [
    { id: 1, txt: "sausage", isChecked: false, status: "unchecked" },
    { id: 2, txt: "salami", isChecked: false, status: "unchecked" },
    { id: 3, txt: "cheddar", isChecked: false, status: "unchecked" },
    { id: 4, txt: "tomato", isChecked: false, status: "unchecked" },
    { id: 5, txt: "braised", isChecked: false, status: "unchecked" },
    { id: 6, txt: "pepper", isChecked: false, status: "unchecked" },
    { id: 7, txt: "chicken", isChecked: false, status: "unchecked" },
    { id: 8, txt: "olives", isChecked: false, status: "unchecked" },
  ];

  const Beverages = [
    {
      id: 1,
      txt: "fanta",
      price: "2.45",
      isChecked: false,
      status: "unchecked",
    },
    {
      id: 2,
      txt: "pepsi",
      price: "1.45",
      isChecked: false,
      status: "unchecked",
    },
    {
      id: 3,
      txt: "sprite",
      price: "2.15",
      isChecked: false,
      status: "unchecked",
    },
    {
      id: 4,
      txt: "water",
      price: "0.85",
      isChecked: false,
      status: "unchecked",
    },
  ];

  const [products, setProducts] = useState(toppings);
  const [beverages, setBeverages] = useState(Beverages);
  /* const order = () => {
    //e.preventDefault();
    emailjs
      .sendForm(
        "service_lkruyo9",
        "template_ecyfxob",
        data,
        "NXRu7LK5XOSUApYkt"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  } */

  // send email to the user
  const order = () => {
    let topsArray = "";
    newOrder.finalToppings.forEach(element => {
      if(topsArray == ""){
        topsArray = element.txt;
      }else{
      topsArray = topsArray + ' , '+element.txt;
      }
    });
    let drinksArray = "";
    newOrder.finalBeverages.forEach(element => {
      if(drinksArray == ""){
        drinksArray = element.txt;
      }else{
      drinksArray = drinksArray + ' , '+element.txt;
      }
    });

    sendEmail(
      email,
      "Order placement invoice",
      "This is confirmation of invoice from the 'It's Just Pizza'."+
      "\n\n Your order details. \n\n Pizza Type: "+ newOrder.finalType 
      + "\n Quantity : " + newOrder.finalQuantity 
      +"\n Pizza Toppings: "+ topsArray +"\n Beverages: "
      + drinksArray+ "\n\n Total Price: $"+ newOrder.totalPrice 
      + "\n\n Thanks for ordering with us."
    )
      .then(() => {
        console.log("Your message was successfully sent!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toppingsChange = (id) => {
    let temp = products.map((product) => {
      if (id === product.id) {
        product.isChecked = !product.isChecked;
        return {
          ...product,
          status: product.isChecked ? "checked" : "unchecked",
        };
      }
      return product;
    });
    setProducts(temp);
  };

  let selectedToppings = products.filter((product) => product.isChecked);

  const beveragesChange = (id) => {
    let temp = beverages.map((beverage) => {
      if (id === beverage.id) {
        beverage.isChecked = !beverage.isChecked;
        return {
          ...beverage,
          status: beverage.isChecked ? "checked" : "unchecked",
        };
      }
      return beverage;
    });
    setBeverages(temp);
  };

  let selectedBeverages = beverages.filter((beverage) => beverage.isChecked);

  selectedToppings.forEach(element => {
    drinks = Math.floor(drinks + element.price);
});

//setFinalPrice(Math.floor((quantity * 20) + (drinks)));

  const newOrder = {
    finalType: type,
    finalQuantity: quantity,
    finalToppings: selectedToppings,
    finalBeverages: selectedBeverages,
    totalPrice : Math.floor((quantity * 20) + (drinks))
  };

  const renderFlatList = (renderData, type) => {
    return (
      <FlatList
        data={renderData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            style={{ margin: 4 }}
            onPress={() => {
              if (type != "drinks") {
                toppingsChange(item.id);
              } else {
                beveragesChange(item.id);
              }
            }}
          >
            <View style={styles.card}>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Checkbox status={item.status} color={"green"} />
                <Text style={styles.list}>{item.txt}</Text>
                {type == "drinks" ? (
                  item.isChecked ? (
                    <Text style={styles.list1}>+ $ {item.price}</Text>
                  ) : (
                    <Text style={styles.list2}> $ {item.price}</Text>
                  )
                ) : null}
              </View>
            </View>
          </Card>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/pizza.png")}
      /> */}
      <Text style={styles.label}>Type</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setType(itemValue)}
      >
        <Picker.Item label="Margherita" value="Margherita" />
        <Picker.Item label="Parma" value="Parma" />
        <Picker.Item label="Pepperoni" value="Pepperoni" />
        <Picker.Item label="Calzone" value="Calzone" />
        <Picker.Item label="Aussie" value="Aussie" />
        <Picker.Item label="Benedict" value="Benedict" />
      </Picker>
      <Text style={styles.label}>Quantity</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.MinusBtn}
          onPress={() => {
            if (quantity > 0) {
              setQuantity(quantity - 1);
            }
          }}
        >
          <Text style={styles.logoutText}>-</Text>
        </TouchableOpacity>
        <Text style={{ margin: 8, fontSize: 17, color: "green" }}>
          {quantity}
        </Text>
        <TouchableOpacity
          style={styles.PlusBtn}
          onPress={() => {
            setQuantity(quantity + 1);
          }}
        >
          <Text style={styles.logoutText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Toppings</Text>
      <View style={{ flex: 1, width: "80%" }}>
        {renderFlatList(products, "extra")}
      </View>
      <Text style={styles.label}>Beverages</Text>
      <View style={{ flex: 1, width: "80%" }}>
        {renderFlatList(beverages, "drinks")}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity style={styles.OrderBtn} onPress={order}>
          <Text style={styles.logoutText}>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SumBtn}
          onPress={() => {
            navigation.navigate("Summary", {newData: newOrder});
            //Toast.show("Logged-out", Toast.SHORT);
          }}
        >
          <Text style={styles.logoutText}>Summary</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#FFFFFF",
    flex: 1,
    flexDirection: "column",
    //height:"100%"
  },
  logoutText: {
    color: "white",
    fontSize: 20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    justifyContent: "space-around",
  },
  label: {
    textAlign: "center",
    justifyContent: "space-around",
    marginBottom: 2,
    fontWeight: "bold",
    marginTop: 15,
    fontSize: 18,
  },
  list: {
    textAlign: "center",
    justifyContent: "space-around",
    marginBottom: 2,
  },
  list1: {
    textAlign: "right",
    flex: 1,
    justifyContent: "space-around",
    marginBottom: 2,
    color: "green",
    marginRight: 5,
  },
  list2: {
    textAlign: "right",
    flex: 1,
    justifyContent: "space-around",
    marginBottom: 2,
    color: "black",
    marginRight: 5,
  },
  welcomeText: {
    textAlign: "center",
  },
  image: {
    width: "40%",
  },
  inputView: {
    backgroundColor: "#1292B3",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    textAlign: "center",
  },
  OrderBtn: {
    width: "30%",
    borderRadius: 25,
    height: 30,
    margin: 15,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#1D5B6B",
    textAlign: "center",
    color: "white",
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
  },
  PlusBtn: {
    width: "10%",
    borderRadius: 25,
    height: 30,
    marginTop: 5,
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#049178",
    textAlign: "center",
  },
  MinusBtn: {
    width: "10%",
    borderRadius: 25,
    height: 30,
    marginTop: 5,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#049178",
    textAlign: "center",
  },
});

export default HomeScreen;
