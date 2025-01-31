import { Tabs } from "expo-router";

const TabsRootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="PostScreen"
        options={{ title: "Post", headerShown: false }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        options={{ title: "Profile", headerShown: false }}
      />
    </Tabs>
  );
};

export default TabsRootLayout;
