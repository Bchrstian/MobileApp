import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>
        Calox <Text style={styles.proText}>PRO</Text>
      </Text>
      <Text style={styles.subtitle}>It's more about calculator</Text>
      <Text style={styles.version}>Version 2.0</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Calculating</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explore Features</Text>
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
    backgroundColor: "#000", // Black background
  },
  logoText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  proText: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#888",
    verticalAlign: "super", // Align PRO to the top-right of Calox
  },
  subtitle: {
    fontSize: 16,
    color: "#ccc",
    marginTop: 20,
    textAlign: "center",
  },
  version: {
    fontSize: 14,
    color: "#aaa",
    position: "absolute",
    bottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  button: {
    backgroundColor: "#444",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default HomeScreen;
