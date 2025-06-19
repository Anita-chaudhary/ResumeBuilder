import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#4B67B7", "#182848"]} style={styles.container}>
      <View style={styles.circleTopLeft}></View>
      <View style={styles.circleBottomRight}></View>

      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Build Your Perfect CV</Text>
          <Text style={styles.headerSubtitle}>
            Create a professional CV in minutes with our Easy-to-use Templates
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="document-text-outline" size={80} color="white" />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("TemplateTab", {
              screen: "TemplateScreen",
            })
          }
        >
          <LinearGradient
            colors={["#007AFF", "#005bb5"]}
            style={styles.buttonGradient}
          >
            <Ionicons
              name="add"
              size={28}
              color="white"
              style={styles.buttonIcon}
            />

            <Text style={styles.buttonText}>Create with Template</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.manualButton}>
          <Text style={styles.manualButtonText}>Or Create Manually</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "rgba(0,0,0,0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#E0e0e0",
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 8,
  },

  circleTopLeft: {
    position: "absolute",
    top: -50,
    left: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  circleBottomRight: {
    position: "absolute",
    bottom: -30,
    right: -50,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  button: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 8,
    shadowOpacity: 0.3,
  },
  buttonGradient: {
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 600,
    color: "white",
  },
  manualButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
  },
  manualButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: 500,
  },
});

export default HomeScreen;
