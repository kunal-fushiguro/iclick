import { View, Text, StyleSheet } from "react-native";

const NotFoundScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Not Found </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
  },
});

export default NotFoundScreen;
