const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LogIn from "./screens/LogIn";
import Confirmation from "./screens/Confirmation";
import OrderHistory from "./screens/OrderHistory";
import ShoppingCart from "./screens/ShoppingCart";
import ProductDetails3 from "./screens/ProductDetails3";
import ProductDetails2 from "./screens/ProductDetails2";
import ProductDetails from "./screens/ProductDetails";
import Home from "./screens/Home";
import Splashscreen from "./screens/Splashscreen";
import SignUp from "./screens/SignUp";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Rubik: require("./assets/fonts/Rubik.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Confirmation"
              component={Confirmation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderHistory"
              component={OrderHistory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShoppingCart"
              component={ShoppingCart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetails3"
              component={ProductDetails3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetails2"
              component={ProductDetails2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splashscreen"
              component={Splashscreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splashscreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
