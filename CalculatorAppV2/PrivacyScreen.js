import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import { ThemeContext } from "./ThemeContext"; // Adjust the path as needed

const PrivacyScreen = () => {
  const { theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === "dark" ? "#000" : "#fff", // Black or white background
    },
    section: {
      marginVertical: 20,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme === "dark" ? "#fff" : "#000", // White or black text color
      marginBottom: 10,
    },
    inputContainer: {
      marginBottom: 20,
    },
    input: {
      backgroundColor: theme === "dark" ? "#333" : "#f2f2f2", // Dark or light background
      color: theme === "dark" ? "#fff" : "#000", // White or black text color
      padding: 10,
      marginVertical: 5,
      borderRadius: 5,
    },
    button: {
      backgroundColor: "#1E90FF", // Blue button
      padding: 15,
      borderRadius: 5,
      alignItems: "center",
      marginVertical: 10,
    },
    buttonText: {
      color: "#fff", // White text color
      fontSize: 16,
      fontWeight: "bold",
    },
    option: {
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: theme === "dark" ? "#333" : "#ccc", // Dark or light border color
    },
    optionText: {
      color: "#1E90FF", // Blue text
      fontSize: 16,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Manage Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Current Password"
            placeholderTextColor={theme === "dark" ? "#888" : "#aaa"}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            placeholderTextColor={theme === "dark" ? "#888" : "#aaa"}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            placeholderTextColor={theme === "dark" ? "#888" : "#aaa"}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy Settings</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Two-Factor Authentication</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>App Permissions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Blocked Accounts</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PrivacyScreen;
