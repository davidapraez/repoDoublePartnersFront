import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserTable = ({ data }) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.table}>
        <View style={styles.tableRowHeader}>
          <Text style={[styles.tableCellHeader, styles.cellAvatar]}>
            Avatar
          </Text>
          <Text style={[styles.tableCellHeader, styles.cellUsername]}>
            Username
          </Text>
          <Text style={[styles.tableCellHeader, styles.cellOther]}>ID</Text>
          <Text style={[styles.tableCellHeader, styles.cellOther]}>Type</Text>
        </View>
        {data.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.tableRow,
              index % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd,
            ]}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("UserProfile", { login: item.login })
              }
              style={[styles.tableCell, styles.cellAvatar]}
            >
              <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("UserProfile", { login: item.login })
              }
              style={[styles.tableCell, styles.cellUsername]}
            >
              <Text style={styles.text}>{item.login}</Text>
            </TouchableOpacity>
            <Text style={[styles.tableCell, styles.cellOther]}>{item.id}</Text>
            <Text style={[styles.tableCell, styles.cellOther]}>
              {item.type}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    width: "100%",
  },
  tableRowHeader: {
    flexDirection: "row",
    backgroundColor: "#005f99",
    padding: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tableRowEven: {
    backgroundColor: "#f8f9fa",
  },
  tableRowOdd: {
    backgroundColor: "white",
  },
  tableCellHeader: {
    fontWeight: "bold",
    color: "white",
    flex: 1,
    textAlign: "center",
  },
  tableCell: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cellAvatar: {
    flex: 0.5,
  },
  cellUsername: {
    flex: 2,
  },
  cellOther: {
    flex: 1,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  text: {
    color: "#343a40",
  },
});

export default UserTable;
