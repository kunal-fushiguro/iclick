import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import postdata from "@/data/post.json";
import { router, useLocalSearchParams } from "expo-router";
import { themes } from "@/themes";
import { useState } from "react";
import Comment from "@/components/Comment";
import { height, width } from "@/utils/screen";

const CommentScreen = () => {
  const { id } = useLocalSearchParams<{ id: any }>();
  const [comments, setComments] = useState(postdata[id].comment);
  return (
    <ScrollView>
      <View style={styles.conatiner}>
        {/* top bar */}
        <View style={styles.topbar}>
          {/* back button */}
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <Ionicons name="arrow-back" size={27} color={"black"} />
          </TouchableOpacity>
          <Text style={styles.text}>Comments</Text>
          {/* edit button */}
          <TouchableOpacity>
            <FontAwesome5 name="edit" size={27} color="black" />
          </TouchableOpacity>
        </View>
        {/* comments */}
        <View style={styles.commentBox}>
          {comments.map((item, index) => {
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
        </View>
        {/* Add comment */}
        <View style={styles.inputBox}>
          <TextInput style={styles.input} placeholder="Type Something" />
          <TouchableOpacity style={styles.addPostBtn}>
            <Text style={styles.postText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    position: "relative",
    minHeight: height - 70,
  },
  topbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  text: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
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
    position: "absolute",
    bottom: 0,
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

export default CommentScreen;
