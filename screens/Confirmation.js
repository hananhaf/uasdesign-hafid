import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Confirmation = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.confirmation, styles.iconLayout]}
      locations={[0, 1]}
      colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
    >
      <Text
        style={[styles.konfirmasi, styles.konfirmasiTypo]}
      >{`Konfirmasi `}</Text>
      <Image
        style={styles.approvalIcon}
        resizeMode="cover"
        source={require("../assets/approval.png")}
      />
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
      <Text style={[styles.pesananDikonfirmasi, styles.konfirmasiTypo]}>
        Pesanan Dikonfirmasi
      </Text>
      <Text style={[styles.andaAkanSegeraContainer, styles.konfirmasiTypo]}>
        <Text style={styles.andaAkanSegera}>
          Anda akan segera menerima email ringkasan pesanan anda
        </Text>
        <Text style={styles.lihatPesanan}> Lihat pesanan</Text>
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  konfirmasiTypo: {
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  konfirmasi: {
    top: "4.03%",
    left: "23.85%",
    fontSize: FontSize.size_4xl,
    color: Color.black,
  },
  approvalIcon: {
    top: 333,
    left: 150,
    width: 90,
    height: 90,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconlyboldarrowLeftCircl: {
    left: "8.72%",
    top: "4.74%",
    right: "83.08%",
    bottom: "91.47%",
    width: "8.21%",
    height: "3.79%",
    position: "absolute",
  },
  pesananDikonfirmasi: {
    top: 423,
    left: 66,
    fontSize: FontSize.size_3xl,
    color: Color.black,
  },
  andaAkanSegera: {
    fontSize: 13,
    color: Color.black,
  },
  lihatPesanan: {
    fontSize: 17,
    color: Color.white,
  },
  andaAkanSegeraContainer: {
    top: 474,
    left: 20,
    width: 350,
  },
  confirmation: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 844,
    backgroundColor: Color.greenishGreen,
  },
});

export default Confirmation;
