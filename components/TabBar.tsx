import { View, Text } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const TabBar = ({ state }: BottomTabBarProps) => {
  return (
    <View>
      <Text>TabBar</Text>
    </View>
  );
};

export default TabBar;
