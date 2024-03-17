import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Lab3Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab 2 Screen</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("bai1lab3")}
        >
          <Text style={styles.menuText}>Bài 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("bai2lab3")}
        >
          <Text style={styles.menuText}>Bài 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("bai3lab3")}
        >
          <Text style={styles.menuText}>Bài 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Lab3Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menuContainer: {
    alignItems: "center",
  },
  menuItem: {
    marginBottom: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0",
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
});
