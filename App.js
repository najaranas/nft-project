import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import NFTDetails from "./screens/NFTDetails";
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontLoaded) return null;

  return (
    <>
      <StatusBar style="light" animated={true} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="NFTDetails" component={NFTDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
