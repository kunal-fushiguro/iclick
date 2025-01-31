import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { CommentProps } from "@/types";
import { themes } from "@/themes";

const Comment = ({
  avatarUrl,
  content,
  timeOfComment,
  userName,
}: CommentProps) => {
  return (
    <View style={styles.conatiner}>
      {/* avatar  */}
      <Image source={{ uri: avatarUrl }} style={styles.avatarImage} />
      {/* name time & comment */}
      <View style={styles.textContainer}>
        <Text style={[styles.text, { fontSize: 15 }]}>{userName}</Text>
        <Text style={[styles.text, { fontWeight: "500" }]}>{content}</Text>
        <Text style={[styles.text, { fontWeight: "400", color: "#828282" }]}>
          {timeOfComment}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "95%",
    backgroundColor: themes.btnBg,
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    gap: 20,
  },
  avatarImage: {
    width: 40,
    height: 40,
    overflow: "hidden",
    borderRadius: 100,
  },
  text: {
    fontWeight: "bold",
    fontSize: 17,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 7,
  },
});

export default Comment;
