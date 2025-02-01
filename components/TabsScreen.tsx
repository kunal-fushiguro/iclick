import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { height, width } from "@/utils/screen";
import { themes } from "@/themes";
import PostCard from "./PostCard";
import postdata from "@/data/post.json";

const TabsScreen = () => {
  // tabs
  const tabs = ["Popular", "Trending", "Following"];
  const [isFocused, setisFocused] = useState(tabs[0]);

  return (
    <View style={styles.container}>
      {/* Top Tabs Bar */}
      <View style={styles.tabsContainer}>
        {/* Tab */}
        {tabs.map((text, key) => {
          return (
            <TouchableOpacity
              key={key}
              style={[
                styles.tab,
                isFocused === text ? { backgroundColor: themes.btnBg } : {},
              ]}
              onPress={() => {
                setisFocused(tabs[key]);
              }}
            >
              <Text
                style={[
                  styles.text,
                  {
                    color: isFocused === text ? themes.secondary : themes.icons,
                  },
                ]}
              >
                {text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* Post */}
      <FlatList
        data={postdata}
        renderItem={({ index, item }) => (
          <PostCard
            key={index}
            id={item.id}
            avatarUrl={item.avatarUrl}
            comments={item.comment.length}
            likes={item.likes}
            postUrl={item.postUrl}
            time={item.timeOfPost}
            userName={item.userName}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    width: width,
    height: height,
    paddingHorizontal: 10,
    paddingBottom: 80,
  },
  tabsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default TabsScreen;
