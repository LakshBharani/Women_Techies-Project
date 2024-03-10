import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

const QuickLinkContainer = ({ bgColor }) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Ionicons name={"location"} size={24} color={Colors.primary600} />
      <Text style={styles.title}>VIT Vellore</Text>
    </View>
  );
};

export default QuickLinkContainer;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 5,
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    paddingLeft: 8,
    fontSize: 14,
  },
});
