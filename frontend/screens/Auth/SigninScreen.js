import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/signin/Header";
import BottomContainer from "../../components/signin/BottomContainer";

const SigninScreen = () => {
  return (
    <View style={styles.root}>
      <Header />
      <BottomContainer />
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
