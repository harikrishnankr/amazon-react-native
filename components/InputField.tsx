import { Colors } from "@/constants/Colors";
import React from "react";
import { View, TextInput, StyleSheet, Text, KeyboardType } from "react-native";

interface InputField {
  label: string;
  value?: string | number | null | undefined | any;
  onChangeText?: (e: any) => any; 
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardType;
  style?: any;
}

const InputField = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  style,
}: InputField) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%",
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: "#feba00",
  },
  input: {
    height: 50,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default InputField;
