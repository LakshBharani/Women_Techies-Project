import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QuickLinkContainer from "../QuickLinkContainer";

const RecentPlaces = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Recents</Text>
      <QuickLinkContainer />
    </View>
  );
};

export default RecentPlaces;

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
});
