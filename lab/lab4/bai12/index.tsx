import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";

const Bai12Lab4 = () => {
  const imgDirExist = FileSystem.documentDirectory + "images/";
  const defaultAvatar = require("../../../assets/logo.png");
  const [avatar, setAvatar] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    await ensureDirExists();
    const files = await FileSystem.readDirectoryAsync(imgDirExist);
    if (files.length > 0) {
      setAvatar(imgDirExist + files[0]); // Set avatar to the first image if available
    } else {
      setAvatar(null); // No images available, set avatar to null
    }
    setLoading(false);
  };

  const ensureDirExists = async () => {
    const dirInfo = await FileSystem.getInfoAsync(imgDirExist);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(imgDirExist, { intermediates: true });
    }
  };

  const selectImage = async (useLibrary: boolean) => {
    let result;

    const options: ImagePicker.ImagePickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };

    if (useLibrary) {
      result = await ImagePicker.launchImageLibraryAsync(options);
    } else {
      await ImagePicker.requestCameraPermissionsAsync();
      result = await ImagePicker.launchCameraAsync(options);
    }

    if (!result.cancelled) {
      saveImage(result.assets[0].uri);
    }
  };

  const saveImage = async (uri: string) => {
    await ensureDirExists();
    const filename = new Date().getTime() + ".jpg";
    const dest = imgDirExist + filename;
    await FileSystem.copyAsync({ from: uri, to: dest });
    setAvatar(dest); // Set the new avatar
  };

  const deleteAvatar = () => {
    setAvatar(null); // Remove avatar
  };

  const renderAvatar = () => {
    if (avatar) {
      return (
        <TouchableOpacity onPress={deleteAvatar}>
          <Image source={{ uri: avatar }} style={styles.avatarImage} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => selectImage(true)}>
          <Image source={defaultAvatar} style={styles.avatarImage} />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Avatar</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => selectImage(true)}
        >
          <Text style={styles.buttonText}>Select Image</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => selectImage(false)}
        >
          <Text style={styles.buttonText}>Capture Image</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.avatarContainer}>{renderAvatar()}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  avatarContainer: {
    alignItems: "center",
  },
  avatarImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default Bai12Lab4;
