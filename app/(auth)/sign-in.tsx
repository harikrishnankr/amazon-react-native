import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <Image
        style={style.logo}
        source={require("@/assets/images/logo.png")}
        resizeMode="contain"
      />
      <Text style={style.bold}>Welcome Back</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 5,
          marginBottom: 15,
        }}
      >
        <Text style={style.bold}>to</Text>
        <Text style={[style.bold, style.cromp]}>CROMP</Text>
      </View>
      <Text style={style.small}>Hello there, login to continue</Text>
      <InputField label="Email Address" />
      <InputField label="Password" secureTextEntry />
      <CustomButton
        type="primary"
        block
        handlePress={async () => router.push("/home")}
        title="Login"
        style={{ marginTop: 20 }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          style={{ marginLeft: 5 }}
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text style={{ color: Colors.primary }}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  logo: {
    width: 200,
    height: 100,
    marginVertical: 15,
  },
  cromp: {
    marginLeft: 5,
    color: Colors.primary,
  },
  bold: {
    fontSize: 32,
    fontWeight: "bold",
  },
  small: {
    color: "#ccc",
    fontWeight: "500",
    marginBottom: 20,
  },
});
