import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import BackButton from "../../components/BackButton";
import CustomTextField from "../../components/Auth/CustomTextField";
import CustomButton from "../../components/onboarding/CustomButton";
import { Colors } from "../../constants/colors";

const SigninScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <BackButton />
      <Text style={styles.title}>Sign in</Text>
      <CustomTextField
        title={"VIT student mail"}
        placeholder={"John.Doe2023@vitstudent.ac.in"}
      />
      <CustomTextField title={"Password"} obscureText={true} />
      <CustomButton
        style={{ marginTop: 20 }}
        label={"Continue"}
        centerTitle={true}
        bgColor={Colors.lightMode.primary500}
        labelColor={"white"}
        screenToNavigateTo={"Home"}
      />
    </SafeAreaView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
});
