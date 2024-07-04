// BatteryStatus.js
import React, { useEffect } from "react";
import * as Battery from "expo-battery";
import { Audio } from "expo-av";
import { Alert } from "react-native";

const BatteryStatus = () => {
  useEffect(() => {
    const checkBatteryLevel = async () => {
      const batteryLevel = await Battery.getBatteryLevelAsync();
      if (batteryLevel === 1) {
        playSound();
      }
    };

    const playSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("./assets/battery-full.mp3")
      );
      await sound.playAsync();
      Alert.alert("Battery Full", "Your battery is fully charged");
    };

    const batterySubscription = Battery.addBatteryLevelListener(
      ({ batteryLevel }) => {
        if (batteryLevel === 1) {
          playSound();
        }
      }
    );

    // Check battery level on component mount
    checkBatteryLevel();

    return () => {
      batterySubscription.remove();
    };
  }, []);

  return null;
};

export default BatteryStatus;
