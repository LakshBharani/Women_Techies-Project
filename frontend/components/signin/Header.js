import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";

const Header = () => {
  return (
    <SafeAreaView style={styles.topContainer}>
      <Text style={styles.title}>
        Sign in<Text style={{ color: "#e9526b", fontSize: 60 }}>.</Text>
      </Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "pink",
    height: "50%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    margin: 30,
    marginBottom: 40,
  },
});
