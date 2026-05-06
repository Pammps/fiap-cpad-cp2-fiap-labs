import { TouchableOpacity, Text } from "react-native";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#ED145B",
        padding: 12,
        borderRadius: 8,
        marginTop: 10,
      }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}