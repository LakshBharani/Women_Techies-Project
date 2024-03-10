import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import BackButton from "../../../components/BackButton";
import CustomTextField from "../../../components/CustomTextField";
import CustomButton from "../../../components/onboarding/CustomButton";
import { Colors } from "../../../constants/colors";
import axios from "axios";

const SigninScreen = () => {
  const onPressHandler = () => {
    axios
      .post("http://localhost:5001/login", {
        email: "johndoe@gmail.com",
        password: "abc123",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

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
        bgColor={Colors.primary500}
        labelColor={"white"}
        screenToNavigateTo={"Home"}
        onPressHandler={onPressHandler}
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
