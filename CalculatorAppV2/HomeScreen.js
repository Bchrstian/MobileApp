import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Home Screen</Text>
    <Button onPress={() => navigation.openDrawer()} title="Open Drawer" />
  </View>
);

export default HomeScreen;
