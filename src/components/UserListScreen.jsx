import { useState } from "react";
import { View, StyleSheet } from "react-native";
import UserTable from "./UserTable";
import axios from "axios";
import SearchBar from "./Utils/SearchBar";
import FollowersModal from "./Utils/FollowersModal";
import ErrorMessage from "./Utils/ErrorMessage";

const UserListScreen = () => {
  const [users, setUsers] = useState([]);
  const [showGraph, setShowGraph] = useState(false);
  const [showGraphButton, setShowGraphButton] = useState(false);
  const [error, setError] = useState("");

  const searchUsers = (searchTerm) => {
    setError("");
    axios
      .get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((response) => {
        setUsers(response.data.items.slice(0, 10));
        setShowGraphButton(true);
      })
      .catch((error) => {
        setError("Error al buscar usuarios. Por favor, intenta de nuevo.");
        setShowGraphButton(false);
      });
  };
  const handleSearchCompleted = (hasResults) => {
    setShowGraphButton(hasResults);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        onSearch={searchUsers}
        showGraphButton={showGraphButton}
        onSearchCompleted={handleSearchCompleted}
        onShowFollowersModal={() => setShowGraph(true)}
      />
      <ErrorMessage error={error} />
      <UserTable data={users} />
      <FollowersModal
        visible={showGraph}
        onClose={() => setShowGraph(false)}
        data={users}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    marginTop: 50,
    padding: 20,
    flex: 1,
    backgroundColor: "white",
  },
});

export default UserListScreen;
