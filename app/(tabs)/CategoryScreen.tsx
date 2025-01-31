import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import categoryData from "@/data/category.json";
import { themes } from "@/themes";
import Searchbar from "@/components/Searchbar";

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <Searchbar />
      <ScrollView>
        {categoryData.map((item, index) => {
          return (
            <View key={index} style={styles.categoryBoxs}>
              <Text style={styles.text}>{item}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingBottom: 60,
  },
  categoryBoxs: {
    width: "90%",
    marginHorizontal: "auto",
    height: 200,
    borderRadius: 30,
    backgroundColor: themes.secondary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});

export default CategoryScreen;
