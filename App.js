import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "./frontend/screens/Auth/OnBoardingScreen";
import SigninScreen from "./frontend/screens/Auth/Signup/SigninScreen";
import HomeScreen from "./frontend/screens/HomeScreen";
import SignupScreen from "./frontend/screens/Auth/Signup/SignupScreen";
import RideSetupScreen from "./frontend/screens/RideSetupScreen";
import React from "react";
import { LocationProvider } from "./frontend/services/location";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <LocationProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen
            name="Onboarding"
            component={OnBoardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signin"
            component={SigninScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideSetup"
            component={RideSetupScreen}
            options={{ headerShown: false, presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </LocationProvider>
  );
}
