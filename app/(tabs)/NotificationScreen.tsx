import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { width } from "@/utils/screen";
import Ionicons from "@expo/vector-icons/Ionicons";

const NotficationScreen = () => {
  return (
    <View style={style.container}>
      {/* top bar */}
      <View style={style.topBar}>
        <Text style={style.text}>Notification</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-off" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* nofications */}
      <View style={{ margin: "auto" }}>
        <Text style={style.text}>0 Notifications</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    width: width,
    height: 80,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    flexDirection: "row",
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
  },
});

export default NotficationScreen;
