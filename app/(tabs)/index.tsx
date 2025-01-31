import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Searchbar from "@/components/Searchbar";

const HomeScreen = () => {
  return (
    <View>
      {/* top search bar */}
      <Searchbar />
      {/* Tabs */}
      <View style={styles.tabsContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {},
});

export default HomeScreen;
