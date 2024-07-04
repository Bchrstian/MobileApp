import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ThemeContext } from "./ThemeContext"; // Adjust the path as needed

const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, theme === "dark" && styles.darkContainer]}>
      <Text style={[styles.logoText, theme === "dark" && styles.darkLogoText]}>
        Calox{" "}
        <Text style={[styles.proText, theme === "dark" && styles.darkProText]}>
          PRO
        </Text>
      </Text>
      <Text style={[styles.subtitle, theme === "dark" && styles.darkSubtitle]}>
        It's more about calculator
      </Text>
      <Text style={[styles.version, theme === "dark" && styles.darkVersion]}>
        Version 2.0
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, theme === "dark" && styles.darkButton]}
        >
          <Text
            style={[
              styles.buttonText,
              theme === "dark" && styles.darkButtonText,
            ]}
          >
            Start Calculating
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, theme === "dark" && styles.darkButton]}
        >
          <Text
            style={[
              styles.buttonText,
              theme === "dark" && styles.darkButtonText,
            ]}
          >
            Explore Features
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Light background
  },
  darkContainer: {
    backgroundColor: "#000", // Dark background
  },
  logoText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#000", // Light text color
    textAlign: "center",
  },
  darkLogoText: {
    color: "#fff", // Dark text color
  },
  proText: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#555", // Light text color
    verticalAlign: "super", // Align PRO to the top-right of Calox
  },
  darkProText: {
    color: "#888", // Dark text color
  },
  subtitle: {
    fontSize: 16,
    color: "#333", // Light text color
    marginTop: 20,
    textAlign: "center",
  },
  darkSubtitle: {
    color: "#ccc", // Dark text color
  },
  version: {
    fontSize: 14,
    color: "#666", // Light text color
    position: "absolute",
    bottom: 20,
    textAlign: "center",
  },
  darkVersion: {
    color: "#aaa", // Dark text color
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  button: {
    backgroundColor: "#ddd", // Light button background
    padding: 15,
    borderRadius: 10,
  },
  darkButton: {
    backgroundColor: "#444", // Dark button background
  },
  buttonText: {
    color: "#000", // Light button text color
    fontSize: 16,
  },
  darkButtonText: {
    color: "#fff", // Dark button text color
  },
});

export default HomeScreen;
