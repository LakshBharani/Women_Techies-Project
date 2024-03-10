import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CustomButton = ({
  bgColor,
  borderColor,
  label,
  labelColor,
  screenToNavigateTo,
  showBorder,
  centerTitle,
  style,
  onPressHandler,
}) => {
  const navigator = useNavigation();

  const handlePress = () => {
    onPressHandler?.();
    if (screenToNavigateTo) {
      navigator.navigate(screenToNavigateTo);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.btn,
        {
          backgroundColor: bgColor,
          borderColor: showBorder ? borderColor : "transparent",
          alignItems: centerTitle ? "center" : "flex-start",
          transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
        },
        style,
      ]}
    >
      <Text style={{ color: labelColor }}>{label}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
});
