import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/colors";

const ContentView = () => {
  const navigation = useNavigation();

  const pressedStyle = (pressed) => {
    return [
      styles.btn,
      {
        backgroundColor: pressed ? "lightgrey" : "white",
        transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
      },
    ];
  };
  return (
    <View style={styles.contentView}>
      <View style={styles.textLabels}>
        {/* title */}
        <Text style={styles.title}>UniHitch</Text>
        {/* subtitle */}
        <Text style={styles.subtitle}>Safety First, Every Ride</Text>
      </View>
      {/* button */}
      <Pressable
        style={({ pressed }) => pressedStyle(pressed)}
        onPress={() => {
          navigation.navigate("Signin");
        }}
      >
        <Text style={styles.btnText}>Get Started</Text>
      </Pressable>
    </View>
  );
};

export default ContentView;

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    width: "100%",
    paddingBottom: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Colors.lightMode.primary300,
  },
  textLabels: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  btn: {
    width: "60%",
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: { width: 3, height: 3 },
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
