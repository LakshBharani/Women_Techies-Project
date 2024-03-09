import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const CustomTextField = ({ title, placeholder, obscureText }) => {
  const [isFocussed, setIsFocussed] = useState(false);
  const [value, setValue] = useState("");
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={[styles.field, isFocussed && { borderColor: "black" }]}
        value={value}
        secureTextEntry={obscureText}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => {
          setIsFocussed(true);
        }}
        onBlur={() => {
          setIsFocussed(false);
        }}
      />
    </View>
  );
};

export default CustomTextField;

const styles = StyleSheet.create({
  fieldContainer: {
    width: "100%",
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    paddingBottom: 10,
  },
  field: {
    padding: 15,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
  },
});
