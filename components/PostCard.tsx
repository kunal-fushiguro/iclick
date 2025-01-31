import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { width } from "@/utils/screen";
import { themes } from "@/themes";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import { PostCardsProps } from "@/types";
import { router } from "expo-router";

const PostCard = ({
  likes,
  avatarUrl,
  comments,
  postUrl,
  time,
  userName,
  id,
}: PostCardsProps) => {
  // onClick On likes
  const addLikes = () => {};
  // onClick On Comment
  const addComment = () => {
    router.push({ pathname: "/PostScreen", params: { id: id } });
  };
  // show full post
  const showFull = () => {
    router.push({ pathname: "/PostScreen", params: { id: id } });
  };

  return (
    <View style={styles.container}>
      {/* avatar, name and postTime */}
      <View style={styles.topBar}>
        <View style={styles.smallBox}>
          <Image
            source={{
              uri: avatarUrl,
            }}
            style={styles.avatarImage}
            resizeMode="cover"
          />
          <Text style={styles.text}>{userName}</Text>
        </View>
        <Text style={styles.text}>{time}</Text>
      </View>
      {/* Post Image */}
      <Image
        source={{
          uri: postUrl,
        }}
        style={styles.postImage}
        resizeMode="cover"
      />
      {/* like comment and view button */}
      <View style={styles.bottomBar}>
        {/* Show full */}
        <TouchableOpacity onPress={showFull}>
          <Feather name="plus-circle" size={24} color={themes.primary} />
        </TouchableOpacity>
        <View style={[styles.smallBox, { gap: 40 }]}>
          {/* comment button */}
          <View style={styles.smallBox}>
            <Text>{comments}</Text>
            <TouchableOpacity onPress={addComment}>
              <FontAwesome6
                name="comment-dots"
                size={24}
                color={themes.primary}
              />
            </TouchableOpacity>
          </View>
          {/* like button */}
          <View style={styles.smallBox}>
            <Text>{likes}</Text>
            <TouchableOpacity onPress={addLikes}>
              <AntDesign name="hearto" size={24} color={themes.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 50,
    marginHorizontal: "auto",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 7,
  },
  avatarImage: {
    width: 50,
    height: 50,
    overflow: "hidden",
    borderRadius: 100,
  },
  text: {
    color: themes.textSecondary,
    fontSize: 15,
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 300,
  },
  bottomBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 7,
  },
  smallBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

export default PostCard;
