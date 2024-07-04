import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import RegisterScreen from "./RegisterScreen";
import SignInScreen from "./SignInScreen";
import CalculatorScreen from "./CalculatorScreen";
import { ThemeContext } from "./ThemeContext"; // Adjust the path as needed

const Tab = createBottomTabNavigator();

function MyTabs() {
  const { theme } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Register") {
            iconName = "person-add-outline";
          } else if (route.name === "Sign In") {
            iconName = "log-in-outline";
          } else if (route.name === "Calculator") {
            iconName = "calculator-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme === "dark" ? "tomato" : "tomato",
        tabBarInactiveTintColor: theme === "dark" ? "gray" : "gray",
        tabBarStyle: {
          backgroundColor: theme === "dark" ? "#1a1a1a" : "#fff", // Dark or light background for the tab bar
        },
        headerStyle: {
          backgroundColor: theme === "dark" ? "#1a1a1a" : "#fff", // Dark or light background for the header
        },
        headerTintColor: theme === "dark" ? "#fff" : "#000", // White or black color for the header text
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Register" }}
      />
      <Tab.Screen
        name="Sign In"
        component={SignInScreen}
        options={{ title: "Sign In" }}
      />
      <Tab.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{ title: "Calculator" }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
