import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Animated,{ FadeIn, FadeOut } from 'react-native-reanimated';
export default function Camera() {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <Animated.View entering={FadeIn.delay(100).duration(1000)} exiting={FadeOut} style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ratio="4:3">
        <View style={styles.footer}>
          {/* Access The File */}
          <TouchableOpacity >
            <FontAwesome name="photo" size={44} color="white" />
          </TouchableOpacity>
          {/* Click The Photo */}
          <TouchableOpacity >
            <MaterialIcons name="camera" size={44} color="white" />
          </TouchableOpacity>
          {/* Reverse The Camera */}
          <TouchableOpacity onPress={toggleCameraFacing}>
            <Ionicons name="camera-reverse-outline" size={44} color="white" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 14,
    // backgroundColor: 'grey',
  },
});
