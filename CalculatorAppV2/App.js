import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

import MyTabs from "./MyTabs";
import SettingsScreen from "./SettingsScreen";
import PrivacyScreen from "./PrivacyScreen";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <Image
          source={require("./assets/profile.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>BYIRINGIRO Christian</Text>
        <Text style={styles.profileUsername}>@b_christian</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function PlaceholderScreen({ title }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>{title}</Text>
    </View>
  );
}

const ShareAppScreen = () => <PlaceholderScreen title="Share App" />;
const AccountManagementScreen = () => (
  <PlaceholderScreen title="Account Management" />
);
const DeleteAccountScreen = () => <PlaceholderScreen title="Delete Account" />;
const LogOutScreen = () => <PlaceholderScreen title="Log Out" />;

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: { backgroundColor: "#222" },
          headerStyle: { backgroundColor: "#222" },
          headerTintColor: "#fff",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#888",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={MyTabs}
          options={{
            title: "Home",
            drawerIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: "Settings",
            drawerIcon: ({ color, size }) => (
              <Icon name="settings" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Privacy"
          component={PrivacyScreen}
          options={{
            title: "Privacy",
            drawerIcon: ({ color, size }) => (
              <Icon name="lock-closed" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="ShareApp"
          component={ShareAppScreen}
          options={{
            title: "Share App",
            drawerIcon: ({ color, size }) => (
              <Icon name="share-social" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="AccountManagement"
          component={AccountManagementScreen}
          options={{
            title: "Account Management",
            drawerIcon: ({ color, size }) => (
              <Icon name="person" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="DeleteAccount"
          component={DeleteAccountScreen}
          options={{
            title: "Delete Account",
            drawerIcon: ({ color, size }) => (
              <Icon name="trash" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="LogOut"
          component={LogOutScreen}
          options={{
            title: "Log Out",
            drawerIcon: ({ color, size }) => (
              <Icon name="log-out" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#555",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#fff",
  },
  profileUsername: {
    fontSize: 14,
    color: "#888",
  },
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222",
  },
  screenText: {
    color: "#fff",
    fontSize: 20,
  },
});
