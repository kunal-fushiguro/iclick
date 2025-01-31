import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { loginImagesPath } from "@/data/images";
import { themes } from "@/themes";

const image = require("@/assets/iclick/image.png");

interface Props {
  title: string;
}

const LoginTop = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      {/* Background Images */}
      {loginImagesPath.slice(0, 4).map((item, index) => (
        <ImageBackground key={index} url={item} index={index} />
      ))}

      {/* transparent image */}
      <Image source={image} style={styles.img} />

      {/* title */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.title, { fontSize: 40 }]}>WELCOME</Text>
      </View>
    </View>
  );
};

// Background Images Component
const ImageBackground = ({ url, index }: { url: string; index: number }) => {
  // position
  const positions = [
    { top: 0, left: 0 },
    { top: 0, right: 0 },
    { bottom: 0, left: 0 },
    { bottom: 0, right: 0 },
  ];

  return (
    <Image
      source={{ uri: url }}
      style={[styles.backgroundImage, positions[index]]}
      resizeMode="cover"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "50%",
    zIndex: -10,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    position: "absolute",
    top: 0,
    overflow: "hidden",
  },
  backgroundImage: {
    position: "absolute",
    width: "50%",
    height: "50%",
    opacity: 0.6,
    zIndex: 2,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: themes.text,
  },
  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.5,
    zIndex: 3,
  },
  content: {
    zIndex: 10,
    flex: 1,
    width: "100%",
    height: "30%",
    paddingTop: 80,
    alignItems: "center",
    gap: 30,
  },
});

export default LoginTop;
