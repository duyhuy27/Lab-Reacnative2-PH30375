import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Lab1Screen from "./lab/lab1/lab1_home";
import Bai1 from "./lab/lab1/bai1/bai1";
import Bai2 from "./lab/lab1/bai2";
import Bai3Lab1 from "./lab/lab1/bai3";
import HomeLab2 from "./lab/lab2";
import Lab2Bai1 from "./lab/lab2/bai1";
import Lab3Home from "./lab/lab3";
import Lab3Bai1 from "./lab/lab3/bai1";
import Bai3Lab3 from "./lab/lab3/bai3";
import Bai2Lab3 from "./lab/lab3/bai2";
import Bai2L3 from "./lab/lab3/bai2/app";
import Bai3L3 from "./lab/lab3/bai3";
import ScrollViewScreen from "./lab/lab3/bai2/app";
import Lab3Bai2 from "./lab/lab3/bai2/app";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Lab1"
          component={Lab1Screen}
          options={{ title: "Lab 1" }}
        />
        <Stack.Screen
          name="Lab2"
          component={HomeLab2}
          options={{ title: "Lab 2" }}
        />
        <Stack.Screen
          name="Lab3"
          component={Lab3Home}
          options={{ title: "Lab 3" }}
        />
        <Stack.Screen
          name="bai1lap1"
          component={Bai1}
          options={{ title: "Bài 1 Lab 1" }}
        />
        <Stack.Screen
          name="bai2lab1"
          component={Bai2}
          options={{ title: "Bài 2 Lab 1" }}
        />
        <Stack.Screen
          name="bai3lab1"
          component={Bai3Lab1}
          options={{ title: "Lab 3" }}
        />
        <Stack.Screen
          name="bai1lab2"
          component={Lab2Bai1}
          options={{ title: "Bài 2 Lab 2" }}
        />
        <Stack.Screen
          name="bai1lab3"
          component={Lab3Bai1}
          options={{ title: "Bài 1 Lab 3" }}
        />
        <Stack.Screen
          name="bai2lab3"
          component={Lab3Bai2}
          options={{ title: "Bài 2 Lab 3" }}
        />
        <Stack.Screen
          name="bai3lab3"
          component={Bai3L3}
          options={{ title: "Bài 3 Lab 3" }}
        />
        {/* Thêm các màn hình cho các lab khác tại đây */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.labMenuItem}
        onPress={() => navigation.navigate("Lab1")}
      >
        <Text style={styles.menuText}>Lab 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.labMenuItem}
        onPress={() => navigation.navigate("Lab2")}
      >
        <Text style={styles.menuText}>Lab 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.labMenuItem}
        onPress={() => navigation.navigate("Lab3")}
      >
        <Text style={styles.menuText}>Lab 3</Text>
      </TouchableOpacity>
      {/* Thêm các mục menu cho các lab khác tại đây */}
    </View>
  );
};

// Thêm các màn hình cho các lab khác tại đây

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  labMenuItem: {
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menuText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  labScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  screenText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default App;
