import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const profileSections = [
    {
      id: "0",
      title: "Personal Details",
      icon: "person-outline",
      screen: "PersonalDetails",
    },
    {
      id: "1",
      title: "Objectives",
      icon: "document-text-outline",
      screen: "Objective",
    },
    {
      id: "2",
      title: "Education",
      icon: "school-outline",
      screen: "Education",
    },
    {
      id: "3",
      title: "Work Experience",
      icon: "briefcase-outline",
      screen: "Experience",
    },
    {
      id: "4",
      title: "Skills",
      icon: "construct-outline",
      screen: "Skill",
    },
    {
      id: "5",
      title: "Projects",
      icon: "folder-open-outline",
      screen: "Projects",
    },
    {
      id: "6",
      title: "Contact Info",
      icon: "call-outline",
      screen: "Contact",
    },
    {
      id: "7",
      title: "Organisation",
      icon: "business-outline",
      screen: "Organisation",
    },
    {
      id: "8",
      title: "Certificates",
      icon: "ribbon-outline",
      screen: "Certification",
    },
  ];

  const renderProfile = ({
    item,
    index,
  }: {
    item: (typeof profileSections)[0];
    index: number;
  }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={styles.section}
        >
          <Ionicons name={item.icon} size={24} color={"#007AFF"} />
          <Text>{item?.title}</Text>

          <Ionicons name="chevron-forward" size={24} color={"#ccc"} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"white"} />
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.title}>Professional title</Text>
        </View>
      </View>

      <FlatList
        data={profileSections}
        renderItem={renderProfile}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginTop: 50,
  },
  header: {
    alignItems: "center",
    padding: 30,
    paddingTop: StatusBar.currentHeight || 40,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10,
  },
  headerTextContainer: {
    flex: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#007Aff",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: "#666",
    fontStyle: "italic",
    fontWeight: 600,
  },
  list: {
    padding: 15,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginLeft: 10,
  },
  tickIcon: {
    marginLeft: 10,
  },
});

export default ProfileScreen;
