import Button from "@/components/Button";
import FourImages from "@/components/FourImages";
import { themes } from "@/themes";
import { useAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { useEffect } from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

// splash Screen Component
const image = require("@/assets/iclick/image.png");

const index = () => {
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/(tabs)");
    }
  }, [isSignedIn]);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          {/* title text */}
          <Text style={styles.textTitle}>i.click</Text>
          {/* images components */}
          <FourImages />
          {/* middle text */}
          <Text style={styles.text}>SHARE - INSPIRE - CONNECT</Text>
          {/* button */}
          <Button text="GET STARTED" navigationPath="/LoginScreen" />
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  textTitle: {
    fontSize: 40,
    fontWeight: "900",
    color: themes.text,
  },
  text: {
    fontSize: 17,
    fontWeight: "900",
    color: themes.text,
  },
});

export default index;
