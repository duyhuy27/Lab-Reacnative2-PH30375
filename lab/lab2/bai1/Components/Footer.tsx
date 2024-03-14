import React, { FC, memo } from "react";
import { Text, View, StyleSheet } from "react-native";

type FooterType = {
  timerUpdate: string;
  backgroundColor: string;
};

const Footer: FC<FooterType> = memo((props) => {
  const { timerUpdate, backgroundColor } = props;

  console.log("====================================");
  console.log("re-render footer");
  console.log("====================================");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.textStyle}>
        {" "}
        Thời gian cập nhật thông tin {timerUpdate}{" "}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333", // Đổi màu văn bản sang màu đen
  },
});

export { Footer };
