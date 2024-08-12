import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  title: String;
  handlePress: () => {};
  isLoading?: boolean;
  block?: boolean;
  type?: "primary" | "secondary";
  style?: any;
}

const CustomButton = ({ title, handlePress, isLoading, type, block, style }: CustomButtonProps) => {
  const className: any[] = [ ButtonStyle.base ];
  if (type === 'primary') {
    className.push(ButtonStyle.primary);
  }
  if (block) {
    className.push(ButtonStyle.block);
  }
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      style={[ className as any, style ]}
    >
      <Text style={{ color: "#fff" }}>{title}</Text>
    </TouchableOpacity>
  );
};

const ButtonStyle = StyleSheet.create({
  base: {
    borderRadius: 7,
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 12,
    paddingBottom: 12,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  primary: {
    backgroundColor: "#feba00",
  },
  block: {
    width: "100%",
  }
});

export default CustomButton;
