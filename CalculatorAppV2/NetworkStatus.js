// NetworkStatus.js
import React, { useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import Toast from "react-native-toast-message";

const NetworkStatus = () => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        Toast.show({
          type: "success",
          text1: "Internet Connection",
          text2: "You are back online!",
          position: "top",
          visibilityTime: 4000,
          backgroundColor: "green",
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Internet Connection",
          text2: "You are offline!",
          position: "top",
          visibilityTime: 4000,
          backgroundColor: "red",
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return null;
};

export default NetworkStatus;
