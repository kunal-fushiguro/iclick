import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { themes } from "@/themes";
import FourImages from "./FourImages";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

const LoginBottom = () => {
  // google auth
  const googleAuth = () => {
    router.replace("/(tabs)");
  };
  // facebook auth
  const faceBookAuth = () => {
    router.replace("/(tabs)");
  };
  return (
    <View style={styles.container}>
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.text}>SHARE - INSPIRE - CONNECT</Text>
        <View style={styles.box}>
          <Text style={[styles.text, { color: themes.textSecondary }]}>
            LOG IN by
          </Text>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={googleAuth} style={styles.icons}>
              <AntDesign name="google" size={24} color={themes.secondary} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={googleAuth}
              style={[styles.icons, { paddingHorizontal: 25 }]}
            >
              <FontAwesome
                name="facebook-f"
                size={24}
                color={themes.secondary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* four images */}
      <View style={styles.fourImagesContainer}>
        <FourImages />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "65%",
    paddingHorizontal: 20,
    zIndex: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    backgroundColor: themes.text,
    overflow: "visible",
  },
  fourImagesContainer: {
    position: "absolute",
    bottom: -120,
    width: "100%",
    alignItems: "center",
    overflow: "visible",
  },
  content: {
    width: "90%",
    height: 200,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    marginTop: 30,
    position: "absolute",
    top: 0,
    gap: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    height: 100,
  },
  iconsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 40,
  },
  icons: {
    padding: 20,
    borderRadius: 1000,
    borderColor: themes.secondary,
    borderWidth: 1,
  },
});

export default LoginBottom;
