import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { width } from "@/utils/screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { themes } from "@/themes";

const Searchbar = () => {
  // inputState
  const [input, setInput] = useState("");

  // Send function
  const onPress = () => {};

  return (
    <View style={styles.container}>
      {/* InputBox */}
      <Ionicons
        name="search"
        size={30}
        color={themes.secondary}
        style={styles.searchIcon}
      />
      <TextInput
        value={input}
        onChangeText={(text) => setInput(text)}
        style={styles.inputBox}
        placeholder="Search"
      />
      {/* send */}
      <TouchableOpacity style={styles.sendIcon} onPress={onPress}>
        <Feather name="send" size={27} color={themes.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    position: "relative",
    marginTop: 20,
  },
  inputBox: {
    width: "80%",
    height: 50,
    color: "black",
    borderRadius: 40,
    paddingLeft: 50,
    fontSize: 17,
    fontWeight: "bold",
    paddingRight: 10,
    backgroundColor: themes.btnBg,
  },
  searchIcon: {
    position: "absolute",
    left: 25,
  },
  sendIcon: {
    marginRight: 2,
    backgroundColor: themes.btnBg,
    padding: 10,
    borderRadius: 1000,
  },
});

export default Searchbar;
