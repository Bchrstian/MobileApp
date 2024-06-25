import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MyTabs from "./MyTabs";
import SettingsScreen from "./SettingsScreen";
import PrivacyScreen from "./PrivacyScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={MyTabs}
          options={{ title: "Home" }} // Set the title for the drawer item
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: "Settings" }} // Set the title for the drawer item
        />
        <Drawer.Screen
          name="Privacy"
          component={PrivacyScreen}
          options={{ title: "Privacy" }} // Set the title for the drawer item
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
