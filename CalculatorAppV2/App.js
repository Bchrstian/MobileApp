import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import Toast from "react-native-toast-message";

import MyTabs from "./MyTabs";
import SettingsScreen from "./SettingsScreen";
import PrivacyScreen from "./PrivacyScreen";
import NetworkStatus from "./NetworkStatus";
import BatteryStatus from "./BatteryStatus";
import { ThemeContext, ThemeProvider } from "./ThemeContext"; // Importing the ThemeContext and ThemeProvider

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <DrawerContentScrollView
      {...props}
      style={theme === "dark" ? styles.darkDrawer : styles.lightDrawer}
    >
      <View
        style={[
          styles.profileContainer,
          theme === "dark" && styles.darkProfileContainer,
        ]}
      >
        <Image
          source={require("./assets/profile.jpg")}
          style={styles.profileImage}
        />
        <Text
          style={[
            styles.profileName,
            theme === "dark" && styles.darkProfileName,
          ]}
        >
          BYIRINGIRO Christian
        </Text>
        <Text
          style={[
            styles.profileUsername,
            theme === "dark" && styles.darkProfileUsername,
          ]}
        >
          @b_christian
        </Text>
      </View>
      <DrawerItemList {...props} />
      <Button
        title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
        onPress={toggleTheme}
      />
    </DrawerContentScrollView>
  );
}

function PlaceholderScreen({ title }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.screenContainer,
        theme === "dark" && styles.darkScreenContainer,
      ]}
    >
      <Text
        style={[styles.screenText, theme === "dark" && styles.darkScreenText]}
      >
        {title}
      </Text>
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
    <ThemeProvider>
      <NavigationContainer>
        <NetworkStatus />
        <BatteryStatus />
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerStyle: { backgroundColor: "transparent" }, // Drawer style is handled dynamically in CustomDrawerContent
            headerStyle: { backgroundColor: "transparent" }, // Header style is handled dynamically in screenOptions
            headerTintColor: "#000", // Default header tint color
            drawerActiveTintColor: "#000", // Default drawer active tint color
            drawerInactiveTintColor: "#888", // Default drawer inactive tint color
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
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#555",
  },
  darkProfileContainer: {
    borderBottomColor: "#ccc",
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
  darkProfileName: {
    color: "#000",
  },
  profileUsername: {
    fontSize: 14,
    color: "#888",
  },
  darkProfileUsername: {
    color: "#555",
  },
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222",
  },
  darkScreenContainer: {
    backgroundColor: "#f5f5f5",
  },
  screenText: {
    color: "#fff",
    fontSize: 20,
  },
  darkScreenText: {
    color: "#000",
  },
  darkDrawer: {
    backgroundColor: "#222",
  },
  lightDrawer: {
    backgroundColor: "#fff",
  },
  darkHeader: {
    backgroundColor: "#222",
  },
  lightHeader: {
    backgroundColor: "#fff",
  },
});
