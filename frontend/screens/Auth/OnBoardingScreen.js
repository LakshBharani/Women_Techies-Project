import { Pressable, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const OnBoardingScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.imageView}></View>
      <View style={styles.contentView}>
        <Text style={styles.title}>UniHitch</Text>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Get Started</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
ahsdhad
export default OnBoardingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageView: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  contentView: {
    flex: 1,
    width: "100%",
    paddingBottom: 50,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    paddingBottom: 50,
  },
  btn: {
    width: "60%",
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
