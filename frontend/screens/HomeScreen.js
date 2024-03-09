import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <View>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerText}>UniHitch</Text>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#e5e5e5",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontWeight: "bold",
  },
});
