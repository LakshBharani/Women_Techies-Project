import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "./frontend/screens/Auth/OnBoardingScreen";
import SigninScreen from "./frontend/screens/Auth/SigninScreen";
import HomeScreen from "./frontend/screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Signin">
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
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  );
}
