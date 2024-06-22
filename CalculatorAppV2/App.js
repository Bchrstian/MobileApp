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
        <Drawer.Screen name="Home" component={MyTabs} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Privacy" component={PrivacyScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
