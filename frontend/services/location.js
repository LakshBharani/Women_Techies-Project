import React, { createContext, useState, useEffect } from "react";
import * as Location from "expo-location";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setLocationError("Location permission denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
    } catch (error) {
      console.error("Error requesting location permission:", error);
    }
  };

  getLocation();

  return (
    <LocationContext.Provider value={{ currentLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
