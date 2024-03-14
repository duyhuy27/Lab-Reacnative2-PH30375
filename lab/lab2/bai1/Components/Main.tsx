import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

export type UserType = {
  name: string;
  image: string;
};

const colors = [
  "#FF5733", // Đỏ cam
  "#33FF57", // Xanh lá cây
  "#3357FF", // Xanh dương
  "#FF33E6", // Hồng
  "#33E6FF", // Xanh dương nhạt
  "#FFE433", // Vàng
  "#FF3333", // Đỏ
  "#33FFEC", // Xanh dương nhạt
  "#FF33C9", // Hồng nhạt
];

export default function Main() {
  const [user, setUser] = useState<UserType>({
    name: "No Name",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
  });

  const [lastTimeUpdate, setLastTimeUpdate] = useState(
    "Bạn chưa cập nhật thông tin"
  );
  const [footerColor, setFooterColor] = useState(colors[0]);

  // Function Random
  const handleRandomColor = useCallback(() => {
    const numberRandom = Math.floor(Math.random() * colors.length);
    setFooterColor(colors[numberRandom]);
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const dateTime =
      currentDate.getDate() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getFullYear() +
      " " +
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();
    setLastTimeUpdate(dateTime);
  }, [user]);

  // Function cập nhật thông tin người dùng
  const handleUpdateInformation = useCallback((_user: UserType) => {
    setUser(_user);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Lab 2 Tổng Hợp</Text>
        <Text style={styles.subtitle}>
          Sử dụng hooks, useEffect, useCallback, memo, ...
        </Text>

        <Header user={user} />
        <Body
          onUpdateInformation={handleUpdateInformation}
          onClickChangeBackgroundColorFooter={handleRandomColor}
        />
      </View>
      <View style={styles.footer}>
        <Footer timerUpdate={lastTimeUpdate} backgroundColor={footerColor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 20,
    height: 810,
  },
  content: {
    justifyContent: "center",
    paddingBottom: 100, // Chiều cao của footer
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "blue",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    // top: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
