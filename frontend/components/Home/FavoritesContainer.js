import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QuickLinkContainer from "../QuickLinkContainer";

const FavoritesContainer = ({ subTitleColor }) => {
  return (
    <View>
      <Text style={[styles.subtitle, { color: subTitleColor }]}>Favorites</Text>
      <QuickLinkContainer bgColor={"white"} />
      <QuickLinkContainer bgColor={"white"} />
      <QuickLinkContainer bgColor={"white"} />
      <QuickLinkContainer bgColor={"white"} />
      <QuickLinkContainer bgColor={"white"} />
    </View>
  );
};

export default FavoritesContainer;

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 10,
    padding: 5,
    color: "#625858",
    fontWeight: "600",
    fontSize: 16,
  },
});
