import * as React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProductDetails3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.productDetails3}>
      <Text
        style={[
          styles.nikeAirZoom,
          styles.rp1199999Typo,
          styles.nikeAirZoomTypo,
        ]}
      >
        Nike Air Zoom
      </Text>
      <Text style={[styles.rp1199999, styles.sizeUkTypo, styles.rp1199999Typo]}>
        Rp1.199.999
      </Text>
      <Text style={[styles.sizeUk, styles.sizeUkPosition, styles.sizeUkTypo]}>
        Size (UK)
      </Text>
      <View
        style={[
          styles.productDetails3Child,
          styles.productChildLayout1,
          styles.productChildLayout2,
        ]}
      />
      <View
        style={[
          styles.productDetails3Item,
          styles.productChildLayout1,
          styles.productChildLayout2,
        ]}
      />
      <LinearGradient
        style={[
          styles.productDetails3Inner,
          styles.pressableBg,
          styles.productChildLayout1,
        ]}
        locations={[0, 1]}
        colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
      />
      <View
        style={[
          styles.rectangleView,
          styles.productChildLayout1,
          styles.productChildLayout2,
        ]}
      />
      <View
        style={[
          styles.productDetails3Child1,
          styles.productChildLayout1,
          styles.productChildLayout2,
        ]}
      />
      <Text style={[styles.text, styles.textTypo]}>5</Text>
      <Text style={[styles.text1, styles.textTypo]}>6</Text>
      <Text style={[styles.text2, styles.textTypo]}>7</Text>
      <Text style={[styles.text3, styles.textTypo]}>8</Text>
      <Text style={[styles.text4, styles.textTypo]}>9</Text>
      <Text
        style={[
          styles.deskripsiProduk,
          styles.rp1199999Typo,
          styles.nikeAirZoomTypo,
        ]}
      >
        Deskripsi Produk
      </Text>
      <Text style={[styles.teknologiZoomAir, styles.sizeUkPosition]}>
        “Teknologi Zoom Air memberi pelari manfaat lari yang lebih responsif dan
        energik. Ini membantu memantul dari jalan, membuat kaki pelari naik dan
        turun lebih cepat ke langkah berikutnya, ”kata Brett Holts, Sr. Footwear
        Product Director untuk Nike Running.
      </Text>
      <LinearGradient
        style={[styles.wrapper, styles.wrapperPosition]}
        locations={[0, 1]}
        colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
      >
        <Pressable style={[styles.pressable, styles.pressableBg]} />
      </LinearGradient>
      <View style={[styles.productDetails3Child2, styles.wrapperPosition]} />
      <Pressable
        style={styles.tambahKeKeranjangContainer}
        onPress={() => navigation.navigate("ShoppingCart")}
      >
        <Text
          style={[
            styles.tambahKeKeranjang,
            styles.rp1199999Typo,
            styles.nikeAirZoomTypo,
          ]}
        >
          Tambah Ke keranjang
        </Text>
      </Pressable>
      <Image
        style={[styles.iconlylightheart, styles.iconlylightheartLayout]}
        resizeMode="cover"
        source={require("../assets/iconlylightheart.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.productChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.productDetails3Child3, styles.productChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.productDetails3Child4, styles.productChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.productDetails3Child5, styles.productChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.productDetails3Child6, styles.productChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.iconlyboldarrowLeftCircl, styles.iconlylightheartLayout]}
        resizeMode="cover"
        source={require("../assets/iconlyboldarrow--left-circle.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-131.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rp1199999Typo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.rubik,
  },
  nikeAirZoomTypo: {
    fontWeight: "500",
    color: Color.white,
    fontFamily: FontFamily.rubik,
  },
  sizeUkTypo: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
  },
  sizeUkPosition: {
    left: 21,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.rubik,
    position: "absolute",
  },
  productChildLayout1: {
    height: 39,
    width: 46,
    top: 524,
    position: "absolute",
  },
  productChildLayout2: {
    backgroundColor: Color.white,
    width: 46,
    borderRadius: Border.br_2xs,
    top: 524,
  },
  pressableBg: {
    backgroundColor: Color.greenishGreen,
    borderRadius: Border.br_2xs,
  },
  textTypo: {
    color: Color.black,
    top: 531,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  wrapperPosition: {
    height: 53,
    top: 773,
    position: "absolute",
  },
  iconlylightheartLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  productChildLayout: {
    height: 15,
    width: 15,
    top: 370,
    position: "absolute",
  },
  nikeAirZoom: {
    top: 418,
    left: 17,
    fontSize: FontSize.size_4xl,
    position: "absolute",
  },
  rp1199999: {
    top: 424,
    left: 261,
    position: "absolute",
  },
  sizeUk: {
    top: 478,
  },
  productDetails3Child: {
    left: 20,
  },
  productDetails3Item: {
    left: 96,
  },
  productDetails3Inner: {
    left: 172,
    width: 46,
    top: 524,
    backgroundColor: Color.greenishGreen,
  },
  rectangleView: {
    left: 248,
  },
  productDetails3Child1: {
    left: 324,
  },
  text: {
    left: 36,
  },
  text1: {
    left: 112,
  },
  text2: {
    left: 188,
  },
  text3: {
    left: 264,
  },
  text4: {
    left: 340,
  },
  deskripsiProduk: {
    top: 585,
    fontSize: FontSize.size_lg,
    left: 20,
    position: "absolute",
  },
  teknologiZoomAir: {
    top: 617,
    fontSize: FontSize.size_base,
    width: 346,
    height: 24,
  },
  pressable: {
    height: "100%",
    backgroundColor: Color.greenishGreen,
    width: "100%",
  },
  wrapper: {
    width: 274,
    left: 96,
  },
  productDetails3Child2: {
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 59,
    borderRadius: Border.br_2xs,
    height: 53,
    top: 773,
    left: 21,
  },
  tambahKeKeranjang: {
    fontSize: FontSize.size_3xl,
  },
  tambahKeKeranjangContainer: {
    left: 111,
    top: 782,
    position: "absolute",
  },
  iconlylightheart: {
    height: "2.84%",
    width: "6.15%",
    top: "93.36%",
    right: "83.85%",
    bottom: "3.79%",
    left: "10%",
  },
  ellipseIcon: {
    left: 126,
  },
  productDetails3Child3: {
    left: 155,
  },
  productDetails3Child4: {
    left: 183,
  },
  productDetails3Child5: {
    left: 211,
  },
  productDetails3Child6: {
    left: 239,
  },
  iconlyboldarrowLeftCircl: {
    height: "3.79%",
    width: "8.21%",
    top: "4.38%",
    right: "85.38%",
    bottom: "91.82%",
    left: "6.41%",
  },
  rectangleIcon: {
    top: 0,
    left: 0,
    borderRadius: Border.br_md,
    width: 386,
    height: 370,
    position: "absolute",
  },
  productDetails3: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.black,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProductDetails3;
