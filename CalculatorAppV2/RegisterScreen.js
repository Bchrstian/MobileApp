import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { ThemeContext } from "./ThemeContext"; // Adjust the path as needed

const RegisterScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
    Alert.alert("Success", "Registration complete!");
    navigation.navigate("Home");
  };

  return (
    <View style={[styles.container, theme === "dark" && styles.darkContainer]}>
      <Text style={[styles.title, theme === "dark" && styles.darkTitle]}>
        Register
      </Text>
      <TextInput
        style={[styles.input, theme === "dark" && styles.darkInput]}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, theme === "dark" && styles.darkInput]}
        placeholder="Phone Number"
        placeholderTextColor="#aaa"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={[styles.input, theme === "dark" && styles.darkInput]}
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={[styles.input, theme === "dark" && styles.darkInput]}
        placeholder="Confirm Password"
        placeholderTextColor="#aaa"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={[styles.button, theme === "dark" && styles.darkButton]}
        onPress={handleRegister}
      >
        <Text
          style={[styles.buttonText, theme === "dark" && styles.darkButtonText]}
        >
          Register
        </Text>
      </TouchableOpacity>
      <Text style={[styles.orText, theme === "dark" && styles.darkOrText]}>
        or
      </Text>
      <TouchableOpacity
        style={[
          styles.socialButton,
          theme === "dark" && styles.darkSocialButton,
        ]}
      >
        <Text
          style={[
            styles.socialButtonText,
            theme === "dark" && styles.darkSocialButtonText,
          ]}
        >
          Register with LinkedIn
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.socialButton,
          theme === "dark" && styles.darkSocialButton,
        ]}
      >
        <Text
          style={[
            styles.socialButtonText,
            theme === "dark" && styles.darkSocialButtonText,
          ]}
        >
          Register with GitHub
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
    fontSize: 36,
    fontWeight: "bold",
    color: "#000", // Light text color
    marginBottom: 20,
  },
  darkTitle: {
    color: "#fff", // Dark text color
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#eee", // Light input background
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#000", // Light text color
    marginBottom: 15,
  },
  darkInput: {
    backgroundColor: "#333", // Dark input background
    color: "#fff", // Dark text color
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#1E90FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
  },
  darkButton: {
    backgroundColor: "#1E90FF", // Keep the button color consistent
  },
  buttonText: {
    color: "#fff", // Light button text color
    fontSize: 18,
    fontWeight: "bold",
  },
  darkButtonText: {
    color: "#fff", // Keep the button text color consistent
  },
  orText: {
    color: "#000", // Light text color
    marginVertical: 10,
  },
  darkOrText: {
    color: "#fff", // Dark text color
  },
  socialButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#ddd", // Light button background
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  darkSocialButton: {
    backgroundColor: "#555", // Dark button background
  },
  socialButtonText: {
    color: "#000", // Light button text color
    fontSize: 18,
  },
  darkSocialButtonText: {
    color: "#fff", // Dark button text color
  },
});

export default RegisterScreen;
