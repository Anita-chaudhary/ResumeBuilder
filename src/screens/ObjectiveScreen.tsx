import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const ObjectiveScreen = () => {
  const navigation = useNavigation();

  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"white"} />
      <Animated.View entering={FadeInUp.duration(500)} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            style={{ paddingTop: 20, paddingRight: 20 }}
            name={"arrow-back"}
            size={24}
            color={"#ffF"}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Objectives</Text>
      </Animated.View>

      <Animated.View
        entering={FadeInUp.duration(500).delay(200)}
        style={styles.formContainer}
      >
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Objective</Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            value={text}
            onChangeText={(text) => setText(text)}
            placeholder="Enter Your Career Objective"
            placeholderTextColor={"#999"}
          />
        </View>
      </Animated.View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight || 40,
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: "#007AFF",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    paddingTop: 20,
  },
  formContainer: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: "#333",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: "top",
  },
  saveButton: {
    backgroundColor: "#007Aff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});

export default ObjectiveScreen;
