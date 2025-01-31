import { StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { height, width } from "@/utils/screen";
import LoginTop from "@/components/LoginTop";
import LoginBottom from "@/components/LoginBottom";

const LoginScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        {/* loginTop */}
        <LoginTop title="i.click" />
        {/* loginBottom */}
        <LoginBottom />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});

export default LoginScreen;
