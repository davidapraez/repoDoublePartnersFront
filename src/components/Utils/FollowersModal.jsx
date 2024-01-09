import React from "react";
import { Modal, View, Button, StyleSheet } from "react-native";
import FollowersBarChart from "./FollowersBarChart";

const FollowersModal = ({ visible, onClose, data }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        <View style={styles.chartContainer}>
          <FollowersBarChart data={data} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Cerrar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    marginTop: 50,
    padding: 20,
    backgroundColor: "white",
  },
  chartContainer: {
    flex: 1,
    marginBottom: 10,
  },
  buttonContainer: {
    paddingBottom: 20,
  },
});

export default FollowersModal;
