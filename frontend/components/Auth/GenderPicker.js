import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";

const GenderPicker = () => {
  const [gender, setGender] = useState("");

  return (
    <View style={styles.genderContainer}>
      <Text style={styles.label}>Gender</Text>
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
        style={styles.picker}
        itemStyle={{ fontSize: 16 }}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>
    </View>
  );
};

export default GenderPicker;

const styles = StyleSheet.create({
  genderContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  picker: {
    width: "70%",
  },
});
