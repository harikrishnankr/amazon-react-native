import CustomButton from "@/components/CustomButton";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Link, router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {

  const primaryColor = useThemeColor({ theme: 'light', colorName: 'primary' });

  return (
    <View style={styles.wrapper}>
      <Image
        style={{ width: "80%", height: 400 }}
        source={require("../assets/images/welcome-image.png")}
      />
      <Text style={[styles.bold, { marginTop: 25 }]}>Best Collection</Text>
      <View style={styles.line2}>
        <Text style={styles.bold}>of</Text>
        <Text style={[styles.bold, { marginLeft: 5, color: primaryColor }]}>Sneakers</Text>
      </View>
      <View style={{ marginTop: 30, width: "100%" }}>
        <CustomButton
          handlePress={async () => router.push("/sign-in")}
          title="Get Started"
          type="primary"
          block
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "80%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  line2: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  bold: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
