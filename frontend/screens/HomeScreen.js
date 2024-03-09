import MapView from "react-native-maps";
import { StyleSheet, View, SafeAreaView } from "react-native";

const HomeScreen = () => {
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
      <SafeAreaView style={styles.bottomContainer}></SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: "100%",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 200,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
