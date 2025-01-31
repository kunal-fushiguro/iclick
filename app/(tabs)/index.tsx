import { View, Text } from "react-native";
import React from "react";
import Searchbar from "@/components/Searchbar";

const HomeScreen = () => {
  return (
    <View>
      {/* top search bar */}
      <Searchbar />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
