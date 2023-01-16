import * as React from "react";
import { Image, StyleSheet, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const Splashscreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.splashscreen}
      locations={[0, 1]}
      colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
    >
      <Pressable
        style={styles.blackAndWhiteModernShoesS}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/black-and-white-modern-shoes-store-logo-11.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
  blackAndWhiteModernShoesS: {
    position: "absolute",
    left: 0,
    top: 215,
    width: 390,
    height: 413,
  },
  splashscreen: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.greenishGreen,
    width: "100%",
  },
});

export default Splashscreen;
