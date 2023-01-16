import * as React from "react";
import { View, Pressable, Image, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const ShoppingCart = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.shoppingCart}
      locations={[0, 1]}
      colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
    >
      <Pressable
        style={styles.iconlyboldarrowLeftCircl}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconlyboldarrow--left-circle.png")}
        />
      </Pressable>
      <Text style={[styles.keranjangAnda, styles.rp1199999Typo]}>
        Keranjang Anda
      </Text>
      <Image
        style={styles.iconlyboldheart}
        resizeMode="cover"
        source={require("../assets/iconlyboldheart.png")}
      />
      <View style={styles.shoppingCartChild} />
      <View
        style={[
          styles.shoppingCartItem,
          styles.shoppingChildLayout2,
          styles.shoppingPosition,
        ]}
      />
      <View
        style={[
          styles.shoppingCartInner,
          styles.shoppingChildLayout2,
          styles.shoppingPosition,
        ]}
      />
      <View
        style={[
          styles.rectangleView,
          styles.shoppingChildLayout2,
          styles.shoppingPosition,
        ]}
      />
      <View
        style={[
          styles.shoppingCartChild1,
          styles.shoppingChildLayout2,
          styles.shoppingPosition,
        ]}
      />
      <View style={[styles.shoppingCartChild2, styles.shoppingChildLayout2]} />
      <Pressable style={styles.rectanglePressable} />
      <Text style={[styles.rp1199999, styles.rp1199999Typo]}>Rp1.199.999</Text>
      <Image
        style={[styles.rectangleIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <Text style={[styles.nikeAirZoom, styles.nikeAirZoomTypo]}>
        Nike Air Zoom
      </Text>
      <View style={[styles.shoppingCartChild3, styles.shoppingChildLayout1]} />
      <View style={[styles.shoppingCartChild4, styles.shoppingChildLayout1]} />
      <Text style={[styles.size7, styles.textTypo, styles.textPosition]}>
        Size : 7
      </Text>
      <Image
        style={[styles.iconlyboldarrowDown2, styles.check1IconLayout]}
        resizeMode="cover"
        source={require("../assets/iconlyboldarrow--down-2.png")}
      />
      <Text style={[styles.text, styles.textTypo, styles.textPosition]}>-</Text>
      <Text style={[styles.text1, styles.textTypo, styles.textPosition]}>
        1
      </Text>
      <Text style={[styles.text2, styles.textTypo, styles.textPosition]}>
        +
      </Text>
      <Image
        style={[styles.check1Icon, styles.check1IconLayout]}
        resizeMode="cover"
        source={require("../assets/check-1.png")}
      />
      <Text style={[styles.deliveryBy28th, styles.textTypo]}>
        Delivery by 28th Feb
      </Text>
      <Text style={[styles.selectPaymentMode, styles.nikeAirZoomTypo]}>
        Select Payment Mode
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.shoppingChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.shoppingCartChild5, styles.shoppingChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.shoppingCartChild6, styles.shoppingChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.shoppingCartChild7, styles.shoppingChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Text
        style={[
          styles.addDebitcreditatmCard,
          styles.addCardTypo,
          styles.codPosition,
        ]}
      >
        Add Debit/Credit/ATM Card
      </Text>
      <Text style={[styles.gopay, styles.addCardTypo, styles.codPosition]}>
        Gopay
      </Text>
      <Text style={[styles.dana, styles.addCardTypo, styles.codPosition]}>
        DANA
      </Text>
      <Text style={[styles.cod, styles.addCardTypo, styles.codPosition]}>
        COD
      </Text>
      <Text style={[styles.addGiftCard, styles.addCardTypo]}>
        Add Gift Card or Promo Code
      </Text>
      <Pressable
        style={styles.buyNow}
        onPress={() => navigation.navigate("Confirmation")}
      >
        <Text style={styles.addCardTypo}>Buy Now</Text>
      </Pressable>
      <Image
        style={[styles.iconlyboldarrowDownCircl, styles.shoppingChildLayout]}
        resizeMode="cover"
        source={require("../assets/iconlyboldarrow--down-circle.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rp1199999Typo: {
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  shoppingChildLayout2: {
    height: "8.65%",
    backgroundColor: Color.black,
    borderRadius: Border.br_md,
    width: "88.97%",
    position: "absolute",
  },
  shoppingPosition: {
    right: "5.9%",
    height: "8.65%",
    left: "5.13%",
  },
  nikeAirZoomTypo: {
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  shoppingChildLayout1: {
    borderRadius: Border.br_xs,
    bottom: "75.12%",
    top: "22.27%",
    width: "18.97%",
    height: "2.61%",
    backgroundColor: Color.white,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  textPosition: {
    top: "22.51%",
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  check1IconLayout: {
    width: "3.85%",
    height: "1.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  shoppingChildLayout: {
    left: "9.74%",
    right: "84.1%",
    width: "6.15%",
    height: "2.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  addCardTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
  },
  codPosition: {
    left: "22.05%",
    fontSize: FontSize.size_lg,
    color: Color.white,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconlyboldarrowLeftCircl: {
    left: "6.41%",
    right: "85.38%",
    height: "3.79%",
    width: "8.21%",
    bottom: "91.82%",
    top: "4.38%",
    position: "absolute",
  },
  keranjangAnda: {
    top: "4.03%",
    left: "18.97%",
    fontSize: FontSize.size_4xl,
    color: Color.black,
  },
  iconlyboldheart: {
    left: "86.67%",
    right: "5.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "3.79%",
    width: "8.21%",
    bottom: "91.82%",
    top: "4.38%",
    position: "absolute",
    overflow: "hidden",
  },
  shoppingCartChild: {
    height: "19.91%",
    top: "14.93%",
    bottom: "65.17%",
    backgroundColor: Color.black,
    borderRadius: Border.br_md,
    width: "88.97%",
    left: "5.13%",
    right: "5.9%",
    position: "absolute",
  },
  shoppingCartItem: {
    top: "42.3%",
    bottom: "49.05%",
    left: "5.13%",
  },
  shoppingCartInner: {
    top: "51.9%",
    bottom: "39.45%",
    left: "5.13%",
  },
  rectangleView: {
    top: "61.49%",
    bottom: "29.86%",
    left: "5.13%",
  },
  shoppingCartChild1: {
    top: "71.09%",
    bottom: "20.26%",
    left: "5.13%",
  },
  shoppingCartChild2: {
    top: "80.69%",
    right: "5.64%",
    bottom: "10.66%",
    left: "5.38%",
  },
  rectanglePressable: {
    top: "90.28%",
    bottom: "1.07%",
    left: "5.9%",
    backgroundColor: Color.white,
    height: "8.65%",
    borderRadius: Border.br_md,
    width: "88.97%",
    right: "5.13%",
    position: "absolute",
  },
  rp1199999: {
    top: "26.07%",
    fontSize: FontSize.size_xl,
    color: Color.white,
    left: "45.38%",
  },
  rectangleIcon: {
    height: "16.59%",
    width: "32.31%",
    top: "16.59%",
    right: "58.97%",
    bottom: "66.82%",
    left: "8.72%",
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  nikeAirZoom: {
    top: "17.77%",
    color: Color.white,
    left: "45.38%",
  },
  shoppingCartChild3: {
    right: "35.13%",
    left: "45.9%",
  },
  shoppingCartChild4: {
    right: "14.36%",
    left: "66.67%",
  },
  size7: {
    left: "47.44%",
  },
  iconlyboldarrowDown2: {
    top: "22.75%",
    right: "35.64%",
    bottom: "75.47%",
    left: "60.51%",
  },
  text: {
    left: "67.69%",
  },
  text1: {
    left: "75.13%",
  },
  text2: {
    left: "81.54%",
  },
  check1Icon: {
    top: "30.57%",
    right: "50.77%",
    bottom: "67.65%",
    left: "45.38%",
  },
  deliveryBy28th: {
    top: "30.33%",
    left: "51.03%",
    color: Color.white,
  },
  selectPaymentMode: {
    top: "37.8%",
    left: "5.13%",
    color: Color.black,
  },
  ellipseIcon: {
    bottom: "52.01%",
    top: "45.14%",
  },
  shoppingCartChild5: {
    bottom: "42.42%",
    top: "54.74%",
  },
  shoppingCartChild6: {
    bottom: "32.82%",
    top: "64.34%",
  },
  shoppingCartChild7: {
    bottom: "23.22%",
    top: "73.93%",
  },
  addDebitcreditatmCard: {
    top: "45.14%",
  },
  gopay: {
    top: "54.74%",
  },
  dana: {
    top: "64.34%",
  },
  cod: {
    top: "73.93%",
  },
  addGiftCard: {
    top: "83.53%",
    left: "22.31%",
    color: "#05ff00",
    position: "absolute",
  },
  buyNow: {
    left: "39.74%",
    top: "93.13%",
    position: "absolute",
  },
  iconlyboldarrowDownCircl: {
    top: "83.65%",
    bottom: "13.51%",
  },
  shoppingCart: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 844,
    backgroundColor: Color.greenishGreen,
    overflow: "hidden",
    width: "100%",
  },
});

export default ShoppingCart;
