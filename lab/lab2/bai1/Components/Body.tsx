import React, { FC, memo, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { UserType } from "./Main";

type BodyType = {
  onUpdateInformation: (user: UserType) => void;
  onClickChangeBackgroundColorFooter: () => void;
};

const Body: FC<BodyType> = memo((props) => {
  console.log("re-render body");
  const { onUpdateInformation, onClickChangeBackgroundColorFooter } = props;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleChange = () => {
    if (name.length > 0 && image.length > 0) {
      onUpdateInformation({ name, image: image });
    } else {
      ToastAndroid.show(
        "Hãy điền đầy đủ thông tin để update thông tin",
        ToastAndroid.SHORT
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setName}
          value={name}
          placeholder="Name"
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setImage}
          value={image}
          placeholder="Image Url"
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleChange}
          title="Update Information"
          color="#007bff"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={onClickChangeBackgroundColorFooter}
          title="Change Color Footer"
          color="#007bff"
        />
      </View>
    </View>
  );
});

export { Body };
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  inputStyle: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 5,
    paddingLeft: 10,
  },
  buttonContainer: {
    width: "100%",
    marginVertical: 10,
  },
});

export default Body;
