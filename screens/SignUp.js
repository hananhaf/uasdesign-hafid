import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.signUp}
      locations={[0, 1]}
      colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
    >
      <LinearGradient
        style={styles.signUpChild}
        locations={[0, 1]}
        colors={["rgba(255, 255, 255, 0.4)", "rgba(255, 251, 251, 0.1)"]}
      />
      <Text style={[styles.signUp1, styles.signTypo]}>Sign up</Text>
      <View
        style={[styles.signUpItem, styles.signLayout, styles.signLayout1]}
      />
      <View
        style={[styles.signUpInner, styles.signLayout, styles.signLayout1]}
      />
      <TextInput
        style={[
          styles.rectangleTextinput,
          styles.signLayout,
          styles.signLayout1,
        ]}
        keyboardType="default"
      />
      <Text style={[styles.hafidAw, styles.textTypo, styles.textPosition]}>
        Hafid AW
      </Text>
      <Text
        style={[
          styles.fullsenyum12gmailcom,
          styles.textTypo,
          styles.textPosition,
        ]}
      >
        fullsenyum12@gmail.com
      </Text>
      <Text style={[styles.text, styles.textTypo, styles.textPosition]}>
        **********
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.signLayout]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <View style={[styles.groupChild, styles.signLayout]} />
        <Text style={[styles.signUp2, styles.signTypo]}>Sign up</Text>
      </Pressable>
      <Text style={[styles.sudahMemilikiAkunContainer, styles.textTypo]}>
        <Text style={styles.sudahMemilikiAkun}>Sudah memiliki akun?</Text>
        <Text style={styles.logIn}> Log in</Text>
      </Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={styles.blackAndWhiteModernShoesS}
        resizeMode="cover"
        source={require("../assets/black-and-white-modern-shoes-store-logo-12.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  signTypo: {
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  signLayout: {
    height: 57,
    width: 350,
    position: "absolute",
  },
  signLayout1: {
    backgroundColor: Color.white,
    width: 350,
    borderRadius: Border.br_lg,
    left: 20,
  },
  textTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  textPosition: {
    left: 33,
    fontSize: FontSize.size_lg,
  },
  signUpChild: {
    top: 198,
    width: 390,
    height: 667,
    left: 0,
    position: "absolute",
    backgroundColor: Color.greenishGreen,
    borderRadius: Border.br_xl,
  },
  signUp1: {
    top: 235,
    left: 34,
    fontSize: FontSize.size_4xl,
    color: Color.black,
  },
  signUpItem: {
    top: 291,
  },
  signUpInner: {
    top: 360,
  },
  rectangleTextinput: {
    top: 429,
  },
  hafidAw: {
    top: 307,
    color: "#060606",
  },
  fullsenyum12gmailcom: {
    top: 376,
    color: Color.black,
  },
  text: {
    top: 445,
    color: Color.black,
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.black,
    borderRadius: Border.br_lg,
    width: 350,
    left: 0,
  },
  signUp2: {
    top: 15,
    left: 131,
    fontSize: FontSize.size_2xl,
    color: "#00ff29",
  },
  rectangleParent: {
    top: 498,
    width: 350,
    left: 20,
  },
  sudahMemilikiAkun: {
    color: Color.black,
  },
  logIn: {
    color: Color.white,
  },
  sudahMemilikiAkunContainer: {
    top: 738,
    left: 39,
  },
  ellipseIcon: {
    top: 52,
    left: 135,
    width: 120,
    height: 121,
    position: "absolute",
  },
  blackAndWhiteModernShoesS: {
    top: 5,
    left: 58,
    width: 274,
    height: 218,
    position: "absolute",
  },
  signUp: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.greenishGreen,
    borderRadius: Border.br_xl,
  },
});

export default SignUp;
