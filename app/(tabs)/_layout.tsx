import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";

const TabsRootLayout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="CategoryScreen"
        options={{ title: "Category", headerShown: false }}
      />
      <Tabs.Screen
        name="CreatePostScreen"
        options={{ title: "Create", headerShown: false }}
      />
      <Tabs.Screen
        name="NotificationScreen"
        options={{
          title: "Notification",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        options={{ title: "Profile", headerShown: false }}
      />
    </Tabs>
  );
};

export default TabsRootLayout;
