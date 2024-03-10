import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const CustomTextField = ({
  title,
  placeholder,
  obscureText,
  leadingIcon,
  leadingIconColor,
  style,
}) => {
  const [isFocussed, setIsFocussed] = useState(false);
  const [value, setValue] = useState("");
  return (
    <View style={styles.fieldContainer}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View
        style={[
          styles.inputContainer,
          isFocussed && { borderColor: "black" },
          style,
        ]}
      >
        <Ionicons
          name={leadingIcon}
          size={24}
          color={isFocussed ? leadingIconColor : "grey"}
        />
        <TextInput
          placeholder={placeholder}
          style={styles.field}
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
  },
  field: {
    flex: 1,
    padding: 15,
  },
  inputContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
  },
});
