import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const OrderHistory = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.orderHistory}
      locations={[0, 1]}
      colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
    >
      <Pressable
        style={[
          styles.iconlyboldarrowLeftCircl,
          styles.iconlyboldheartPosition,
        ]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/iconlyboldarrow--left-circle.png")}
        />
      </Pressable>
      <Text style={styles.riwayatPesanan}>Riwayat Pesanan</Text>
      <Image
        style={[
          styles.iconlyboldheart,
          styles.iconLayout1,
          styles.iconlyboldheartPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/iconlyboldheart.png")}
      />
      <View style={[styles.orderHistoryChild, styles.orderLayout]} />
      <View style={[styles.orderHistoryItem, styles.orderLayout]} />
      <View style={[styles.orderHistoryInner, styles.orderLayout]} />
      <View style={[styles.orderHistoryChild, styles.orderLayout]} />
      <Text style={[styles.rp1199999, styles.rp1199999Typo]}>Rp1.199.999</Text>
      <Text style={[styles.rp11999991, styles.rp1199999Typo]}>Rp1.199.999</Text>
      <Text style={[styles.rp11999992, styles.rp1199999Typo]}>Rp1.199.999</Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <Image
        style={[styles.orderHistoryChild1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-13.png")}
      />
      <Image
        style={[styles.orderHistoryChild2, styles.rectangleIconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <Text style={[styles.nikeAirZoom, styles.nikeTypo]}>Nike Air Zoom</Text>
      <Text style={[styles.pesananDikirim, styles.pesananTypo]}>
        Pesanan Dikirim
      </Text>
      <Text style={[styles.pesananDiterima, styles.nikeTypo]}>
        Pesanan Diterima
      </Text>
      <Text style={[styles.pesananDiterima1, styles.pesananTypo]}>
        Pesanan Diterima
      </Text>
      <Text style={[styles.nikeAirZoom1, styles.nikeTypo]}>Nike Air Zoom</Text>
      <Text style={[styles.nikeAirZoom2, styles.nikeTypo]}>Nike Air Zoom</Text>
      <View style={[styles.orderHistoryChild3, styles.orderChildLayout]} />
      <View style={[styles.orderHistoryChild4, styles.orderChildPosition1]} />
      <View style={[styles.orderHistoryChild5, styles.orderChildPosition]} />
      <View style={[styles.orderHistoryChild6, styles.orderChildLayout]} />
      <View style={[styles.orderHistoryChild7, styles.orderChildPosition1]} />
      <View style={[styles.orderHistoryChild8, styles.orderChildPosition]} />
      <Text style={[styles.size7, styles.textTypo2, styles.textPosition]}>
        Size : 7
      </Text>
      <Text style={[styles.size71, styles.textTypo1]}>Size : 7</Text>
      <Text style={[styles.size72, styles.textTypo]}>Size : 7</Text>
      <Image
        style={[styles.iconlyboldarrowDown2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/iconlyboldarrow--down-2.png")}
      />
      <Image
        style={[styles.iconlyboldarrowDown3, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/iconlyboldarrow--down-2.png")}
      />
      <Image
        style={[styles.iconlyboldarrowDown4, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/iconlyboldarrow--down-2.png")}
      />
      <Text style={[styles.text, styles.textTypo2, styles.textPosition]}>
        -
      </Text>
      <Text style={[styles.text1, styles.textTypo1]}>-</Text>
      <Text style={[styles.text2, styles.textTypo]}>-</Text>
      <Text style={[styles.text3, styles.textTypo2, styles.textPosition]}>
        1
      </Text>
      <Text style={[styles.text4, styles.textTypo1]}>1</Text>
      <Text style={[styles.text5, styles.textTypo]}>1</Text>
      <Text style={[styles.text6, styles.textTypo2, styles.textPosition]}>
        +
      </Text>
      <Text style={[styles.text7, styles.textTypo1]}>+</Text>
      <Text style={[styles.text8, styles.textTypo]}>+</Text>
      <Image
        style={[styles.check1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/check-1.png")}
      />
      <Image
        style={[styles.check2Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/check-1.png")}
      />
      <Image
        style={[styles.check3Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/check-1.png")}
      />
      <Text style={[styles.deliveryBy28th, styles.textTypo2]}>
        Delivery by 28th Feb
      </Text>
      <Text style={[styles.deliveryBy28th1, styles.textTypo2]}>
        Delivery by 28th Feb
      </Text>
      <Text style={[styles.deliveryBy28th2, styles.textTypo2]}>
        Delivery by 28th Feb
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconlyboldheartPosition: {
    height: "3.79%",
    width: "8.21%",
    bottom: "91.82%",
    top: "4.38%",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  orderLayout: {
    backgroundColor: Color.black,
    width: "88.97%",
    height: "19.91%",
    borderRadius: Border.br_md,
    position: "absolute",
  },
  rp1199999Typo: {
    fontSize: FontSize.size_xl,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleIconPosition: {
    left: "8.72%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nikeTypo: {
    fontSize: FontSize.size_3xl,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  pesananTypo: {
    left: "8.21%",
    fontSize: FontSize.size_3xl,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  orderChildLayout: {
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    bottom: "75.12%",
    top: "22.27%",
    width: "18.97%",
    height: "2.61%",
    position: "absolute",
  },
  orderChildPosition1: {
    bottom: "47.16%",
    top: "50.24%",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    width: "18.97%",
    height: "2.61%",
    position: "absolute",
  },
  orderChildPosition: {
    bottom: "19.19%",
    top: "78.2%",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    width: "18.97%",
    height: "2.61%",
    position: "absolute",
  },
  textTypo2: {
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
  textTypo1: {
    top: "50.47%",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  textTypo: {
    top: "78.44%",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout: {
    width: "3.85%",
    height: "1.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconlyboldarrowLeftCircl: {
    right: "85.38%",
    left: "6.41%",
  },
  riwayatPesanan: {
    top: "4.03%",
    left: "15.64%",
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  iconlyboldheart: {
    right: "5.13%",
    left: "86.67%",
  },
  orderHistoryChild: {
    top: "14.93%",
    right: "5.9%",
    bottom: "65.17%",
    left: "5.13%",
  },
  orderHistoryItem: {
    top: "42.89%",
    right: "6.41%",
    bottom: "37.2%",
    left: "4.62%",
  },
  orderHistoryInner: {
    top: "70.85%",
    right: "5.64%",
    bottom: "9.24%",
    left: "5.38%",
  },
  rp1199999: {
    top: "26.07%",
    color: Color.white,
    left: "45.38%",
  },
  rp11999991: {
    top: "54.03%",
    left: "44.87%",
    color: Color.white,
  },
  rp11999992: {
    top: "81.99%",
    left: "45.13%",
    color: Color.white,
  },
  rectangleIcon: {
    height: "16.59%",
    width: "32.31%",
    top: "16.59%",
    right: "58.97%",
    bottom: "66.82%",
    borderRadius: Border.br_sm,
  },
  orderHistoryChild1: {
    height: "15.52%",
    width: "27.95%",
    top: "44.43%",
    right: "63.59%",
    bottom: "40.05%",
    left: "8.46%",
    borderRadius: Border.br_md,
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  orderHistoryChild2: {
    height: "16.47%",
    width: "27.44%",
    top: "72.63%",
    right: "63.85%",
    bottom: "10.9%",
    borderRadius: Border.br_md,
  },
  nikeAirZoom: {
    top: "17.42%",
    left: "45.38%",
  },
  pesananDikirim: {
    top: "10.78%",
  },
  pesananDiterima: {
    top: "38.74%",
    left: "6.41%",
  },
  pesananDiterima1: {
    top: "66.47%",
  },
  nikeAirZoom1: {
    top: "45.5%",
    left: "44.87%",
  },
  nikeAirZoom2: {
    top: "73.7%",
    left: "45.13%",
  },
  orderHistoryChild3: {
    right: "35.13%",
    left: "45.9%",
  },
  orderHistoryChild4: {
    right: "35.64%",
    left: "45.38%",
  },
  orderHistoryChild5: {
    right: "35.38%",
    left: "45.64%",
  },
  orderHistoryChild6: {
    right: "14.36%",
    left: "66.67%",
  },
  orderHistoryChild7: {
    right: "14.87%",
    left: "66.15%",
  },
  orderHistoryChild8: {
    right: "14.62%",
    left: "66.41%",
  },
  size7: {
    left: "47.44%",
  },
  size71: {
    left: "46.92%",
  },
  size72: {
    left: "47.18%",
  },
  iconlyboldarrowDown2: {
    top: "22.75%",
    bottom: "75.47%",
    left: "60.51%",
    right: "35.64%",
  },
  iconlyboldarrowDown3: {
    top: "50.71%",
    right: "36.15%",
    bottom: "47.51%",
    left: "60%",
  },
  iconlyboldarrowDown4: {
    top: "78.67%",
    right: "35.9%",
    bottom: "19.55%",
    left: "60.26%",
  },
  text: {
    left: "67.69%",
  },
  text1: {
    left: "67.18%",
  },
  text2: {
    left: "67.44%",
  },
  text3: {
    left: "75.13%",
  },
  text4: {
    left: "74.62%",
  },
  text5: {
    left: "74.87%",
  },
  text6: {
    left: "81.54%",
  },
  text7: {
    left: "81.03%",
  },
  text8: {
    left: "81.28%",
  },
  check1Icon: {
    top: "30.57%",
    right: "50.77%",
    bottom: "67.65%",
    left: "45.38%",
  },
  check2Icon: {
    top: "58.53%",
    right: "51.28%",
    bottom: "39.69%",
    left: "44.87%",
  },
  check3Icon: {
    top: "86.49%",
    right: "51.03%",
    bottom: "11.73%",
    left: "45.13%",
  },
  deliveryBy28th: {
    top: "30.33%",
    left: "51.03%",
    color: Color.white,
  },
  deliveryBy28th1: {
    top: "58.29%",
    left: "50.51%",
    color: Color.white,
  },
  deliveryBy28th2: {
    top: "86.26%",
    left: "50.77%",
    color: Color.white,
  },
  orderHistory: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 844,
    backgroundColor: Color.greenishGreen,
    overflow: "hidden",
    width: "100%",
  },
});

export default OrderHistory;
