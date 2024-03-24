// SongDetailScreen.js

import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import * as Notifications from "expo-notifications";

const SongDetailScreen = ({ route }) => {
  const { song } = route.params;
  const [sound, setSound] = useState(null);

  // useEffect(() => {
  //   if (Platform.OS === "android") {
  //     setupAndroidNotifications();
  //   }
  // }, []);

  // const setupAndroidNotifications = async () => {
  //   Notifications.setNotificationHandler({
  //     handleNotification: async () => ({
  //       shouldShowAlert: true,
  //       shouldPlaySound: true,
  //       shouldSetBadge: false,
  //     }),
  //   });

  //   const { status } = await Notifications.getPermissionsAsync();
  //   if (status === "granted") {
  //     Notifications.setNotificationChannelAsync("music-control", {
  //       name: "Music Control",
  //       sound: true,
  //     });
  //   }
  // };

  // const sendNotification = async (songTitle) => {
  //   await Notifications.scheduleNotificationAsync({
  //     content: {
  //       title: "Now Playing",
  //       body: `Playing ${songTitle}`,
  //     },
  //     trigger: null,
  //     channelId: "music-control",
  //   });
  // };

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(song.url);
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();

    // sendNotification(song.title);
  }

  async function stopSound() {
    if (sound) {
      console.log("Stop Sound");
      await sound.stopAsync();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{song.title}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Play Sound" onPress={playSound} />
        <Button title="Stop Sound" onPress={stopSound} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
});

export default SongDetailScreen;
