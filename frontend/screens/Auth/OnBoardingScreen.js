import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import CustomButton from "../../components/onboarding/CustomButton";
import { Colors } from "../../constants/colors";

const OnBoardingScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.topContainer}>
        <Image
          source={require("../../assets/1.png")}
          style={{
            objectFit: "contain",
            height: 300,
            width: "100%",
          }}
        />
        <Text style={styles.title}>UniHitch</Text>
        <Text style={styles.subtitle}>Connect with peers for safe rides!</Text>
      </View>
      <View style={styles.buttons}>
        <CustomButton
          label={"Create an account"}
          labelColor={"white"}
          bgColor={Colors.lightMode.primary500}
          borderColor={Colors.lightMode.primary500}
          screenToNavigateTo={"Signup"}
          centerTitle={true}
        />
        <CustomButton
          label={"Sign In"}
          labelColor={Colors.lightMode.primary500}
          bgColor={"white"}
          borderColor={Colors.lightMode.primary500}
          screenToNavigateTo={"Signin"}
          showBorder={true}
          centerTitle={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    paddingTop: 120,
  },
  subtitle: {
    fontSize: 16,
    paddingTop: 10,
    color: "grey",
  },
  buttons: { width: "90%" },
});
