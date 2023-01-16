import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.logIn}
      locations={[0, 1]}
      colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
    >
      <Image
        style={styles.blackAndWhiteModernShoesS}
        resizeMode="cover"
        source={require("../assets/black-and-white-modern-shoes-store-logo-1.png")}
      />
      <LinearGradient
        style={styles.logInChild}
        locations={[0, 1]}
        colors={["rgba(255, 255, 255, 0.4)", "rgba(255, 251, 251, 0.1)"]}
      />
      <Text style={[styles.logIn1, styles.logTypo]}>Log in</Text>
      <TextInput
        style={[styles.logInItem, styles.logGroupLayout, styles.logLayout]}
        keyboardType="default"
      />
      <TextInput
        style={[styles.logInInner, styles.logGroupLayout, styles.logLayout]}
        keyboardType="default"
      />
      <Text style={[styles.fullsenyum12gmailcom, styles.orTypo]}>
        fullsenyum12@gmail.com
      </Text>
      <Text style={[styles.text, styles.orTypo]}>*************</Text>
      <Text style={[styles.or, styles.orTypo]}>or</Text>
      <View
        style={[
          styles.rectangleParent,
          styles.logGroupLayout,
          styles.rectangleGroupLayout,
        ]}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={styles.facebookIcon}
          resizeMode="cover"
          source={require("../assets/facebook.png")}
        />
        <Text style={[styles.continueWithFacebook, styles.continueTypo]}>
          Continue with Facebook
        </Text>
      </View>
      <View
        style={[
          styles.rectangleGroup,
          styles.logGroupLayout,
          styles.rectangleGroupLayout,
        ]}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={styles.googleIcon}
          resizeMode="cover"
          source={require("../assets/google.png")}
        />
        <Text style={[styles.continueWithGoogle, styles.continueTypo]}>
          Continue with Google
        </Text>
      </View>
      <View
        style={[
          styles.rectangleContainer,
          styles.logGroupLayout,
          styles.rectangleGroupLayout,
        ]}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={styles.appleIcon}
          resizeMode="cover"
          source={require("../assets/apple.png")}
        />
        <Text style={[styles.continueWithApple, styles.continueTypo]}>
          Continue with Apple
        </Text>
      </View>
      <Pressable
        style={[
          styles.groupPressable,
          styles.logGroupLayout,
          styles.rectangleGroupLayout,
        ]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.rectangleView, styles.groupChildPosition]} />
        <Text style={[styles.logIn2, styles.logTypo]}>Log in</Text>
      </Pressable>
      <Pressable
        style={[styles.dontHaveAnContainer, styles.forgotPasswordTypo]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
        <Text style={styles.signUp}> Sign up</Text>
      </Pressable>
      <Text style={[styles.forgotPassword, styles.forgotPasswordTypo]}>
        Forgot Password?
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logTypo: {
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  logGroupLayout: {
    height: 57,
    width: 350,
    left: 20,
    position: "absolute",
  },
  logLayout: {
    borderRadius: Border.br_lg,
    width: 350,
    backgroundColor: Color.white,
    left: 20,
  },
  orTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleGroupLayout: {
    width: 350,
    left: 20,
  },
  groupChildPosition: {
    top: 0,
    height: 57,
    width: 350,
    borderRadius: Border.br_lg,
    left: 0,
    position: "absolute",
  },
  continueTypo: {
    top: 17,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  forgotPasswordTypo: {
    left: 43,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  blackAndWhiteModernShoesS: {
    top: 27,
    left: 40,
    width: 315,
    height: 200,
    position: "absolute",
  },
  logInChild: {
    top: 200,
    width: 390,
    height: 667,
    left: 0,
    position: "absolute",
    backgroundColor: Color.greenishGreen,
    borderRadius: Border.br_xl,
  },
  logIn1: {
    top: 235,
    fontSize: FontSize.size_4xl,
    color: Color.black,
    left: 34,
  },
  logInItem: {
    top: 291,
    backgroundColor: Color.white,
  },
  logInInner: {
    top: 360,
    backgroundColor: Color.white,
  },
  fullsenyum12gmailcom: {
    top: 307,
    color: "#010101",
    left: 34,
  },
  text: {
    top: 377,
    color: Color.black,
    left: 34,
  },
  or: {
    top: 501,
    left: 184,
    color: Color.black,
  },
  groupChild: {
    backgroundColor: Color.white,
  },
  facebookIcon: {
    top: 11,
    left: 14,
    width: 36,
    height: 36,
    position: "absolute",
  },
  continueWithFacebook: {
    left: 67,
  },
  rectangleParent: {
    top: 533,
  },
  googleIcon: {
    top: 2,
    left: 6,
    width: 52,
    height: 52,
    position: "absolute",
  },
  continueWithGoogle: {
    left: 80,
  },
  rectangleGroup: {
    top: 602,
  },
  appleIcon: {
    top: 5,
    left: 8,
    width: 48,
    height: 48,
    position: "absolute",
  },
  continueWithApple: {
    left: 86,
  },
  rectangleContainer: {
    top: 671,
  },
  rectangleView: {
    backgroundColor: Color.black,
  },
  logIn2: {
    top: 15,
    left: 139,
    fontSize: FontSize.size_2xl,
    color: "#00ff0a",
  },
  groupPressable: {
    top: 429,
  },
  dontHaveAn: {
    color: Color.black,
  },
  signUp: {
    color: Color.white,
  },
  dontHaveAnContainer: {
    top: 740,
  },
  forgotPassword: {
    top: 772,
    color: Color.white,
  },
  logIn: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.greenishGreen,
    borderRadius: Border.br_xl,
  },
});

export default LogIn;
