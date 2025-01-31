import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { width } from "@/utils/screen";
import userdata from "@/data/user.json";
import { themes } from "@/themes";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
const image = require("@/assets/iclick/image.png");

const ProfileScreen = () => {
  // tabs
  const tabs = [
    `${userdata.posts.length} Shots`,
    `${userdata.collection.length} Collections`,
  ];
  const [isFocused, setisFocused] = useState(tabs[0]);
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* profile banner */}
        <Image source={image} style={styles.banner} />
        {/* top Bar */}
        <View style={styles.topbar}>
          <View style={{ position: "absolute", top: 40 }}>
            <Text style={styles.text}>{userdata.uniname}</Text>
          </View>
          <Image
            source={{ uri: userdata.avatarUrl }}
            resizeMode="cover"
            style={styles.avatarImg}
          />
          <TouchableOpacity
            style={{ position: "absolute", top: 25, right: 30 }}
            onPress={() => {}}
          >
            <AntDesign name="setting" size={30} color="white" />
          </TouchableOpacity>
        </View>

        {/* user details */}
        <View style={styles.userDetails}>
          {/* name */}
          <View style={styles.smallbox}>
            <Text style={[styles.text, { color: "black", fontSize: 25 }]}>
              {userdata.full_name}
            </Text>
          </View>
          {/* bio */}
          <View style={[styles.smallbox, { paddingHorizontal: 25 }]}>
            <Text style={[styles.text, { color: themes.icons, fontSize: 15 }]}>
              {userdata.bio}
            </Text>
          </View>
          {/* following & followers */}
          <View style={styles.followingContainer}>
            <View style={styles.followingChildContainer}>
              <Text style={[styles.text, { color: "black", fontSize: 15 }]}>
                {userdata.followers} Followers
              </Text>
            </View>
            <View style={styles.followingChildContainer}>
              <Text style={[styles.text, { color: "black", fontSize: 15 }]}>
                {userdata.following} Following
              </Text>
            </View>
          </View>
          {/* social links */}
          <View
            style={[
              styles.followingContainer,
              { width: width - 100, marginHorizontal: "auto" },
            ]}
          >
            {/* instgram */}
            <TouchableOpacity
              onPress={() => {
                console.log(userdata.links.instagram);
              }}
            >
              <Entypo name="instagram" size={24} color="black" />
            </TouchableOpacity>
            {/* website */}
            <TouchableOpacity
              onPress={() => {
                console.log(userdata.links.website);
              }}
            >
              <Fontisto name="world-o" size={24} color="black" />
            </TouchableOpacity>
            {/* facebook */}
            <TouchableOpacity
              onPress={() => {
                console.log(userdata.links.facebook);
              }}
            >
              <Feather name="facebook" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {/* tabs */}
          <View style={styles.tabsContainer}>
            {/* Tab */}
            {tabs.map((text, key) => {
              return (
                <TouchableOpacity
                  key={key}
                  style={[
                    styles.tab,
                    isFocused == text ? { backgroundColor: themes.btnBg } : {},
                  ]}
                  onPress={() => {
                    setisFocused(tabs[key]);
                  }}
                >
                  <Text
                    style={[
                      styles.text,
                      {
                        color:
                          isFocused == text ? themes.secondary : themes.icons,
                      },
                    ]}
                  >
                    {text}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* posts */}
          {isFocused == tabs[0] &&
            userdata.posts.map((item, index) => {
              return (
                <View style={styles.postsContainer} key={index}>
                  <Image
                    source={{ uri: item }}
                    resizeMode="cover"
                    style={{ height: 300 }}
                  />
                </View>
              );
            })}
          {/* collections */}
          {isFocused == tabs[1] &&
            userdata.collection.map((item, index) => {
              return (
                <View style={styles.collectionBox} key={index}>
                  <Text style={[styles.text, { fontSize: 30 }]}>{item}</Text>
                </View>
              );
            })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    paddingBottom: 90,
  },
  banner: {
    width: width,
    height: width + 200,
    position: "absolute",
    top: -400,
    zIndex: 0,
    borderRadius: 110,
    left: width / 2 - width / 2,
  },
  topbar: {
    width: width,
    height: 200,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: themes.text,
  },
  avatarImg: {
    height: 120,
    width: 120,
    padding: 10,
    borderRadius: 10000,
    backgroundColor: "white",
    zIndex: 10,
    position: "absolute",
    bottom: -5,
  },
  userDetails: {
    flex: 1,
    width: width,
    marginTop: 10,
    gap: 10,
  },
  smallbox: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  followingContainer: {
    width: width,
    paddingHorizontal: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  followingChildContainer: {
    padding: 10,
    alignContent: "center",
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
  collectionBox: {
    marginTop: 10,
    width: width - 50,
    marginHorizontal: "auto",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themes.secondary,
    borderRadius: 20,
  },
  postsContainer: {
    marginTop: 10,
    width: width - 50,
    marginHorizontal: "auto",
  },
});

export default ProfileScreen;
