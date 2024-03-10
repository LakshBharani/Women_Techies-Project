import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import React from "react";
import CustomTextField from "../components/CustomTextField";
import { Colors } from "../constants/colors";
import RecentPlaces from "../components/RideSetup/RecentPlaces";

const RideSetupScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ride Setup</Text>
      </View>
      <View style={styles.inputContainer}>
        <CustomTextField
          style={{ paddingLeft: 10 }}
          title={"Pick up"}
          leadingIcon={"locate"}
          leadingIconColor={Colors.primary500}
          placeholder={"Ex: VIT Vellore"}
        />
        <CustomTextField
          style={{ paddingLeft: 10 }}
          title={"Drop Off"}
          leadingIcon={"location-outline"}
          leadingIconColor={Colors.female.primary600}
          placeholder={"Ex: Chennai Airport"}
        />
      </View>
      <RecentPlaces />
    </SafeAreaView>
  );
};

export default RideSetupScreen;

const styles = StyleSheet.create({
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
});
