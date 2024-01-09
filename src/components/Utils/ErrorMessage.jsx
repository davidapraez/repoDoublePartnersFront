import { View, Text, StyleSheet } from "react-native";

const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffcccc",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    color: "#cc0000",
    textAlign: "center",
  },
});

export default ErrorMessage;
