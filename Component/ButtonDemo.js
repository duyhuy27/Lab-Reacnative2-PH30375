import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { forwardRef } from "react";

const ButtonDemo = forwardRef(({ children, onPress, style }, ref) => {
  return (
    <TouchableOpacity onPress={onPress} ref={ref} style={[st.nutBam, style]}>
      <Text style={st.txt}>{children}</Text>
    </TouchableOpacity>
  );
});

export default ButtonDemo;

const st = StyleSheet.create({
  nutBam: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 30,
  },
  txt: {
    color: "yellow",
    alignSelf: "center",
  },
});
