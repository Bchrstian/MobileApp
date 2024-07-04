import React, { useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ThemeContext } from "./ThemeContext"; // Adjust the path as needed

const SignInScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, theme === "dark" && styles.darkContainer]}>
      <Text style={[styles.title, theme === "dark" && styles.darkTitle]}>
        Sign In
      </Text>
      <TextInput
        style={[styles.input, theme === "dark" && styles.darkInput]}
        placeholder="Email"
        placeholderTextColor={theme === "dark" ? "#aaa" : "#555"}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, theme === "dark" && styles.darkInput]}
        placeholder="Password"
        placeholderTextColor={theme === "dark" ? "#aaa" : "#555"}
        secureTextEntry
      />
      <TouchableOpacity
        style={[styles.button, theme === "dark" && styles.darkButton]}
        onPress={() => {
          /* Add sign-in logic here */
        }}
      >
        <Text
          style={[styles.buttonText, theme === "dark" && styles.darkButtonText]}
        >
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text
          style={[styles.linkText, theme === "dark" && styles.darkLinkText]}
        >
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Light background
    padding: 20,
  },
  darkContainer: {
    backgroundColor: "#000", // Dark background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000", // Light text color
    marginBottom: 20,
  },
  darkTitle: {
    color: "#fff", // Dark text color
  },
  input: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#fff", // Light input background
    borderRadius: 8,
    color: "#000", // Light input text color
  },
  darkInput: {
    backgroundColor: "#333", // Dark input background
    color: "#fff", // Dark input text color
  },
  button: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#1E90FF", // Blue button
    borderRadius: 8,
    alignItems: "center",
  },
  darkButton: {
    backgroundColor: "#4682B4", // Darker blue button
  },
  buttonText: {
    color: "#fff", // Light button text color
    fontWeight: "bold",
  },
  darkButtonText: {
    color: "#fff", // Dark button text color
  },
  linkText: {
    color: "#1E90FF", // Light link text color
    marginTop: 20,
  },
  darkLinkText: {
    color: "#ADD8E6", // Light blue link text color for dark theme
  },
});

export default SignInScreen;
