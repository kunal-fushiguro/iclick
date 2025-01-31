import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { width } from "@/utils/screen";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { themes } from "@/themes";

// tab bar compoent

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  // icons
  const icons: Record<string, (isFocused: boolean) => JSX.Element> = {
    index: (isFocused: boolean) => {
      return (
        <Foundation
          name="home"
          size={37}
          color={isFocused ? themes.primary : themes.icons}
        />
      );
    },
    CategoryScreen: (isFocused: boolean) => {
      return (
        <MaterialIcons
          name="category"
          size={37}
          color={isFocused ? themes.primary : themes.icons}
        />
      );
    },
    CreatePostScreen: (isFocused: boolean) => {
      return (
        <AntDesign
          name="pluscircle"
          size={37}
          color={isFocused ? themes.primary : themes.icons}
        />
      );
    },
    NotificationScreen: (isFocused: boolean) => (
      <Ionicons
        name="notifications"
        size={37}
        color={isFocused ? themes.primary : themes.icons}
      />
    ),
    ProfileScreen: (isFocused: boolean) => (
      <FontAwesome5
        name="user-alt"
        size={37}
        color={isFocused ? themes.primary : themes.icons}
      />
    ),
  };

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        if (["_sitemap", "+not-found", "PostScreen"].includes(route.name))
          return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        // tab-bar
        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabbarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {/* tabr icons */}
            {icons[route.name](isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    height: 70,
    width: width,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  tabbarItem: {
    width: 50,
    alignItems: "center",
  },
});

export default TabBar;
