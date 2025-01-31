import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { width } from "@/utils/screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

const Searchbar = () => {
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      {/* InputBox */}
      <Ionicons
        name="search"
        size={30}
        color={"black"}
        style={styles.searchIcon}
      />
      <TextInput
        value={input}
        onChangeText={(text) => setInput(text)}
        style={styles.inputBox}
        placeholder="Search"
      />
      <TouchableOpacity style={styles.sendIcon}>
        <Feather name="send" size={30} color={"black"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 70,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    position: "relative",
  },
  inputBox: {
    width: "87%",
    height: 50,
    color: "black",
    borderRadius: 40,
    paddingLeft: 50,
    fontSize: 17,
    fontWeight: "bold",
    paddingRight: 10,
    borderColor: "black",
    borderWidth: 3,
  },
  searchIcon: {
    position: "absolute",
    left: 25,
  },
  sendIcon: {
    marginRight: 2,
  },
});

export default Searchbar;
