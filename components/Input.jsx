import { TextInput, View, Text } from "react-native";

export default function Input({ label, error, ...props }) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text>{label}</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10 }}
        {...props}
      />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
}