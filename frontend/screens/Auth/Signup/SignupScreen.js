import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomTextField from "../../../components/CustomTextField";
import GenderPicker from "../../../components/Auth/GenderPicker";
import BackButton from "../../../components/BackButton";
import CustomButton from "../../../components/onboarding/CustomButton";
import { Colors } from "../../../constants/colors";
import React from "react";
import axios from "axios";

const SignupScreen = () => {
  const onPressHandler = () => {
    axios
      .post("http://localhost:5001/register", {
        name: "Laksh",
        email: "laksh@gmail.com",
        password: "qsdasd",
        gender: "Male",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.container}>
        {/* back button */}
        <BackButton />
        <Text style={styles.title}>Sign up with your email & phone number</Text>
        <CustomTextField title={"Name"} placeholder={"John Doe"} />
        <CustomTextField
          title={"VIT student mail"}
          placeholder={"John.Doe2023@vitstudent.ac.in"}
        />
        <CustomTextField title={"Password"} obscureText={true} />
        {/* Gender Field */}
        <GenderPicker />
        {/* Privacy Policy */}
        <View style={styles.privacyPolicyContainer}>
          <Ionicons
            name="checkmark-circle-outline"
            size={24}
            color={Colors.primary500}
          />
          <Text style={styles.privPolicyText}>
            By signing up. you agree to the Terms of service and Privacy Policy.
          </Text>
        </View>
        <CustomButton
          label={"Sign Up"}
          labelColor={"white"}
          bgColor={Colors.primary500}
          centerTitle={true}
          screenToNavigateTo={"Home"}
          onPressHandler={onPressHandler}
        />
      </SafeAreaView>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  privacyPolicyContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 20,
    marginRight: 10,
  },
  privPolicyText: {
    fontSize: 14,
    color: "gray",
    marginBottom: 20,
    marginLeft: 10,
  },
});
