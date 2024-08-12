import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <ScrollView>
        <Image
          style={style.logo}
          source={require("@/assets/images/logo.png")}
          resizeMode="contain"
        />
        <Text style={style.bold}>Register Account</Text>
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
        <Text style={style.small}>Hello there, register to continue</Text>
        <InputField label="First Name" />
        <InputField label="Last Name" />
        <InputField label="Email Address" />
        <InputField label="Password" secureTextEntry />
        <CustomButton
          type="primary"
          block
          handlePress={async () => router.push("/home")}
          title="Register"
          style={{ marginTop: 20 }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 15,
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
      </ScrollView>
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
