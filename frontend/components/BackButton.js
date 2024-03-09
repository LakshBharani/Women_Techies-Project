import { StyleSheet, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.backBtn}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Ionicons name="chevron-back" size={24} color="black" />
      <Text style={{ paddingLeft: 10 }}>Back</Text>
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});
