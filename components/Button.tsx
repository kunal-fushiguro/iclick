import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { themes } from "@/themes";
import { router } from "expo-router";
import { RoutesPath } from "@/types";

const Button = ({
  text,
  navigationPath,
}: {
  text: string;
  navigationPath: RoutesPath;
}) => {
  // navigation function
  const navigation = () => {
    router.replace(navigationPath);
  };

  return (
    <TouchableOpacity onPress={navigation}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "auto",
    backgroundColor: themes.btnBg,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 30,
  },
  text: {
    fontSize: 17,
    fontWeight: "700",
    color: themes.text,
  },
});

export default Button;
