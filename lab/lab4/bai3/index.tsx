// Bai3Lab4.js

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Audio } from "expo-av";

const Bai3Lab4 = ({ navigation }) => {
  const songs = [
    {
      id: 1,
      title: "Tội cho em",
      url: require("../../../assets/sound/sound1.mp3"),
    },
    {
      id: 2,
      title: "Rồi Em Sẽ Gặp Một Chàng Trai Khác",
      url: require("../../../assets/sound/sound2.mp3"),
    },
    {
      id: 3,
      title: "Sông Tình Yêu",
      url: require("../../../assets/sound/sound3.mp3"),
    },
    // Thêm các bài hát khác nếu cần
  ];

  const renderSongItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigation.navigate("SongDetail", { song: item })}
      >
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={songs}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default Bai3Lab4;
