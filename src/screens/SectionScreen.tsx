import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type SectionScreenProps = {
  sectionName: string;
  section: string;
  iconName: keyof typeof Ionicons.glyphMap;
};

const SectionScreen: React.FC<SectionScreenProps> = ({
  sectionName,
  section,
  iconName,
}) => {
  const navigation = useNavigation();
  const data = getSectionData();

  const getSectionData = () => {
    switch (section) {
      case "experience":
        return state.experiences;

      case "hobbies/interestes":
        return state.hobbies;
      case "skills":
        return state.skills;
      case "project":
        return state.projects;
      case "qualifications":
        return state.qualifications;
      case "languages":
        return state.languages;
        default: return [];
    }
  };

  return (
    <View>
      <Text>Section Screen</Text>
    </View>
  );
};

export default SectionScreen;

const styles = StyleSheet.create({});
