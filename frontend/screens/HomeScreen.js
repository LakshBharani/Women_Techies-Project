import MapView from "react-native-maps";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";
import QuickLinkContainer from "../components/QuickLinkContainer";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContainer from "../components/Home/FavoritesContainer";
import { LocationProvider } from "../services/location";

const HomeScreen = ({ navigation }) => {
  const initialRegion = {
    latitude: 12.973042902064249,
    longitude: 79.15881820000538,
    latitudeDelta: 0.0025,
    longitudeDelta: 0.0025,
    zoom: 20,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion} />
      <View style={[styles.profile, { backgroundColor: Colors.primary500 }]}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/79.jpg" }}
          style={{ width: 40, height: 40, borderRadius: 100 }}
        />
      </View>
      <View
        style={[styles.bottomContainer, { backgroundColor: Colors.primary400 }]}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("RideSetup");
          }}
        >
          <View>
            <View
              style={[
                styles.bottomButton,
                { backgroundColor: Colors.primary300 },
              ]}
            >
              <Ionicons name={"search"} size={22} color={"grey"} />
              <Text style={styles.title}>Where To?</Text>
            </View>
          </View>
        </Pressable>
        <FavoritesContainer subTitleColor={"white"} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: "60%",
    width: "100%",
  },
  bottomContainer: {
    top: -50,
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 8,
  },
  profile: {
    position: "absolute",
    top: 50,
    right: 10,
    padding: 2,
    borderRadius: 100,
  },
  bottomButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    padding: 5,
    paddingHorizontal: 10,
    color: "#625858",
    fontSize: 20,
    fontWeight: "600",
  },
});
