import {
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";
import ContentView from "../../components/onboarding/ContentView";

const OnBoardingScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.lightMode.secondaryAccent,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.imageView}>
          <Image
            source={require("../../assets/onboarding.gif")}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>
      </SafeAreaView>
      <ContentView />
    </View>
  );
};
export default OnBoardingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightMode.primary500,
  },
  imageView: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
