import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import RegisterScreen from "./RegisterScreen";
import SignInScreen from "./SignInScreen";
import CalculatorScreen from "./CalculatorScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
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
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#1a1a1a", // Dark background for the tab bar
        },
        headerStyle: {
          backgroundColor: "#1a1a1a", // Dark background for the header
        },
        headerTintColor: "#fff", // White color for the header text
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
