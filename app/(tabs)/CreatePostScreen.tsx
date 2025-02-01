import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { themes } from "@/themes";
import { router } from "expo-router";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";

const CreatePostScreen = () => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [permissionResponse, requestPermissionMedia] =
    MediaLibrary.usePermissions();
  const ref = useRef<CameraView | null>(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted && !permissionResponse?.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera & save pictures
        </Text>
        <TouchableOpacity
          style={{
            marginHorizontal: "auto",
            backgroundColor: themes.btnBg,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 30,
          }}
          onPress={async () => {
            await requestPermission();
            await requestPermissionMedia();
          }}
        >
          <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>
            Grant permission
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // toggle the camera
  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  // saving photos into gallary
  async function takePicture() {
    try {
      if (ref.current != null) {
        const photo = await ref.current.takePictureAsync();
        if (photo != undefined) {
          if (!permissionResponse?.granted) {
            await requestPermissionMedia();
            await MediaLibrary.saveToLibraryAsync(photo?.uri);
          }
        }
      }
    } catch (error: any) {
      console.error(error.message);
    }
  }

  // pick image from gallary
  const pickImgae = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // image path
      console.log(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={ref}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <MaterialIcons name="cameraswitch" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <MaterialIcons name="camera" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              await pickImgae();
              // router.push({
              //   pathname: "/PhotosPreviews",
              // });
            }}
          >
            <Fontisto name="photograph" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

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
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    marginBottom: 100,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default CreatePostScreen;
