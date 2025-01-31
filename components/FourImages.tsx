import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { height, width } from "@/utils/screen";
import { imagesPaths } from "@/data/images";

const FourImages = () => {
  return (
    <View style={styles.container}>
      {/* first image */}
      <Image
        style={[
          styles.imageContainer,
          { top: 40, left: (width - 50) / 2 - 60 },
        ]}
        source={{ uri: imagesPaths[0] }}
        resizeMode="cover"
      />
      {/* two image */}
      <Image
        style={[
          styles.imageContainer,
          { top: (height - 400) / 2 - 60, left: 0 },
        ]}
        source={{ uri: imagesPaths[1] }}
        resizeMode="cover"
      />
      {/* three image */}
      <Image
        style={[
          styles.imageContainer,
          { top: (height - 400) / 2 - 60, right: 0 },
        ]}
        source={{ uri: imagesPaths[3] }}
        resizeMode="cover"
      />
      {/* fouth image */}
      <Image
        style={[
          styles.imageContainer,
          { bottom: 40, left: (width - 50) / 2 - 60 },
        ]}
        source={{ uri: imagesPaths[2] }}
        resizeMode="cover"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width - 50,
    height: height - 400,
    position: "relative",
  },
  imageContainer: {
    width: 120,
    height: 120,
    transform: [{ rotate: "45deg" }],
    borderRadius: 10,
    overflow: "hidden",
    position: "absolute",
  },
});

export default FourImages;
