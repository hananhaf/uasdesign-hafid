import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.home}
      locations={[0, 1]}
      colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
    >
      <Image
        style={[
          styles.iconlyboldsearch,
          styles.iconLayout1,
          styles.iconlyboldchartPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/iconlyboldsearch.png")}
      />
      <Image
        style={[
          styles.iconlyboldchart,
          styles.iconLayout1,
          styles.iconlyboldchartPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/iconlyboldchart.png")}
      />
      <Text style={[styles.tokoSepatuUdb, styles.tokoSepatuUdbTypo]}>
        TOKO SEPATU UDB
      </Text>
      <Text style={[styles.yourFashionSolution, styles.tokoSepatuUdbTypo]}>
        Your Fashion Solution
      </Text>
      <View style={[styles.homeChild, styles.homeBg]} />
      <Text style={[styles.produkBaru, styles.produkBaruTypo]}>
        Produk Baru
      </Text>
      <View style={[styles.homeItem, styles.homeBg]} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ProductDetails")}
      >
        <Image
          style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-10.png")}
        />
      </Pressable>
      <LinearGradient
        style={[styles.addToCartWrapper, styles.addToCartWrapperLayout]}
        locations={[0, 1]}
        colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
      >
        <Text style={[styles.addToCart, styles.text9Typo]}>Add to cart</Text>
      </LinearGradient>
      <Text
        style={[
          styles.nikeAirZoomContainer,
          styles.text9Typo,
          styles.addToCartWrapperLayout,
        ]}
      >
        <Text style={styles.nikeAirZoom}>Nike Air Zoom</Text>
        <Text style={styles.text}>$999</Text>
      </Text>
      <Text style={[styles.palingBanyakDi, styles.produkBaruTypo]}>
        Paling Banyak di beli
      </Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.rectangleView, styles.frameLayout]} />
        <Image
          style={[
            styles.rectangleIcon,
            styles.frameChildLayout,
            styles.frameChildPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/rectangle-12.png")}
        />
        <Pressable
          style={[
            styles.container,
            styles.frameChildLayout,
            styles.frameChildPosition,
          ]}
          onPress={() => navigation.navigate("ProductDetails2")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-12.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.frame, styles.frameChildLayout]}
          onPress={() => navigation.navigate("ProductDetails3")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-132.png")}
          />
        </Pressable>
        <Image
          style={[
            styles.frameChild1,
            styles.frameChildLayout,
            styles.frameChildPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/rectangle-14.png")}
        />
        <Image
          style={[
            styles.frameChild2,
            styles.frameChildLayout,
            styles.frameChildPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/rectangle-15.png")}
        />
        <Text style={[styles.nikeAir2, styles.textTypo]}>Nike Air 2</Text>
        <Text style={[styles.nikeCourt, styles.textTypo]}>Nike Court</Text>
        <Text style={[styles.nikeAirMax, styles.textTypo]}>Nike Air Max</Text>
        <Text style={[styles.nikeDunk, styles.textTypo]}>Nike Dunk</Text>
        <Text style={[styles.text1, styles.textTypo]}>$449</Text>
        <Text style={[styles.text2, styles.textTypo]}>$499</Text>
        <Text style={[styles.text3, styles.textTypo]}>$349</Text>
        <Text style={[styles.text4, styles.textTypo]}>$449</Text>
      </View>
      <Text style={[styles.youMightLike, styles.produkBaruTypo]}>
        You Might Like It
      </Text>
      <View style={styles.rectangleGroup}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.rectangleView, styles.frameLayout]} />
        <Image
          style={[
            styles.rectangleIcon,
            styles.frameChildLayout,
            styles.frameChildPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/rectangle-121.png")}
        />
        <Image
          style={[
            styles.frameChild8,
            styles.frameChildLayout,
            styles.frameChildPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/rectangle-133.png")}
        />
        <Image
          style={[
            styles.frameChild1,
            styles.frameChildLayout,
            styles.frameChildPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/rectangle-141.png")}
        />
        <Image
          style={[
            styles.frameChild2,
            styles.frameChildLayout,
            styles.frameChildPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/rectangle-151.png")}
        />
        <Text style={[styles.nikeAir2, styles.textTypo]}>Jordan 32</Text>
        <Text style={[styles.nikeCourt, styles.textTypo]}>Jordan 35</Text>
        <Text style={[styles.nikeAirMax, styles.textTypo]}>Nike Air 3</Text>
        <Text style={[styles.nikeDunk, styles.textTypo]}>Nike Dunk 2</Text>
        <Text style={[styles.text1, styles.textTypo]}>$949</Text>
        <Text style={[styles.text2, styles.textTypo]}>$999</Text>
        <Text style={[styles.text3, styles.textTypo]}>$349</Text>
        <Text style={[styles.text4, styles.textTypo]}>$449</Text>
      </View>
      <View style={styles.bar}>
        <Image
          style={styles.subtractIcon}
          resizeMode="cover"
          source={require("../assets/subtract.png")}
        />
        <Image
          style={[
            styles.iconlyboldhome,
            styles.iconlyboldhomePosition,
            styles.iconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/iconlyboldhome.png")}
        />
        <Image
          style={[
            styles.iconlyboldheart,
            styles.iconlyboldhomePosition,
            styles.iconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/iconlyboldheart2.png")}
        />
        <Pressable
          style={[styles.iconlyboldprofile, styles.iconlyboldhomePosition]}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Image
            style={[styles.iconLayout, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/iconlyboldprofile.png")}
          />
        </Pressable>
        <View
          style={[styles.iconlyboldnotification, styles.iconlyboldhomePosition]}
        >
          <Image
            style={[styles.notificationIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/notification.png")}
          />
        </View>
        <Pressable
          style={styles.ellipsePressable}
          onPress={() => navigation.navigate("OrderHistory")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
        </Pressable>
        <Image
          style={[styles.iconlyboldbag, styles.barChildPosition]}
          resizeMode="cover"
          source={require("../assets/iconlyboldbag.png")}
        />
        <Image
          style={[styles.barChild, styles.barChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Text style={[styles.text9, styles.text9Typo]}>2</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  iconlyboldchartPosition: {
    bottom: "93.96%",
    top: "3.55%",
    width: "8.86%",
    height: "2.49%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tokoSepatuUdbTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    left: "9.97%",
    position: "absolute",
  },
  homeBg: {
    backgroundColor: Color.black,
    position: "absolute",
  },
  produkBaruTypo: {
    fontSize: FontSize.size_3xl,
    height: "2.34%",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  addToCartWrapperLayout: {
    width: "27.42%",
    position: "absolute",
  },
  text9Typo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
  },
  frameLayout: {
    height: 64,
    width: 143,
    borderBottomLeftRadius: Border.br_md,
    borderBottomRightRadius: Border.br_md,
    top: 202,
    backgroundColor: Color.black,
    position: "absolute",
  },
  frameChildLayout: {
    height: 226,
    width: 143,
    position: "absolute",
  },
  frameChildPosition: {
    top: 10,
    height: 226,
  },
  textTypo: {
    top: 241,
    color: Color.white,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  iconlyboldhomePosition: {
    bottom: "16.67%",
    top: "55.26%",
    width: "8.21%",
    height: "28.07%",
    position: "absolute",
  },
  barChildPosition: {
    right: "45.9%",
    top: "17.54%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconlyboldsearch: {
    right: "87.72%",
    left: "3.41%",
  },
  iconlyboldchart: {
    right: "5.31%",
    left: "85.83%",
  },
  tokoSepatuUdb: {
    height: "1.87%",
    width: "49.86%",
    top: "6.99%",
    fontSize: FontSize.size_lg,
  },
  yourFashionSolution: {
    height: "1.4%",
    width: "43.49%",
    top: "8.81%",
    fontSize: FontSize.size_base,
  },
  homeChild: {
    height: "0.23%",
    width: "20.5%",
    top: "10.94%",
    right: "69%",
    bottom: "88.82%",
    left: "10.5%",
    borderRadius: Border.br_2xs,
  },
  produkBaru: {
    width: "41.55%",
    top: "13.17%",
    left: "1.31%",
  },
  homeItem: {
    height: "14.5%",
    width: "91.95%",
    top: "16.66%",
    right: "4.68%",
    bottom: "68.84%",
    left: "3.37%",
    borderRadius: Border.br_md,
  },
  icon: {
    borderRadius: Border.br_md,
  },
  wrapper: {
    left: "3.94%",
    top: "16.62%",
    right: "4.37%",
    bottom: "68.65%",
    width: "91.69%",
    height: "14.73%",
    position: "absolute",
  },
  addToCart: {
    fontSize: FontSize.size_base,
  },
  addToCartWrapper: {
    height: "2.65%",
    top: "32.41%",
    right: "9.21%",
    bottom: "64.94%",
    left: "63.37%",
    flexDirection: "row",
    paddingHorizontal: 9,
    paddingVertical: 8,
    borderRadius: Border.br_md,
    backgroundColor: Color.greenishGreen,
  },
  nikeAirZoom: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text: {
    margin: 0,
  },
  nikeAirZoomContainer: {
    height: "2.81%",
    top: "31.94%",
    left: "7.27%",
    fontSize: FontSize.size_base,
  },
  palingBanyakDi: {
    width: "68.42%",
    top: "36.47%",
    left: "1.84%",
  },
  frameChild: {
    left: 10,
  },
  frameItem: {
    left: 165,
  },
  frameInner: {
    left: 320,
  },
  rectangleView: {
    left: 475,
  },
  rectangleIcon: {
    left: 10,
    borderRadius: Border.br_md,
  },
  icon1: {
    borderRadius: Border.br_md,
  },
  container: {
    left: 10,
  },
  frame: {
    top: 0,
    left: 165,
  },
  frameChild1: {
    left: 320,
    borderRadius: Border.br_md,
  },
  frameChild2: {
    left: 475,
    borderRadius: Border.br_md,
  },
  nikeAir2: {
    left: 15,
  },
  nikeCourt: {
    left: 171,
  },
  nikeAirMax: {
    left: 325,
  },
  nikeDunk: {
    left: 479,
  },
  text1: {
    left: 111,
  },
  text2: {
    left: 267,
  },
  text3: {
    left: 421,
  },
  text4: {
    left: 575,
  },
  rectangleParent: {
    height: "27.96%",
    width: "104.72%",
    top: "40.22%",
    right: "-2.62%",
    bottom: "31.81%",
    left: "-2.1%",
    position: "absolute",
  },
  youMightLike: {
    width: "54.85%",
    top: "67.58%",
    left: "1.57%",
  },
  frameChild8: {
    left: 165,
    borderRadius: Border.br_md,
  },
  rectangleGroup: {
    height: "28.06%",
    width: "106.56%",
    top: "71.94%",
    right: "-6.3%",
    bottom: "0%",
    left: "-0.26%",
    position: "absolute",
  },
  subtractIcon: {
    height: 53,
    width: 389,
  },
  iconlyboldhome: {
    right: "85.64%",
    left: "6.15%",
  },
  iconlyboldheart: {
    right: "27.18%",
    left: "64.62%",
  },
  iconlyboldprofile: {
    left: "85.64%",
    right: "6.15%",
  },
  notificationIcon: {
    height: "83.33%",
    width: "70.83%",
    top: "8.33%",
    right: "14.58%",
    bottom: "8.33%",
    left: "14.58%",
    position: "absolute",
  },
  iconlyboldnotification: {
    right: "64.62%",
    left: "27.18%",
  },
  ellipsePressable: {
    left: "40.77%",
    top: "0%",
    right: "40.77%",
    bottom: "36.84%",
    width: "18.46%",
    height: "63.16%",
    position: "absolute",
  },
  iconlyboldbag: {
    bottom: "54.39%",
    left: "45.9%",
    width: "8.21%",
    height: "28.07%",
    top: "17.54%",
  },
  barChild: {
    height: "12.28%",
    width: "3.59%",
    bottom: "70.18%",
    left: "50.51%",
  },
  text9: {
    top: "18.42%",
    left: "51.54%",
    fontSize: 9,
    position: "absolute",
  },
  bar: {
    bottom: 0,
    left: 2,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 250,
    elevation: 250,
    shadowOpacity: 1,
    height: 87,
    width: 389,
    position: "absolute",
  },
  home: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 1194,
    backgroundColor: Color.greenishGreen,
    width: "100%",
  },
});

export default Home;
