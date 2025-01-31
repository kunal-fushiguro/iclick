import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Searchbar from "@/components/Searchbar";
import TabsScreen from "@/components/TabsScreen";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* top search bar */}
      <Searchbar />
      {/* Tabs */}
      <TabsScreen />
    </View>
  );
};

export default HomeScreen;
