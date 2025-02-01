import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import postData from "@/data/post.json";
import { width } from "@/utils/screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { themes } from "@/themes";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Comment from "@/components/Comment";

const PostScreen = () => {
  const { id } = useLocalSearchParams<{ id: any }>();
  const [post, setPost] = useState(postData[id | 0]);
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Top bar */}
        <View style={styles.topbar}>
          {/* back button */}
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <Ionicons name="arrow-back" size={27} color={"black"} />
          </TouchableOpacity>
          <View style={styles.smallBox}>
            {/* like button */}
            <TouchableOpacity>
              <AntDesign name="hearto" size={27} color={"black"} />
            </TouchableOpacity>
            {/* Create  */}
            <TouchableOpacity>
              <AntDesign name="pluscircle" size={27} color={"black"} />
            </TouchableOpacity>
            {/* Share */}
            <TouchableOpacity>
              <Feather name="share" size={27} color={"black"} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Post */}
        {/* Post details */}
        <View style={styles.container}>
          {/* post Top */}
          <View style={styles.postTopBar}>
            <View style={styles.smallBox}>
              <Image
                source={{
                  uri: post.avatarUrl,
                }}
                style={styles.avatarImage}
                resizeMode="cover"
              />
              <Text style={styles.text}>{post.userName}</Text>
            </View>
            <Text style={styles.text}>{post.timeOfPost}</Text>
          </View>
          {/* Post Image */}
          <Image
            source={{
              uri: post.postUrl,
            }}
            style={styles.postImage}
            resizeMode="cover"
          />
          {/* bottom part of post */}
          <View style={styles.postBottomBar}>
            {/* views */}
            <View style={styles.smallBox}>
              <Text>{post.views}</Text>
              <TouchableOpacity>
                <AntDesign name="eyeo" size={24} color={themes.primary} />
              </TouchableOpacity>
            </View>

            {/* comment button */}
            <View style={styles.smallBox}>
              <Text>{post.comment.length}</Text>
              <TouchableOpacity>
                <FontAwesome6
                  name="comment-dots"
                  size={24}
                  color={themes.primary}
                />
              </TouchableOpacity>
            </View>
            {/* like button */}
            <View style={styles.smallBox}>
              <Text>{post.likes}</Text>
              <TouchableOpacity>
                <AntDesign name="hearto" size={24} color={themes.primary} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Post title & description */}
        <View style={styles.postContentContainer}>
          <Text style={[styles.text, { color: "black", fontSize: 30 }]}>
            {post.title}
          </Text>
          <Text style={[styles.text, { color: themes.icons, fontSize: 20 }]}>
            {post.description}
          </Text>
        </View>
        {/* comments */}
        <View style={styles.commentBox}>
          {post.comment.map((item, index) => {
            return (
              <Comment
                key={index}
                avatarUrl={item.avatarUrl}
                content={item.comment}
                timeOfComment={item.time}
                userName={item.userName}
              />
            );
          })}
          {/* Add comment */}
          <View style={styles.inputBox}>
            <TextInput style={styles.input} placeholder="Type Something" />
            <TouchableOpacity style={styles.addPostBtn}>
              <Text style={styles.postText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    paddingTop: 20,
  },
  topbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  smallBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  postTopBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
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
  postBottomBar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 7,
  },
  postContentContainer: {
    padding: 10,
    textAlign: "left",
    width: width,
  },
  commentBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  inputBox: {
    width: width,
    flex: 2,
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    paddingHorizontal: 20,
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    width: "80%",
    height: 60,
    color: "black",
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 17,
    fontWeight: "bold",
    paddingRight: 10,
    backgroundColor: themes.btnBg,
  },
  addPostBtn: {
    backgroundColor: themes.secondary,
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderRadius: 10,
  },
  postText: {
    fontSize: 15,
    fontWeight: "bold",
    color: themes.text,
  },
});

export default PostScreen;
