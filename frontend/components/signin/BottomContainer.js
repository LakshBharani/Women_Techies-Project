import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const BottomContainer = () => {
  const navigation = useNavigation();
  const pressedStyle = (pressed) => {
    return [
      styles.btn,
      {
        backgroundColor: pressed ? "#f08496" : "#f18697",
        transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
      },
    ];
  };
  return (
    <View style={styles.bottomContainer}>
      <Text style={styles.label}>Enter VIT student ID</Text>
      <View style={styles.emailContainer}>
        <TextInput
          placeholder="john.doe2023"
          autoCapitalize="none"
          style={styles.inputText}
        />
        <Text style={styles.textEnding}>@vitstudent.ac.in</Text>
      </View>
      <View>
        <Pressable
          style={({ pressed }) => pressedStyle(pressed)}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.btnText}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BottomContainer;

const styles = StyleSheet.create({
  bottomContainer: {
    marginTop: 20,
    padding: 20,
    position: "absolute",
    height: "65%",
    justifyContent: "center",
    width: "100%",
  },
  label: {
    fontWeight: "600",
    fontSize: 16,
    paddingBottom: 10,
  },
  inputText: { flex: 1, paddingRight: 3, fontSize: 14 },
  textEnding: {
    fontWeight: "bold",
  },
  emailContainer: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  btn: {
    borderRadius: 5,
    padding: 10,
    marginTop: 50,
    alignItems: "center",
  },
  btnText: {
    color: "black",
    fontWeight: "bold",
  },
});
