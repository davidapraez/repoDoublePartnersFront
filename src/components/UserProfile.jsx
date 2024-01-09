import { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import axios from "axios";
import ErrorMessage from "./Utils/ErrorMessage";

const UserProfile = ({ route }) => {
  const { login } = route.params;
  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    axios
      .get(`https://api.github.com/users/${login}`)
      .then((response) => {
        setUserDetails(response.data);
      })
      .catch((error) => {
        setError(
          "Error al cargar detalles del usuario. Por favor, intenta de nuevo.",
          error
        );
      });
  }, [login]);

  const InfoItem = ({ title, value }) => {
    return value ? (
      <View style={styles.infoItem}>
        <Text style={styles.infoTitle}>{title}: </Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    ) : null;
  };

  return (
    <ScrollView style={styles.container}>
      <ErrorMessage error={error} />
      {userDetails.avatar_url && (
        <Image source={{ uri: userDetails.avatar_url }} style={styles.avatar} />
      )}
      <InfoItem title="Name" value={userDetails.name} />
      <InfoItem title="Username" value={userDetails.login} />
      <InfoItem title="ID" value={userDetails.id} />
      <InfoItem title="Biography" value={userDetails.bio} />
      <InfoItem title="Company" value={userDetails.company} />
      <InfoItem title="Followers" value={userDetails.followers} />
      <InfoItem title="Location" value={userDetails.location} />
      <InfoItem title="URL" value={userDetails.html_url} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#005f99",
  },
  infoItem: {
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: "row",
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#005f99",
  },
  infoValue: {
    fontSize: 18,
    color: "#343a40",
    flexShrink: 1,
  },
});

export default UserProfile;
