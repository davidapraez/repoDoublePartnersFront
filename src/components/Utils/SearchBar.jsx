import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBar = ({
  onSearch,
  showGraphButton,
  onSearchCompleted,
  onShowFollowersModal,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.length >= 4 && searchTerm !== "doublevpartners") {
      onSearch(searchTerm);
      onSearchCompleted(true);
    } else {
      alert("Término de búsqueda inválido");
      onSearchCompleted(false);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    onSearchCompleted(false);
  };

  const graphButtonColor = showGraphButton ? "#005f99" : "#DDDDDD";
  const trashButtonColor = searchTerm ? "#005f99" : "#DDDDDD";

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Buscar usuario"
      />
      <Icon.Button
        name="search"
        backgroundColor="#005f99"
        onPress={handleSearch}
      />
      <View style={styles.spacer} />
      <Icon.Button
        name="bar-chart"
        backgroundColor={graphButtonColor}
        onPress={onShowFollowersModal}
        disabled={!showGraphButton}
      />
      <View style={styles.spacer} />
      <Icon.Button
        name="trash"
        backgroundColor={trashButtonColor}
        onPress={handleClearSearch}
        disabled={!searchTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 10,
    marginRight: 10,
    height: 35,
  },
  spacer: {
    width: 10,
  },
});

export default SearchBar;
