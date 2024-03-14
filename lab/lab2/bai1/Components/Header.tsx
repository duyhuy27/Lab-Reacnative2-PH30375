import React, { FC, memo } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

type HeaderType = {
  user: { name: string; image: string };
};

const Header: FC<HeaderType> = memo((props) => {
  console.log("====================================");
  console.log("re-render ");
  console.log("====================================");

  const { user } = props;

  return (
    <View style={styles.containerStyle}>
      <Image
        style={styles.avatar}
        resizeMode="cover" // Sử dụng cover thay vì center để ảnh cover toàn bộ kích thước của avatar
        source={{
          uri: user.image,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Xin chào ngày mới</Text>
        <Text style={styles.textName}>{user.name}</Text>
      </View>
    </View>
  );
});

export { Header };

const styles = StyleSheet.create({
  containerStyle: {
    height: 100,
    backgroundColor: "#FFF",
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd", // Thêm viền dưới cho header
  },
  avatar: {
    height: 80, // Tăng kích thước avatar
    width: 80, // Tăng kích thước avatar
    borderRadius: 40,
  },
  textContainer: {
    marginLeft: 20, // Tăng khoảng cách giữa avatar và văn bản
  },
  greetingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333", // Thay đổi màu văn bản sang màu đen
  },
  textName: {
    fontSize: 18,
    color: "#007bff", // Thay đổi màu văn bản tên người dùng
  },
});
