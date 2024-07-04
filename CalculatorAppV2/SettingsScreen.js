import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { ThemeContext } from "./ThemeContext"; // Import the ThemeContext

const SettingsScreen = () => {
  const { theme } = useContext(ThemeContext); // Get the current theme

  // Define styles conditionally based on the theme
  const styles = getStyles(theme);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Manage Your Account</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Profile Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Privacy Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Help & Support</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Report a Problem</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other Settings</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>About</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Function to get styles based on the theme
const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === "dark" ? "#000" : "#fff", // Dark or light background
    },
    section: {
      marginVertical: 20,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme === "dark" ? "#fff" : "#000", // Dark or light text
      marginBottom: 10,
    },
    option: {
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: theme === "dark" ? "#333" : "#ccc", // Dark or light border
    },
    optionText: {
      color: theme === "dark" ? "#1E90FF" : "#007AFF", // Dark or light blue text
      fontSize: 16,
    },
  });

export default SettingsScreen;
